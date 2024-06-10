import { Header } from "@/components/Header"
import Heroimg from '../assets/hero.jpg'
import { Hero } from "@/components/Hero"
import { HeroN } from "@/components/HeroN"
import { Help } from "@/components/Help"
import { Partner } from "@/components/Partner"
import { Footer } from "@/components/Footer"
import { Docs } from "@/components/Docs"
// import { ProductH } from "@/components/ProductH"


export const Homepage = () => {
  return (
    <div className="relative flex-1 bg-black">
      <img src={Heroimg} className="w-full h-screen object-cover" />
      <Header />
      <Hero/>
      <HeroN/>
      <Help/>
      {/* <ProductH/> */}
      <Docs/>
      <Partner/>
      <Footer/>
    </div>
  )
}