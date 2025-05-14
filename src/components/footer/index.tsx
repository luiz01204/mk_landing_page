import Image from "next/image";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1e293b] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        
        {/* Logo */}
        <div className="flex flex-col  justify-center items-center md:items-start">
          <Image
            src="/logo_mk_fundo.jpg" // coloca o caminho da sua logo
            alt="Logo MK Estética Automotiva"
            width={150}
            height={150}
            className="rounded"
          />
          <p className="mt-2 text-gray-400 text-sm">© 2025 MK Estética Automotiva</p>
        </div>

        {/* Redes sociais */}
        <div className="flex flex-col justify-center items-center md:items-end gap-4 md:pt-14">
          <h3 className="text-lg font-semibold">Nos siga:</h3>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/sua_pagina"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/sua_pagina"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações..."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-colors"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
