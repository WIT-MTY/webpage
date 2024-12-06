import Header2sub from "@/app/components/header2sub"
import Footer from "@/app/components/general/Footer"
import Carousel from "@/app/components/carousel"
import React from "react"

//Holaa

const Page = () => {

  return (
      <div>
         <div className=".py-40">
          <Header2sub
           titulo={"SERVICIO SOCIAL"} 
           subtitulo={"OBJETIVO"} 
           texto={"Esto se va a arreglar jiji"}/>
           </div>
            <div>
              <Carousel></Carousel>
            </div>

           <div>
            <Footer/>
           </div>
      </div>
  )
}

export default Page