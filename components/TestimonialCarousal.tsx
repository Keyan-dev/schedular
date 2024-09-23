"use client"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"; 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      content:
        "Schedulrr has completely transformed the way I manage my team's meetings. Its intuitive interface and time-saving features have streamlined our scheduling process, saving us hours every week. Highly recommend it for busy teams!",
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "David Lee",
      role: "Freelance Designer",
      content:
        "As a freelancer, keeping my schedule organized is crucial. Schedulrr not only helps me stay on top of my tasks, but it also makes it super easy for my clients to book time with me. It adds a layer of professionalism that clients appreciate!",
      image: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Emily Chen",
      role: "Startup Founder",
      content:
        "Schedulrr has streamlined our entire hiring process. Coordinating interviews used to be a headache, but now it’s incredibly easy to set up and manage appointments. It's a must-have tool for fast-paced startups like ours.",
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      name: "Michael Brown",
      role: "Sales Executive",
      content:
        "Since I started using Schedulrr, my meeting bookings have skyrocketed by 30%. It’s been a game-changer for managing my sales pipeline. If you're in sales, this tool will save you time and help close more deals!",
      image: "https://i.pravatar.cc/150?img=4",
    },
  ];
  
const TestimonialCarousal = () => {
  return (
    <Carousel
    plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{
        align: "start",
      }}
      className="w-full mx-auto"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full">
                <CardContent className="flex flex-col h-full justify-between p-6">
                    <p className="text-gray-600">&quot;{testimonial.content}&quot;</p>
                    <div className="flex items-center mt-4">
                        <Avatar className="h-12 w-12 mr-4">
                            <AvatarImage src={testimonial.image} alt={testimonial.name}></AvatarImage>
                            <AvatarFallback>{testimonial.name.split(" ").map((n)=>n[0]).join("")}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                    </div>
                </CardContent>
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default TestimonialCarousal