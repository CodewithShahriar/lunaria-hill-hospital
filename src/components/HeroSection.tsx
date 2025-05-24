
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Phone, ArrowLeft, ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "We Provide Total Healthcare Solutions",
      subtitle: "Your Most Trusted Health Partner",
      description: "Our skilled doctors and staff provide comprehensive care with the latest medical technologies for your healthiest life.",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
      color: "primary"
    },
    {
      title: "Advanced Diagnostics For Accurate Results",
      subtitle: "Cutting-Edge Medical Technology",
      description: "Our state-of-the-art diagnostic equipment ensures precise test results for effective treatment planning.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
      color: "blue"
    },
    {
      title: "Expert Care From Specialized Doctors",
      subtitle: "Experienced Medical Professionals",
      description: "Our team of specialists delivers exceptional care with compassion and expertise for all your health needs.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
      color: "sky"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-white overflow-hidden">
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="w-full">
              <div className="relative h-[650px] md:h-[750px] w-full">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-1000"
                    style={{ 
                      backgroundImage: `url(${slide.image})`,
                      transform: `scale(${currentSlide === index ? '1.05' : '1'})` 
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent backdrop-blur-[2px]"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                  <div className="max-w-2xl text-white animate-fade-in">
                    <div className="mb-6 inline-block px-5 py-2 bg-blue-500 rounded-md text-white font-medium uppercase tracking-wider text-sm">
                      Lunaria Hill Hospital
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-4 text-white/90 font-medium">
                      {slide.subtitle}
                    </p>
                    <p className="text-base md:text-lg mb-10 text-white/80 max-w-xl">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg transition-all">
                        <Calendar className="mr-2 h-5 w-5" />
                        Book Appointment
                      </Button>
                      <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 px-8 py-6 text-lg rounded-lg transition-all">
                        <Phone className="mr-2 h-5 w-5" />
                        Contact Us
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all ${
                currentSlide === index ? 'bg-blue-500 scale-125' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <CarouselPrevious className="absolute top-1/2 left-6 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/40 rounded-full h-12 w-12 flex items-center justify-center" />
        <CarouselNext className="absolute top-1/2 right-6 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/40 rounded-full h-12 w-12 flex items-center justify-center" />
      </Carousel>
    </section>
  );
};

export default HeroSection;
