
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
    image: "https://famurgentcare.com/wp-content/uploads/2022/12/2286836-min-1.jpg",
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
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    author: "Dr. Michael Brown",
    date: "April 10, 2023",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Childhood Vaccinations: What Parents Need to Know",
    excerpt: "Essential information about childhood vaccines, their importance, schedule, and common misconceptions.",
    category: "Pediatrics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqy0M_iDuPnu3v9tquyVSBTFk4GXW0yAhgxw&s",
    author: "Dr. Sarah Davis",
    date: "March 22, 2023",
    readTime: "8 min read"
  },
  {
    id: 5,
    title: "Managing Chronic Pain: Modern Approaches",
    excerpt: "An overview of contemporary methods for managing chronic pain, from medication to alternative therapies.",
    category: "Pain Management",
    image: "https://www.nystromcounseling.com/wp-content/uploads/Long-Term-Effects-of-Chronic-Pain-Medical-Issues-scaled.jpg",
    author: "Dr. Robert Wilson",
    date: "March 5, 2023",
    readTime: "6 min read"
  },
  {
    id: 6,
    title: "Skin Care Essentials for Every Age",
    excerpt: "Tailored skin care advice for different age groups to maintain healthy, glowing skin throughout your life.",
    category: "Dermatology",
    image: "https://www.theskinclinic.org.in/wp-content/uploads/2017/09/all-ages.jpg",
    author: "Dr. Jennifer Taylor",
    date: "February 19, 2023",
    readTime: "5 min read"
  },
  {
    id: 7,
    title: "Eye Health in the Digital Age",
    excerpt: "How to protect your vision and maintain eye health while spending long hours on digital devices.",
    category: "Ophthalmology",
    image: "https://www.visionspecialists.com/wp-content/uploads/2020/02/Vision-Specialists-Your-Eye-Care-and-the-Digital-Age-copy.jpg",
    author: "Dr. David Anderson",
    date: "February 3, 2023",
    readTime: "7 min read"
  },
  {
    id: 8,
    title: "Understanding Common Sleep Disorders",
    excerpt: "An exploration of common sleep disorders, their symptoms, and treatment options for better rest.",
    category: "Sleep Medicine",
    image: "https://images.unsplash.com/photo-1520206183501-b80df61043c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
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
  <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
    <div className="h-48 overflow-hidden">
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
      />
    </div>
    <CardHeader>
      <div className="flex justify-between items-center mb-1">
        <span className="inline-block py-1 px-2 rounded bg-primary-100 text-primary-700 text-xs font-medium">
          {post.category}
        </span>
        <div className="flex items-center text-gray-500 text-xs">
          <Clock className="h-3 w-3 mr-1" />
          {post.readTime}
        </div>
      </div>
      <CardTitle className="text-lg font-semibold hover:text-primary-600 transition-colors">
        {post.title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-gray-600">
        {post.excerpt}
      </CardDescription>
    </CardContent>
    <CardFooter className="flex justify-between border-t border-gray-100 pt-4">
      <div className="flex items-center text-sm text-gray-600">
        <User className="h-3 w-3 mr-1" />
        {post.author}
      </div>
      <div className="flex items-center text-sm text-gray-400">
        <Calendar className="h-3 w-3 mr-1" />
        {post.date}
      </div>
    </CardFooter>
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
      <section className="bg-gradient-to-r from-primary-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Health & Wellness Blog</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Stay informed with the latest healthcare insights, tips, and research from our medical experts.
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
                <Card key={post.id} className="flex flex-col md:flex-row overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="w-full md:w-1/3">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full md:w-2/3 p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="inline-block py-1 px-2 rounded bg-primary-100 text-primary-700 text-xs font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between mt-auto">
                      <div className="flex items-center text-sm text-gray-600">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
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
