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
                className="object-cover z-0" // z-0 pra ficar no fundo
                quality={100}
                priority
            />

            {/* Conteúdo por cima */}
            <div className="flex flex-col gap-6 md:py-20 md:pl-20 justify-center items-center md:justify-start md:items-start h-screen px-4 z-10 relative bg-black opacity-80">
                <h1 className="font-bold text-white text-6xl text-center md:text-start md:text-7xl md:w-1/2 drop-shadow-lg">
                    Estética Automotiva especializada para quem é <span className="text-red-700">Exigente</span> com carro.
                </h1>
                <a 
                    target="_blank"
                    href={"https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações..."}

                    className="bg-green-500 text-white font-semibold flex w-65 gap-2 rounded border-none p-2 justify-center cursor-pointer hover:bg-green-600">
                    <FaWhatsapp size={24} />
                    Faça seu orçamento  
                </a>   
            </div>
        </section>
    );
}
