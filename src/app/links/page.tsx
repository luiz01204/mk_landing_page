"use client";

import { FaWhatsapp, FaGlobe, FaGoogle } from "react-icons/fa";
import Image from "next/image";

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-[#1e293b] flex flex-col items-center justify-center text-white px-4 py-10">
      {/* Logo ou avatar */}
      <div className="mb-6">
        <Image
          src="/logo_mk_fundo.jpg"
          alt="Logo MK Estética Automotiva"
          width={150}
          height={150}
          className="rounded-full border-4 border-red-700"
        />
      </div>

      {/* Nome ou descrição */}
      <h1 className="text-3xl font-bold mb-2 text-center">MK Estética Automotiva</h1>
      <p className="text-slate-400 mb-8 text-center">Clique e escolha onde quer falar com a gente!</p>

      {/* Botões */}
      <div className="w-full max-w-sm flex flex-col gap-4">
        <a
          href="https://mkstudioautomotivo.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black flex items-center justify-center gap-3 py-3 rounded-lg font-semibold hover:bg-red-700 hover:text-white transition"
        >
          <FaGlobe size={20} />
          Acessar site
        </a>

        <a
          href="https://wa.me/5548999572643?text=Olá vim pelo seu perfil e quero mais informações"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white flex items-center justify-center gap-3 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
        >
          <FaWhatsapp size={20} />
          Fazer um orçamento
        </a>

        <a
          href="https://g.co/kgs/ssTPucS"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white flex items-center justify-center gap-3 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          <FaGoogle size={20} />
          Ver no Google
        </a>
      </div>
    </main>
  );
}
