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
    <div className="relative flex-1 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <img src={Heroimg} className="w-full h-screen object-cover" style={{
          WebkitMaskImage: '-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))',
        }}/>
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
