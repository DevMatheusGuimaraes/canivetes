"use client"

import { PhoneCall } from "lucide-react"
import Image from "next/image"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-384 mx-auto px-6 h-22 flex justify-between items-center">

        <div className="flex justify-center items-center gap-2">
          <Image 
            src="/LOGO.png"
            alt="Logo da empresa"
            width={40}
            height={40}
            className="object-cover"
          />
          <h1 className="text-titulo text-xl font-bold hidden sm:block"> MY CUSTOM KNIFE </h1>
        </div>

        <div className="justify-center gap-4 hidden sm:flex">
          <a href="#produtos" className="text-[14px] text-textos font-medium hover:text-botao transition cursor-pointer"> COLEÇÃO </a>
          <a className="text-[14px] text-textos font-medium hover:text-botao transition cursor-pointer"> HISTÓRIA </a>
          <a className="text-[14px] text-textos font-medium hover:text-botao transition cursor-pointer"> QUALIDADE </a>
        </div>

        <div className="bg-botao text-branco font-medium rounded-lg flex justify-center items-center py-2.5 px-5 gap-2">
          <PhoneCall />
          <a href="https://wa.me/5569992815365" target="_blank" className="hidden sm:block"> CONTATO</a>
        </div>

      </div>
    </header>
  )
}