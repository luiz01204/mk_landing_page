import Image from 'next/image';
import { FaWhatsapp } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section className="w-full h-full bg-white pb-12">
      <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-2 gap-4 justify-around items-center">
        {/* Foto dos fundadores */}
        <div className="p-4">
          <Image 
            src="/historia.jpg"
            alt="Fundadores da MK Studio Automotivo"
            width={540}
            height={540}
            className="rounded-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Texto: Nossa História */}
        <div className="flex flex-col items-center w-full mt-2 md:mt-0">
          <div className="flex flex-col items-center md:items-start text-left max-w-md w-full">
            <h2 className="text-zinc-700 font-semibold text-5xl mb-4">
              Nossa História
            </h2>
            <p className="text-black text-lg md:text-xl leading-relaxed">
              A MK Studio Automotivo nasceu da paixão por carros e da vontade de oferecer algo além do básico. Fundada por um casal que sempre acreditou em fazer bem feito, nossa missão é cuidar de cada veículo como se fosse único.
            </p>
            <p className="text-black text-lg md:text-xl leading-relaxed mt-4">
              Com mais de 5 anos de experiência, já atendemos mais de 1.000 clientes e nos tornamos referência em estética automotiva premium em Criciúma. Aqui, cada detalhe importa — e é isso que nos move todos os dias.
            </p>

            {/* Botão do WhatsApp */}
            <div className="w-full flex justify-center md:justify-start mt-6">
              <a 
                target="_blank"
                className="bg-green-500 text-white font-semibold flex w-65 gap-2 rounded border-none p-2 justify-center cursor-pointer hover:bg-green-600"
                href="https://wa.me/5548999572643?text=Olá vim pelo site e gostaria de mais informações..." 
              >
                <FaWhatsapp size={24} />
                Faça seu orçamento  
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
