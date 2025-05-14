"use client"

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const testimonials = [
{
    photo: "/google_1.png",
},
  {
    photo: "/google_2.png",
  },
]

export default function Testimonials() {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  return (
    <section className="bg-slate-200 py-10 md:py-16 h-1/2">
      <div className="container mx-auto px-4 md:flex md:flex-col md:items-center">
        <h2 className="text-4xl font-bold mb-12 text-center text-zinc-700">
          Depoimentos:
        </h2>

        <div className="relative max-w-4xl">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 px-2"
                >
                  <article className="bg-[#1e293b] text-white rounded-2xl p-8 h-full justify-center items-center text-center">
                    <a 
                        href={"https://g.co/kgs/ssTPucS"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image 
                            src={item.photo} 
                            alt="foto tutor"
                            width={800}
                            height={800}
                            quality={100}
                            className="rounded"    
                        />
                        </a>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Botões de navegação coladinhos no carrossel */}
          <div className="absolute inset-y-0 left-0 flex items-center px-2 z-10">
            <button
              className="
                bg-white 
                flex items-center 
                justify-center 
                rounded-full 
                shadow-lg 
                w-10 h-10 
                absolute 
                left-3 
                -translate-y-1/2 
                -translate-x-1/2 
                top-1/2 
                z-10
                cursor-pointer"
              onClick={scrollPrev}
            >
              <IoIosArrowBack className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center px-2 z-10">
            <button
              className="
                bg-white 
                flex items-center 
                justify-center 
                rounded-full 
                shadow-lg 
                w-10 h-10 
                absolute 
                -right-6 
                -translate-y-1/2 
                -translate-x-1/2 
                top-1/2 
                z-10
                cursor-pointer"
              onClick={scrollNext}
            >
              <IoIosArrowForward className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );  
}