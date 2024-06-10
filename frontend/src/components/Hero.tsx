import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
export const Hero = () => {
  return (
    <div className="absolute top-60 left-0 px-20 text-left z-10 w-2/3">
    <motion.div whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }} className="flex flex-col gap-3">
      <span className="text-6xl font-bold text-purple-600 mb-4 ">World's First Unified Cyber Security Platform</span>
      <span className="text-white mb-8 text-3xl font-semibold">Trusted by businesses across 25+ countries worldwide</span>
      <div className="flex flex-row gap-4">
        <Button className="w-fit bg-purple-700">Request Demo</Button>
        <Button className="w-fit bg-purple-700">Get Quote</Button>
      </div>
    </motion.div>
  </div>
  )
}
