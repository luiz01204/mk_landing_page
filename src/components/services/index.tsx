"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { GiCarSeat, GiCarWheel } from "react-icons/gi";
import { IoCarSport, IoSparklesSharp } from "react-icons/io5";
import { MdLocalCarWash, MdOutlineWaterDrop, MdOutlineAir, MdBuild } from "react-icons/md";
import { FaSprayCan, FaWind } from "react-icons/fa";
import { BsStars, BsSnow } from "react-icons/bs";
import { FaWhatsapp } from 'react-icons/fa'
import { IoDiamond } from "react-icons/io5";
import { GiRaceCar } from "react-icons/gi";
import { IoCarSharp } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const services = [
  {
    title: "Vitrificação de Pintura",
    description: "Proteção cerâmica que realça o brilho e preserva a pintura por muito mais tempo.",
    icon: <GiRaceCar />,
  },
  {
    title: "Polimento Técnico",
    description: "Correção precisa de riscos e imperfeições com brilho profissional refinado.",
    icon: <IoCarSport />,
  },
  {
    title: "Polimento Comercial",
    description: "Brilho rápido e uniforme para valorizar a estética do carro com agilidade.",
    icon: <BsStars />,
  },
  {
    title: "Polimento de Vidros",
    description: "Remove manchas e riscos, garantindo vidros mais limpos, seguros e bonitos.",
    icon: <IoCarSharp />,
  },
  {
    title: "Lavagem Técnica Detalhada",
    description: "Limpeza interna e externa completa com atenção a cada cantinho do carro.",
    icon: <MdLocalCarWash />,
  },
  {
    title: "Pintura de Pinças e Cubos",
    description: "Estilo esportivo com pintura resistente que transforma o visual das rodas.",
    icon: <GiCarWheel />,
  },
  {
    title: "Restauração de Couro",
    description: "Revitaliza bancos de couro, devolvendo cor, textura e aparência original.",
    icon: <GiCarSeat />,
  },
  {
    title: "Higienização Interna",
    description: "Elimina sujeiras e odores, deixando o interior limpo e agradável.",
    icon: <FaSprayCan />,
  },
  {
    title: "Oxizanitização",
    description: "Desinfecção com ozônio para purificar o ar e eliminar fungos e bactérias.",
    icon: <FaWind />,
  },
  {
    title: "Troca do Filtro de Ar Condicionado",
    description: "Substituição do filtro para garantir ar puro e mais conforto a bordo.",
    icon: <BsSnow />,
  },
  {
    title: "Enceramento Técnico",
    description: "Brilho espelhado com proteção durável e toque suave na pintura.",
    icon: <IoDiamond />,
  },
  {
    title: "Lavagem Técnica do Motor",
    description: "Limpeza segura do motor, valorizando o visual sem comprometer nada.",
    icon: <MdBuild />,
  },
];

export default function Services() {
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="bg-red-600 py-10 md:py-16">
      <div className="container mx-auto px-4 h-1/2">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          Serviços:
        </h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map(({ title, description, icon }, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                  <article className="bg-[#1e293b] text-white rounded-2xl p-8 min-h-[400px] md:min-h-[420px] flex flex-col items-center justify-center text-center space-y-6">
                    <span className="text-5xl">{icon}</span>
                    <div>
                      <h3 className="font-bold text-2xl mb-2">{title}</h3>
                      <p className="text-gray-400 text-base">{description}</p>
                    </div>
                    <a
                      target="_blank"
                      href={`https://wa.me/5548999572643?text=Olá vim pelo site e gostaria de mais informações sobre ${title}`}
                      className="mt-4 flex items-center gap-3 hover:bg-red-500 px-5 py-2 rounded-md duration-300 font-medium border-t border-gray-700 pt-4"
                    >
                      <FaWhatsapp className="w-6 h-6" />
                      Entrar em contato
                    </a>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Botões de navegação */}
          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 cursor-pointer"
            onClick={scrollPrev}
          >
            <IoIosArrowBack className="w-6 h-6 text-gray-600" />
          </button>

          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 cursor-pointer"
            onClick={scrollNext}
          >
            <IoIosArrowForward className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
