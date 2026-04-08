import { BookCheck, ShieldCheck, Users } from "lucide-react";

export default function Autoridade() {
  return(
    <div className="bg-branco mt-15 pb-20">

      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-16 pt-10"> Por que confiar no meu trabalho? </h1>

      <section className="flex flex-col sm:flex-row gap-10">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="bg-gray-100 p-3 rounded-full">
            <ShieldCheck className="text-green-500" size={32} />
          </div>
          <h1 className="text-xl font-bold "> Feito para Durar </h1>
          <p className="text-textos text-center">Materiais escolhidos a dedo e tratamento térmico rigoroso. Minhas facas não te deixam na mão.</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <div className="bg-gray-100 p-3 rounded-full">
            <BookCheck className="text-orange-500" size={32} />
          </div>
          <h1 className="text-xl font-bold "> Acabamento Fino </h1>
          <p className="text-textos text-center">Ajustes precisos, polimento cuidadoso. É uma ferramenta de trabalho, mas com cara de jóia.</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <div className="bg-gray-100 p-3 rounded-full">
            <Users className="text-red-500" size={32} />
          </div>
          <h1 className="text-xl font-bold "> Atendimento Direto </h1>
          <p className="text-textos text-center">Você fala direto comigo que fiz a faca. Sem intermediários, sem enrolação.</p>
        </div>
      </section>

    </div>
  )
}