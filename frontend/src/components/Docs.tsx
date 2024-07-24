import docscover from '../assets/documents-cover.png'
import { Button } from './ui/button'
import {motion} from 'framer-motion'
export const Docs = () => {
  return (
    <div className="flex flex-row gap-40 px-20 py-20 text-left justify-center">

    <motion.div whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }} className="">
        <img src={docscover} alt="" />
    </motion.div>
    <motion.div whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }} className=" pt-20 gap-10 flex flex-col">
        <h1 className='text-4xl text-purple-600 font-semibold'>Read Our Documents</h1>
        <span className='text-purple-600 font-semibold text-xl'>Here is our full documents that help you to get deep insights and understanding about us.</span>
        <div className="gap-10 flex">
            <Button className='bg-purple-500 rounded-lg w-1/2'>Case Studies</Button>
            <Button className='bg-purple-500 rounded-lg w-1/2'>Data Sheets</Button>
        </div>
    </motion.div>

    </div>
  )
}
