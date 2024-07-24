import { motion } from "framer-motion";
export const Help = () => {
  return (
    <div className="flex  flex-col items-center justify-center px-20   py-16 gap-20">
      <motion.div whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }} className="flex flex-col gap-6 justify-center items-center">
        <h1 className="text-3xl text-purple-600">How We Help</h1>
        <span className="text-white text-xl">
          Learn what value and impact we bring for organizations across
          industries
        </span>
      </motion.div>
      <div className="flex flex-row gap-8 ">
        <motion.div whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }} className="bg-purple-100 flex flex-col flex-1 rounded-xl p-10 gap-2 font-semibold">
          <h1 className="text-4xl font-bold text-purple-800">PROBLEM</h1>
          <span className="font-bold text-lg">Distributed Architecture</span>
          <span>
            «Multiple stand-alone appliances like Router, Load Balancer, VPN
            Server, Web Gateway, Firewall, Guest Management etc.
          </span>
          <span>«High Investment Involved</span>
          <span>«Complex to Manage</span>
        </motion.div>
        <motion.div whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }} className="bg-purple-200 flex flex-col flex-1 rounded-xl p-10 gap-2 font-semibold">
          <h1 className="text-4xl font-bold text-purple-800">SOLUTION</h1>
          <span className="font-bold text-lg">Unified Architecture</span>
          <span>«Single Appliance with Industry-Wise Specialization</span>
          <span>«Reduces Investment by upto 60%</span>
          <span>«Simple to Deploy & Manage</span>
        </motion.div>
      </div>
    </div>
  );
};
