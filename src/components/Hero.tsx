import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen w-full">
            {/* Imagem de fundo */}
            <Image 
                src="/hero.jpg"
                alt="Foto roda do carro preto."
                fill
                className="object-cover z-0"
                quality={100}
                priority
            />

            {/* Camada preta semi-transparente */}
            <div className="absolute inset-0 bg-black opacity-80 z-10" />

            {/* Conteúdo principal */}
            <div className="flex flex-col gap-6 h-screen px-6 sm:px-8 z-20 relative justify-center items-center md:items-start md:pl-20 md:justify-center">
                <h1 className="font-bold text-white text-6xl text-center md:text-start md:text-7xl md:w-1/2 drop-shadow-lg">
                    Estética Automotiva para quem é <span className="text-red-700">Exigente</span> com carro.
                </h1>
                <a 
                    target="_blank"
                    href={"https://wa.me/5548999572643?text=Olá vim pelo site e gostaria de mais informações..."}
                    className="mt-4 bg-green-500 text-white font-semibold flex w-auto gap-2 rounded border-none p-2 justify-center cursor-pointer hover:bg-green-600">
                    <FaWhatsapp size={24} />
                    Faça seu orçamento  
                </a>   
            </div>

            {/* Seta para rolar pra baixo */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
                <ChevronDown className="animate-bounce text-white" size={36} />
            </div>
        </section>
    );
}
