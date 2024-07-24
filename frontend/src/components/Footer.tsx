import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { motion } from "framer-motion"
export const Footer = () => {
  return (
    <>
    <div className="flex flex-row px-20  py-20 justify-between">
      <motion.div  whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }} className="flex flex-col gap-10">
        <span className="text-3xl  font-semibold text-purple-500">
          Https Technologies
        </span>
        <span className="flex flex-row gap-10 ">
          <Facebook className="bg-purple-400  " />
          <Twitter className="bg-purple-400 " />
          <Linkedin className="bg-purple-400 " />
        </span>
      </motion.div>
      <motion.div whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }} className="flex flex-col gap-4">
        <h1 className="text-xl  font-semibold text-purple-500">
          Subscribe to our newsletter
        </h1>
        <span className="flex flex-row text-lg">
          <Input type="email" placeholder="Email" />
          <Button className="bg-purple-500 rounded-xl -ml-3">Subscribe</Button>
        </span>
      </motion.div>
      <motion.div whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }} className="flex flex-row gap-40">
        <div className="flex flex-col gap-3 text-purple-500">
          <span>About</span>
          <span>Careers</span>
          <span>Blog</span>
        </div>
        <div className="flex flex-col gap-3 text-purple-500 ">
          <span>Contact</span>
          <span>Knowledge Base</span>
          <span>FAQ</span>
        </div>
      </motion.div>
    </div>
    <div className="flex flex-row justify-between px-20  00 pb-10">
      <motion.div whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }} className="flex flex-col">
        <span className="text-purple-400">© Https Technologies 2024</span>
        <span className="text-purple-600">All trademarks and copyrights belong to their respective owners.</span>
      </motion.div>
      <motion.div whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }} className="flex gap-10 text-purple-400">
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
      </motion.div>
    </div>
    </>
  );
};
