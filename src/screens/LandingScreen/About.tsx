import React from 'react'

const About = () => {
  return (
    <section className='third-section h-screen bg-blue-950'>
   <main className="  ">
        <div className=" ">
          <div
            className="text-white font-pixelate text-[2rem] md:text-[3rem] font-bold my-2 mb-8  "
          
          >
        
          <div className="overflow-x-hidden w-full  sm:hidden text-xl relative">
  <h2 className=" flex flex-row max-w-sm md:max-w-max mx-0  font-pixelate  text-left font-bold mb-10 pt-4 md:pt-0 uppercase md:w-max relative">

    <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider pl-2">
      About Espektro
    </span>
    
   
  </h2>
</div>
<div className="overflow-x-hidden w-full pt-5 sm:block hidden shad relative">
  <h2 className=" flex flex-row max-w-sm md:max-w-max mx-0  font-pixelate  text-left font-bold mb-10 pt-4 md:pt-0 md:w-max uppercase relative">

    <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider pl-4">
      About Espektro
    </span>
    
   
  </h2>
</div>
            
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-8 gap-16">
            <div className="md:col-span-4 flex flex-col items-start justify-start order-2 md:order-1 ">
              <h2 className="mb-4  text-xl uppercase text-green-400 font-pixelate font-bold"> hi everyone</h2>
              <p className="font-bold text-white font-pixelate">
                {/* about binary content */}
                Espektrois the annual cultural and technical spectacle hosted by Kalyani Government Engineering College. As West Bengal's second-largest fest, Espektro masterfully intertwines the realms of technology and creativity, setting the stage for a multifaceted celebration. Daytime activities buzz with the excitement of technical competitions and innovative games, drawing in budding engineers and tech enthusiasts alike. As dusk approaches, the ambiance shifts to a more artistic tone. Evenings come alive with mesmerizing performances from some of India's most distinguished artists, showcasing a blend of traditional and contemporary 
              </p>
           
            </div>
            <div className="md:col-span-3 flex h-max  gap-4 order-1 md:order-2 items-center justify-center   ">
            
            </div>
          </div>
        </div>
      </main>
    
    </section>
  )
}

export default About
