
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { AppointmentForm } from '@/components/AppointmentForm';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User, Tag, Search, Filter } from 'lucide-react';

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Understanding Heart Health: Tips for a Stronger Heart",
    excerpt: "Learn about the essential practices to maintain optimal heart health and prevent cardiovascular diseases.",
    category: "Cardiology",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80",
    author: "Dr. John Smith",
    date: "May 15, 2023",
    readTime: "5 min read",
    featured: true
  },
  {
    id: 2,
    title: "The Importance of Mental Health in Overall Wellness",
    excerpt: "Discover why mental health is just as important as physical health and tips to maintain good mental well-being.",
    category: "Mental Health",
    image: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?auto=format&fit=crop&w=600&q=80",
    author: "Dr. Emily Johnson",
    date: "April 28, 2023",
    readTime: "7 min read",
    featured: true
  },
  {
    id: 3,
    title: "Nutrition 101: Building a Balanced Diet",
    excerpt: "A comprehensive guide to understanding nutrient requirements and creating a balanced meal plan for optimal health.",
    category: "Nutrition",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
    author: "Dr. Michael Brown",
    date: "April 10, 2023",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Childhood Vaccinations: What Parents Need to Know",
    excerpt: "Essential information about childhood vaccines, their importance, schedule, and common misconceptions.",
    category: "Pediatrics",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
    author: "Dr. Sarah Davis",
    date: "March 22, 2023",
    readTime: "8 min read"
  },
  {
    id: 5,
    title: "Managing Chronic Pain: Modern Approaches",
    excerpt: "An overview of contemporary methods for managing chronic pain, from medication to alternative therapies.",
    category: "Pain Management",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    author: "Dr. Robert Wilson",
    date: "March 5, 2023",
    readTime: "6 min read"
  },
  {
    id: 6,
    title: "Skin Care Essentials for Every Age",
    excerpt: "Tailored skin care advice for different age groups to maintain healthy, glowing skin throughout your life.",
    category: "Dermatology",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    author: "Dr. Jennifer Taylor",
    date: "February 19, 2023",
    readTime: "5 min read"
  },
  {
    id: 7,
    title: "Eye Health in the Digital Age",
    excerpt: "How to protect your vision and maintain eye health while spending long hours on digital devices.",
    category: "Ophthalmology",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
    author: "Dr. David Anderson",
    date: "February 3, 2023",
    readTime: "7 min read"
  },
  {
    id: 8,
    title: "Understanding Common Sleep Disorders",
    excerpt: "An exploration of common sleep disorders, their symptoms, and treatment options for better rest.",
    category: "Sleep Medicine",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80",
    author: "Dr. Lisa Thomas",
    date: "January 25, 2023",
    readTime: "9 min read"
  }
];

// Categories list
const categories = [
  "All",
  "Cardiology",
  "Mental Health",
  "Nutrition",
  "Pediatrics",
  "Pain Management",
  "Dermatology",
  "Ophthalmology",
  "Sleep Medicine"
];

const BlogPostCard = ({ post }: { post: any }) => (
  <Card className="overflow-hidden rounded-2xl border-2 border-slate-200 bg-white hover:shadow-xl hover:border-blue-500 transition-all duration-300 flex flex-col justify-between group">
    <div className="h-52 overflow-hidden bg-slate-100">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
      />
    </div>
    <div className="p-5 flex-1 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="inline-block py-0.5 px-2.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            {post.category}
          </span>
          <div className="flex items-center text-slate-500 text-xs font-medium">
            <Clock className="h-3 w-3 mr-1 text-slate-400" />
            {post.readTime}
          </div>
        </div>
        <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2 font-display">
          {post.title}
        </h3>
        <p className="text-slate-600 text-xs line-clamp-3 leading-relaxed mb-4">
          {post.excerpt}
        </p>
      </div>

      <div className="flex justify-between items-center border-t border-slate-100 pt-3 text-xs text-slate-500">
        <div className="flex items-center font-medium text-slate-700">
          <User className="h-3 w-3 mr-1.5 text-blue-500" />
          {post.author}
        </div>
        <div className="flex items-center text-slate-400">
          <Calendar className="h-3 w-3 mr-1" />
          {post.date}
        </div>
      </div>
    </div>
  </Card>
);

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [appointmentDialogOpen, setAppointmentDialogOpen] = useState(false);

  const handleBookAppointment = () => {
    setAppointmentDialogOpen(true);
  };

  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Get featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation onAppointmentClick={handleBookAppointment} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-950 via-sky-950 to-slate-900 text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-5 border border-white/10">
            Insights & Wellness
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-display mb-4">
            Health & Wellness Blog
          </h1>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Stay informed with the latest doctor-reviewed healthcare insights, wellness tips, and medical research.
          </p>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredPosts.map(post => (
                <Card key={post.id} className="flex flex-col md:flex-row overflow-hidden rounded-2xl border-2 border-slate-200 bg-white hover:shadow-xl hover:border-blue-500 transition-all duration-300 group">
                  <div className="w-full md:w-5/12 h-56 md:h-auto overflow-hidden bg-slate-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="w-full md:w-7/12 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-2.5">
                        <span className="inline-block py-0.5 px-2.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
                          {post.category}
                        </span>
                        <div className="flex items-center text-slate-500 text-xs font-medium">
                          <Clock className="h-3 w-3 mr-1 text-slate-400" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 font-display leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex justify-between items-center border-t border-slate-100 pt-3 text-xs text-slate-500 mt-auto">
                      <div className="flex items-center font-medium text-slate-700">
                        <User className="h-3 w-3 mr-1.5 text-blue-500" />
                        {post.author}
                      </div>
                      <div className="flex items-center text-slate-400">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search and Filters Section */}
      <section className="py-6 sm:py-8 bg-white border-t border-b border-gray-200">
        <div className="container mx-auto px-10">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-1/6">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 ${selectedCategory === category ? "bg-primary-500" : ""}`}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPosts.map(post => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-gray-700">No articles found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest health tips and hospital updates.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <Input type="email" placeholder="Enter your email" className="flex-grow" />
              <Button className="bg-primary-500 hover:bg-primary-600 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Appointment Dialog */}
      <AppointmentForm
        open={appointmentDialogOpen}
        onOpenChange={setAppointmentDialogOpen}
      />
    </div>
  );
};

export default Blog;
