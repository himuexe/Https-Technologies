import { Button } from "./ui/button"
import heroimgn from '../assets/heron.png'
import { motion } from "framer-motion"
export const HeroN = () => {
  return (
    <div className="flex-row flex  items-center justify-center px-20 py-32">
    <motion.div whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }} className="text-blue-600 gap-10 flex  flex-col">
      <h1 className="text-4xl text-purple-600 font-bold">NextGen All-In-One Platform</h1>
      <span className="text-2xl">AI/ML based appliance and software product which helps organizations of any size to seamlessly manage and safeguard their entire network through a single window.</span>
      <span className="text-2xl">Designed and Engineered to serve verticals like Enterprise, Education, Hospitality, Healthcare, BFSI, Defence, Power & Energy, Transport, Retail, Smart & Safe City etc.</span>
      <Button className="bg-purple-700 w-fit">Know More</Button>
    </motion.div>
    <motion.div whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }} className="">
      <img src={heroimgn} className="w-screen" />
    </motion.div>
    </div>
  )
}
