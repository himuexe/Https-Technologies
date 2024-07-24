import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from 'react';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex flex-row justify-between items-center px-4 py-5 text-center ${scrolled? 'bg-gray-900 shadow-md' : 'bg-transparent'}`}>
      <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-500">
        Https Technologies
      </span>
      <div className="flex flex-wrap justify-between gap-4 md:gap-8 lg:gap-12">
        <DropdownMenu >
          <DropdownMenuTrigger className="text-blue-500 text-lg hover:text-purple-600 font-semibold">Markets</DropdownMenuTrigger>
          <DropdownMenuContent className="bg-purple-300 font-semibold">
            <DropdownMenuItem>Enterprise</DropdownMenuItem>
            <DropdownMenuItem>Hospitality</DropdownMenuItem>
            <DropdownMenuItem>Education</DropdownMenuItem>
            <DropdownMenuItem>Healthcare</DropdownMenuItem>
            <DropdownMenuItem>Retail</DropdownMenuItem>
            <DropdownMenuItem>Transport</DropdownMenuItem>
            <DropdownMenuItem>Smart City</DropdownMenuItem>
            <DropdownMenuItem>Events</DropdownMenuItem>
            <DropdownMenuItem>Residential</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu >
          <DropdownMenuTrigger className="text-blue-500 text-lg hover:text-purple-600 font-semibold">Products</DropdownMenuTrigger>
          <DropdownMenuContent className="bg-purple-300 font-semibold">
            <DropdownMenuItem>Unified Cyber Security Platform</DropdownMenuItem>
            <DropdownMenuItem>Network Firewall</DropdownMenuItem>
            <DropdownMenuItem>Web Application & API Protection</DropdownMenuItem>
            <DropdownMenuItem>EndPoint Security</DropdownMenuItem>
            <DropdownMenuItem>NextGen Intrusion Prevention System</DropdownMenuItem>
            <DropdownMenuItem>Router</DropdownMenuItem>
            <DropdownMenuItem>SD-WAN</DropdownMenuItem>
            <DropdownMenuItem>Link Load Balancer</DropdownMenuItem>
            <DropdownMenuItem>Virtual Private Network</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <span className="text-blue-500 text-lg hover:text-purple-600 font-semibold">Partner</span>
        <DropdownMenu >
          <DropdownMenuTrigger className="text-blue-500 text-lg hover:text-purple-600 font-semibold">Support</DropdownMenuTrigger>
          <DropdownMenuContent className="bg-purple-300 font-semibold">
            <DropdownMenuItem>Download Clients</DropdownMenuItem>
            <DropdownMenuItem>Knowledge Base</DropdownMenuItem>
            <DropdownMenuItem>Ask The Community</DropdownMenuItem>
            <DropdownMenuItem>FAQs</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu >
          <DropdownMenuTrigger className="text-blue-500 text-lg hover:text-purple-600 font-semibold">News</DropdownMenuTrigger>
          <DropdownMenuContent className="bg-purple-300 font-semibold">
            <DropdownMenuItem>Blog</DropdownMenuItem>
            <DropdownMenuItem>Case Studies</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu >
          <DropdownMenuTrigger className="text-blue-500 text-lg hover:text-purple-600 font-semibold">More</DropdownMenuTrigger>
          <DropdownMenuContent className="bg-purple-300 font-semibold">
            <DropdownMenuItem>About</DropdownMenuItem>
            <DropdownMenuItem>Contact Us</DropdownMenuItem>
            <DropdownMenuItem>Career</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex flex-wrap justify-between gap-4 md:gap-8 lg:gap-12 text-white font-semibold" >
        <span>+91 xxxxxxxxxx</span>
        <span>007@httpstech.com</span>
      </div>
    </div>
  );
};