import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

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

            {/* Conteúdo por cima */}
            <div className="flex flex-col gap-6 h-screen px-4 z-10 relative bg-black bg-opacity-80 justify-center items-center md:items-start md:pl-20 md:justify-center">
                <h1 className="font-bold text-white text-6xl text-center md:text-start md:text-7xl md:w-1/2 drop-shadow-lg">
                    Estética Automotiva especializada para quem é <span className="text-red-700">Exigente</span> com carro.
                </h1>
                <a 
                    target="_blank"
                    href={"https://wa.me/5548999572643?text=Olá vim pelo site e gostaria de mais informações..."}
                    className="bg-green-500 text-white font-semibold flex w-65 gap-2 rounded border-none p-2 justify-center cursor-pointer hover:bg-green-600">
                    <FaWhatsapp size={24} />
                    Faça seu orçamento  
                </a>   
            </div>
        </section>
    );
}
