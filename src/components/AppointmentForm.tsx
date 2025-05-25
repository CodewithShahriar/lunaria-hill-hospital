import { useState } from 'react';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { format, addMinutes } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import emailjs from 'emailjs-com';


import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  department: z.string().min(1, { message: "Please select a department." }),
  doctor: z.string().min(1, { message: "Please select a doctor." }),
  date: z.date({ required_error: "Please select a date." }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const departments = [
  { id: "medicine", name: "Medicine" },
  { id: "cardiology", name: "Cardiology" },
  { id: "neurology", name: "Neurology" },
  { id: "pediatrics", name: "Pediatrics" },
  { id: "gastroenterology", name: "Gastroenterology" },
  { id: "surgery", name: "Surgery" },
  { id: "orthopedics", name: "Orthopedics" },
  { id: "gynecology", name: "Gynecology" },
];

// Mock doctor data
const doctors = {
  medicine: [
    { id: "dr-davis", name: "Dr. Sarah Davis" },
    { id: "dr-wilson", name: "Dr. Robert Wilson" },
  ],
  cardiology: [
    { id: "dr-smith", name: "Dr. John Smith" },
    { id: "dr-taylor", name: "Dr. Jennifer Taylor" },
  ],
  neurology: [
    { id: "dr-brown", name: "Dr. Michael Brown" },
    { id: "dr-thomas", name: "Dr. Lisa Thomas" },
  ],
  pediatrics: [
    { id: "dr-martinez", name: "Dr. Maria Martinez" },
    { id: "dr-harris", name: "Dr. James Harris" },
  ],
  gastroenterology: [
    { id: "dr-anderson", name: "Dr. David Anderson" },
    { id: "dr-clark", name: "Dr. Patricia Clark" },
  ],
  surgery: [
    { id: "dr-lewis", name: "Dr. Richard Lewis" },
    { id: "dr-lee", name: "Dr. William Lee" },
  ],
  orthopedics: [
    { id: "dr-walker", name: "Dr. Elizabeth Walker" },
    { id: "dr-hall", name: "Dr. Thomas Hall" },
  ],
  gynecology: [
    { id: "dr-allen", name: "Dr. Nancy Allen" },
    { id: "dr-johnson", name: "Dr. Emily Johnson" },
  ],
};

interface AppointmentFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AppointmentForm({ open, onOpenChange }: AppointmentFormProps) {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      department: "",
      doctor: "",
      message: "",
    },
  });

 const generateSerial = () => {
  return Math.floor(10 + Math.random() * 90).toString(); // 2-digit serial
};


  const generateArrivalTime = () => {
    const baseHour = 9; // 9:00 AM
    const randomMinutes = Math.floor(Math.random() * 180); // Up to 3 hours
    const arrival = addMinutes(new Date().setHours(baseHour, 0, 0, 0), randomMinutes);
    return format(arrival, "hh:mm a");
  };

const onSubmit = async (data: FormValues) => {
  setIsSubmitting(true);

  const serial = generateSerial();
  const arrivalTime = generateArrivalTime();

  // email content
  const templateParams = {
    to_name: data.name,
    to_email: data.email,
    doctor: data.doctor,
    date: format(data.date, "PPP"),
    serial,
    arrivalTime,
    message: data.message || "N/A",
  };

  try {
    await emailjs.send(
      "service_qxumrdr",
      "template_8184c6o",
      templateParams,
      "1TraX6MWkaM9_aQn-"
    );

    toast({
      title: "Appointment Confirmed!",
      description: `A confirmation has been sent to ${data.email}.`,
      className: "border border-blue-500 shadow-lg",
    });

    form.reset();
    setIsSubmitting(false); // ✅ Reset here before closing modal
    onOpenChange(false);
  } catch (error: any) {
    console.error("EmailJS error:", error);

    toast({
      title: "Failed to send email",
      description: error?.text || "Please try again later.",
      variant: "destructive",
    });

    setIsSubmitting(false); // ✅ Reset here on error as well
  }
};



  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary-700">Book an Appointment</DialogTitle>
          <DialogDescription>
            Fill out the form below to schedule your appointment with our specialists.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Patient Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="(123) 456-7890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="department"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Department</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        setSelectedDepartment(value);
                        form.setValue("doctor", "");
                      }}
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {departments.map((department) => (
                          <SelectItem key={department.id} value={department.id}>
                            {department.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="doctor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Doctor</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      disabled={!selectedDepartment}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select doctor" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {selectedDepartment &&
                          doctors[selectedDepartment as keyof typeof doctors]?.map((doctor) => (
                            <SelectItem key={doctor.id} value={doctor.name}>
                              {doctor.name}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Appointment Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date() ||
                            date > new Date(new Date().setMonth(new Date().getMonth() + 3))
                          }
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Information</FormLabel>
                  <FormControl>
                    <Input placeholder="Any specific concerns or requirements?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button
                type="submit"
                className="w-full md:w-auto bg-primary-500 hover:bg-primary-600"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Booking..." : "Book Appointment"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
