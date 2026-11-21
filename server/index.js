import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_FILE = path.join(__dirname, 'db.json');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Root welcome route for browser visitors
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Lunaria Hill Hospital API</title>
      <style>
        body { font-family: system-ui, -apple-system, sans-serif; background: #f8fafc; color: #0f172a; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
        .card { background: white; padding: 2.5rem; border-radius: 1.5rem; border: 1px solid #e2e8f0; box-shadow: 0 10px 25px rgba(2,49,107,0.08); max-width: 480px; text-align: center; }
        .badge { background: #dcfce7; color: #15803d; font-size: 0.75rem; font-weight: 700; padding: 0.35rem 0.85rem; border-radius: 9999px; display: inline-block; margin-bottom: 1rem; }
        h1 { margin: 0 0 0.5rem; font-size: 1.5rem; color: #02316B; }
        p { color: #64748b; font-size: 0.875rem; line-height: 1.5; margin: 0 0 1.5rem; }
        .btn { display: inline-block; background: #02316B; color: white; text-decoration: none; font-weight: 600; font-size: 0.875rem; padding: 0.75rem 1.5rem; border-radius: 0.75rem; transition: background 0.2s; }
        .btn:hover { background: #005C72; }
      </style>
    </head>
    <body>
      <div class="card">
        <span class="badge">● REST API Active & Online</span>
        <h1>Lunaria Hill Hospital Backend</h1>
        <p>This is the backend API server (Port 5000). The main hospital website & role-based dashboard runs on the Vite frontend server at <strong>http://localhost:8080</strong>.</p>
        <a href="http://localhost:8080/dashboard" class="btn">Open Hospital Dashboard (Port 8080) &rarr;</a>
      </div>
    </body>
    </html>
  `);
});

// Helper to read DB
const readDB = () => {
  try {
    const raw = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading db.json:', err);
    return {};
  }
};

// Helper to write DB
const writeDB = (data) => {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Error writing db.json:', err);
    return false;
  }
};

// --- AUTH & DEMO LOGIN ---
app.post('/api/auth/login', (req, res) => {
  const { email, password, roleDemo } = req.body;
  const db = readDB();

  if (roleDemo) {
    const user = db.users.find(u => u.role === roleDemo);
    if (user) {
      return res.json({ success: true, user });
    }
  }

  const user = db.users.find(u => u.email === email && u.password === password);
  if (user) {
    return res.json({ success: true, user });
  }

  return res.status(401).json({ success: false, message: 'Invalid email or password' });
});

// --- ADMIN ENDPOINTS ---
app.get('/api/admin/overview', (req, res) => {
  const db = readDB();
  res.json({
    stats: db.hospitalStats,
    departments: db.departments,
    recentAppointments: db.appointments.slice(0, 5),
    recentLogs: db.auditLogs.slice(0, 6)
  });
});

app.get('/api/admin/departments', (req, res) => {
  const db = readDB();
  res.json(db.departments || []);
});

app.post('/api/admin/departments', (req, res) => {
  const db = readDB();
  const newDept = {
    id: `dept-${Date.now().toString().slice(-4)}`,
    ...req.body
  };
  db.departments.push(newDept);
  writeDB(db);
  res.status(201).json(newDept);
});

app.get('/api/admin/staff', (req, res) => {
  const db = readDB();
  res.json(db.staff || []);
});

app.post('/api/admin/staff', (req, res) => {
  const db = readDB();
  const newStaff = {
    id: `st-${Date.now().toString().slice(-4)}`,
    ...req.body
  };
  db.staff.push(newStaff);
  writeDB(db);
  res.status(201).json(newStaff);
});

app.get('/api/admin/audit-logs', (req, res) => {
  const db = readDB();
  res.json(db.auditLogs || []);
});

// --- DOCTOR ENDPOINTS ---
app.get('/api/doctor/appointments', (req, res) => {
  const db = readDB();
  res.json(db.appointments || []);
});

app.patch('/api/doctor/appointments/:id/status', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const db = readDB();
  const apt = db.appointments.find(a => a.id === id);
  if (apt) {
    apt.status = status;
    db.auditLogs.unshift({
      id: `log-${Date.now()}`,
      timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19),
      user: 'Dr. Sarah Jenkins',
      role: 'Doctor',
      action: `Updated appointment ${id} status to ${status}`
    });
    writeDB(db);
    return res.json({ success: true, appointment: apt });
  }
  res.status(404).json({ error: 'Appointment not found' });
});

app.get('/api/doctor/patients', (req, res) => {
  const db = readDB();
  res.json(db.patients || []);
});

app.post('/api/doctor/prescriptions', (req, res) => {
  const db = readDB();
  const newRx = {
    id: `rx-${Date.now().toString().slice(-4)}`,
    date: new Date().toISOString().slice(0, 10),
    ...req.body
  };
  db.prescriptions.unshift(newRx);
  db.auditLogs.unshift({
    id: `log-${Date.now()}`,
    timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19),
    user: req.body.doctorName || 'Doctor',
    role: 'Doctor',
    action: `Created prescription ${newRx.id} for ${req.body.patientName}`
  });
  writeDB(db);
  res.status(201).json(newRx);
});

// --- PATIENT ENDPOINTS ---
app.get('/api/patient/appointments', (req, res) => {
  const db = readDB();
  res.json(db.appointments.filter(a => a.patientName === 'Johnathan Doe') || []);
});

app.post('/api/patient/appointments', (req, res) => {
  const db = readDB();
  const newApt = {
    id: `apt-${Date.now().toString().slice(-4)}`,
    status: 'Scheduled',
    ...req.body
  };
  db.appointments.unshift(newApt);
  db.hospitalStats.todayAppointments += 1;
  writeDB(db);
  res.status(201).json(newApt);
});

app.get('/api/patient/prescriptions', (req, res) => {
  const db = readDB();
  res.json(db.prescriptions || []);
});

app.get('/api/patient/bills', (req, res) => {
  const db = readDB();
  res.json(db.invoices || []);
});

app.post('/api/patient/bills/:id/pay', (req, res) => {
  const { id } = req.params;
  const db = readDB();
  const inv = db.invoices.find(i => i.id === id);
  if (inv) {
    inv.status = 'Paid';
    inv.paid = inv.amount;
    inv.method = req.body.method || 'Online Payment';
    writeDB(db);
    return res.json({ success: true, invoice: inv });
  }
  res.status(404).json({ error: 'Invoice not found' });
});

// --- RECEPTIONIST ENDPOINTS ---
app.get('/api/reception/queue', (req, res) => {
  const db = readDB();
  res.json(db.queue || []);
});

app.patch('/api/reception/queue/:token/status', (req, res) => {
  const { token } = req.params;
  const { status } = req.body;
  const db = readDB();
  const item = db.queue.find(q => q.token === token);
  if (item) {
    item.status = status;
    writeDB(db);
    return res.json({ success: true, queueItem: item });
  }
  res.status(404).json({ error: 'Queue item not found' });
});

app.post('/api/reception/register-patient', (req, res) => {
  const db = readDB();
  const newPatient = {
    id: `P-${Date.now().toString().slice(-5)}`,
    lastVisit: new Date().toISOString().slice(0, 10),
    totalVisits: 1,
    ...req.body
  };
  db.patients.push(newPatient);
  db.hospitalStats.totalPatients += 1;

  // Add to queue automatically
  const token = `T-${100 + db.queue.length + 1}`;
  const queueEntry = {
    token,
    patientName: newPatient.name,
    patientId: newPatient.id,
    doctorName: req.body.assignedDoctor || 'Dr. Sarah Jenkins',
    room: req.body.assignedRoom || 'OPD-304',
    status: 'Waiting',
    checkInTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    priority: req.body.priority || 'Normal'
  };
  db.queue.push(queueEntry);

  writeDB(db);
  res.status(201).json({ patient: newPatient, queue: queueEntry });
});

app.post('/api/reception/invoices', (req, res) => {
  const db = readDB();
  const newInv = {
    id: `INV-2026-${Date.now().toString().slice(-4)}`,
    date: new Date().toISOString().slice(0, 10),
    ...req.body
  };
  db.invoices.unshift(newInv);
  writeDB(db);
  res.status(201).json(newInv);
});

app.listen(PORT, () => {
  console.log(`🏥 Lunaria Hill Hospital Express Server running on http://localhost:${PORT}`);
});
