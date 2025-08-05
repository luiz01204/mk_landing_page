import { FaWhatsapp } from "react-icons/fa";

const faqList = [
  {
    pergunta: "O que é estética automotiva?",
    resposta:
      "É o cuidado com a aparência do veículo. Vai desde uma simples lavagem até polimento, vitrificação, higienização interna e mais. Tudo pensado pra deixar o carro com cara de novo.",
  },
  {
    pergunta: "Qual a diferença entre polimento e vitrificação?",
    resposta:
      "Polimento remove riscos leves e imperfeições. Já a vitrificação protege a pintura com uma camada resistente, dando brilho e durabilidade extra.",
  },
  {
    pergunta: "Quanto tempo dura a proteção da vitrificação?",
    resposta:
      "Depende do produto e da manutenção, mas pode durar de 1 a 3 anos com os cuidados certos.",
  },
  {
    pergunta: "Fazem higienização interna completa?",
    resposta:
      "Sim! Fazemos higienização dos bancos, carpetes, teto, ar-condicionado e painel. Sai até aquele cheirinho de carro novo!",
  },
  {
    pergunta: "Atendem em domicílio?",
    resposta:
      "Hoje o atendimento é feito exclusivamente no nosso estúdio, pra garantir toda a estrutura e qualidade nos serviços.",
  },
];

export default function FAQSection() {
  return (
    <section className="w-full h-full bg-white pb-12">
      <div className="px-6 py-10 max-w-5xl mx-auto">
        <h2 className="text-zinc-700 font-semibold text-4xl mb-10 text-center md:text-center">
          Dúvidas Frequentes
        </h2>

        <div className="space-y-6">
          {faqList.map((item, index) => (
            <div key={index} className="bg-slate-200 p-4 rounded-xl border-l-4 border-r-4 border-red-600">
              <h3 className="text-black font-semibold text-xl mb-2">{item.pergunta}</h3>
              <p className="text-black text-lg">{item.resposta}</p>
            </div>
          ))}
        </div>

        {/* Botão do WhatsApp */}
        <div className="w-full flex justify-center md:justify-center mt-10">
          <a
            target="_blank"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold flex w-auto gap-2 rounded border-none p-3 justify-center items-center cursor-pointer shadow-lg"
            href="https://wa.me/5548999572643?text=Olá vim pelo site e tenho dúvidas sobre os serviços..."
          >
            <FaWhatsapp size={24} />
            Falar com especialista
          </a>
        </div>
      </div>
    </section>
  );
}
