import TestimonialCarousal from "@/components/TestimonialCarousal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const features = [
  {
    icon: Calendar,
    title: "Effortless Event Creation",
    description: "Set up meetings, appointments, and events with just a few clicks. Customize event types, add descriptions, and invite participants in seconds—simplifying how you organize your time."
  },
  {
    icon: Clock,
    title: "Availability Management Made Easy",
    description: "Take full control of your schedule by defining specific availability windows. Say goodbye to back-and-forth emails, and let others book time with you during your open slots—stress-free and streamlined."
  },
  {
    icon: LinkIcon,
    title: "Share Custom Scheduling Links",
    description: "Generate and share personalized scheduling links that make it easy for others to book time with you. Whether it's a one-on-one meeting or a group event, you decide how and when people can connect with you."
  }
];
const howItWorks = [
  {
    step: "Sign Up",
    description: "Join Schedulrr with a simple, free sign-up process. Start organizing your schedule in minutes."
  },
  {
    step: "Set Your Availability",
    description: "Easily configure your available times for meetings or events, so others can book based on your preferences."
  },
  {
    step: "Share Your Personalized Link",
    description: "Send your unique scheduling link to clients, colleagues, or friends and let them choose a time that works for everyone."
  },
  {
    step: "Get Automatically Booked",
    description: "Sit back and relax as appointments are confirmed and added to your calendar without any hassle."
  }
];

export default function Home() {
  return (
    <main className="md:p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20 px-10 py-5">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-extrabold pb-6 gradient-title">Effortless Scheduling, Anytime, Anywhere</h1>
            <p className="text-2xl mb-10 text-gray-600">Take the hassle out of managing your time with our intuitive scheduling app. Whether you re organizing personal tasks, planning meetings, or setting reminders, our app is designed to streamline your day. Enjoy features like calendar sync, task prioritization, and smart notifications, all in one easy-to-use interface. Stay organized, save time, and focus on what really matters!</p>
            <Link href="/dashboard">
              <Button size="lg" className="bg-gradient-to-r from-blue-900 to-blue-400 text-lg flex gap-2">Get Started <ArrowRight className="m1-2 h-5 w-5"/></Button>
            </Link>
          </div>
          <div className="lg:w-1/2 flex justify-center">
           <div className="relative w-full max-wd-md aspect-square"> <Image src="/poster.png" alt="poster"  layout="fill" objectFit="contain"/>
           </div>
          </div>
        </div>
        <div className="mb-24 px-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">{features.map((feature,index)=>{
            return (<Card key={index}>
              <CardHeader>
                <feature.icon className="w-12 h-12 text-blue-500 mb-4 mx-auto"></feature.icon>
                <CardTitle className="text-xl text-center text-gray-600">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </CardContent>
              </Card>);
          })}</div>
        </div>
        <div className="mb-24 px-5">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Hear From Our Happy Schedulers</h2>
        <TestimonialCarousal/>
        </div>
        <div className="mb-24 px-5">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{howItWorks.map((step,index)=>(<div key={index} className="text-center">
          <div className="bg-blue-200 rounded-full w-16 h-16 flex items-center justify-center text-center mx-auto mb-4">
            <span className="text-blue-800 font-bold text-xl">{index+1}</span></div>
          <h3 className="font-semibold text-lg mb-2">{step.step}</h3>
          <p className="text-gray-600">{step.description}</p>
        </div>))}</div>
        </div>
        <div className="bg-gradient-to-r from-blue-900 to-blue-500 text-white md:rounded-lg p-8 text-center">
          <Clock className="flex items-center w-12 h-12 text-white mb-4 mx-auto"/>
          <h2 className="text-3xl font-bold mb-4">Ready to simplify scheduling?</h2>
          <p className="text-xl mb-6">Take the stress out of managing your time. Join thousands of professionals already saving hours with Schedulrr.Sign up today and experience effortless scheduling!</p>
          <Link href="/dashboard"><Button className="text-blue-900 text-lg" size="lg" variant="secondary">Start for Free <ArrowRight className="m1-2 h-5 w-5"/></Button></Link>
        </div>
    </main>
  );
}
