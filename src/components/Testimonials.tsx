"use client"

import Image from 'next/image'

const testimonials = [
  {
    photo: "/google_1.png",
  },
  {
    photo: "/google_2.png",
  },
  {
    photo: "/google_3.png",
  },
  {
    photo: "/google_4.png",
  },
  {
    photo: "/google_5.png",
  },
  {
    photo: "/google_6.png",
  },
  {
    photo: "/google_7.png",
  },
  {
    photo: "/google_8.png",
  },
  {
    photo: "/google_9.png",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-slate-200 py-10 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-zinc-700">
          Depoimentos:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <a
              key={index}
              href="https://g.co/kgs/ssTPucS"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 flex justify-center items-center"
            >
              <Image
                src={item.photo}
                alt={`Depoimento ${index + 1}`}
                width={800}
                height={800}
                quality={100}
                className="rounded w-full h-auto max-h-[500px] object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
