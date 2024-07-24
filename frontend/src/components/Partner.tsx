import { Button } from "./ui/button"
import { motion } from "framer-motion"

export const Partner = () => {
  return (
    <motion.div whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 100 }}
    transition={{ duration: 0.5 }} className="items-center justify-center flex gap-10 py-40 px-20">
        <span className="text-4xl text-purple-600">Looking to Join Partner Network?</span>
        <Button className="bg-purple-400 text-xl">Learn More</Button>
    </motion.div>
  )
}
