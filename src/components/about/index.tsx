import Image from 'next/image';
import { FaRegCheckCircle, FaWhatsapp } from "react-icons/fa";

export default function About() {
    return (
        <section className="w-full h-full bg-slate-200 pb-12">
            <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-2 gap-4 justify-around items-center">
                <div>
                    <Image 
                        src="/logo_mk_fundo.jpg" 
                        alt="Logo Mk estética automotiva."
                        width={540}
                        height={540}
                        className="rounded-2xl hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Container que centraliza tudo horizontalmente */}
                <div className="flex flex-col items-center w-full">
                    {/* Bloco alinhado à esquerda internamente */}
                    <div className="flex flex-col items-center md:items-start text-left max-w-md w-full">
                        <h2 className="text-zinc-700 font-semibold text-5xl">
                            Sobre nós:
                        </h2>

                        <p className="flex gap-2 text-black mt-3 md:text-2xl items-center">
                            <FaRegCheckCircle size={16} className="text-red-600" />
                            Mais de 1.000 clientes atendidos
                        </p>

                        <p className="flex gap-2 text-black mt-3 md:text-2xl items-center">
                            <FaRegCheckCircle size={16} className="text-red-600" />
                            5 anos de experiência.
                        </p>

                        <p className="flex gap-2 text-black mt-3 md:text-2xl items-center">
                            <FaRegCheckCircle size={16} className="text-red-600" />
                            + de 10 opções de serviços
                        </p>

                        <p className="flex gap-2 text-black mt-3 md:text-2xl items-center">
                            <FaRegCheckCircle size={16} className="text-red-600" />
                            Empresa certificada.
                        </p>

                        {/* Botão centralizado com conteúdo alinhado */}
                        <div className="w-full flex justify-center md:justify-start mt-6">
                            <a 
                                className="bg-green-500 text-white font-semibold flex w-65 gap-2 rounded border-none p-2 justify-center cursor-pointer hover:bg-green-600"
                                href="https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações..." 
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
