import Image from "next/image";

export default function SessaoInicial() {
  return(
    <main className=" flex flex-col gap-8 justify-center items-center h-screen">
      <Image 
        src="/LOGO.png"
        alt="Logo"
        width={100}
        height={100}
      />
      <h1 className="sm:text-[60px] text-4xl font-bold text-center max-w-[768]"> Canivete e Faca feita com <span className="text-text-secondary">alma</span> e <span className="text-text-primary">precisão</span>. </h1>
      <p className="text-lg text-textos text-center"> Facas e canivetes únicos, para quem valoriza qualidade de verdade e design que não te deixa na mão. </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="bg-botao h-14 w-44 text-branco font-bold rounded-lg flex items-center justify-center">
          <a href="#produtos" className=" text-branco cursor-pointer"> Ver Coleção </a>
        </div>
        <div className="bg-branco h-14 w-44 text-texto-botao font-bold rounded-lg border border-gray-200 cursor-pointer flex items-center justify-center">
          <a href="https://wa.me/5569992815365" target="_blank" className="cursor-pointer"> Fala Comigo </a>
        </div>
      </div>
    </main>
  )
}