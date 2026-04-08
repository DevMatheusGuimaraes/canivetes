import { Camera, Phone, PhoneCall } from "lucide-react";

export default function Contatos() {
  return(
    <div className="flex flex-col items-center my-20 gap-6 max-w-5xl m-auto">

      <div className="bg-red-100 p-3 rounded-full">
        <PhoneCall className="text-red-500" size={32} />
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-center"> Gostou de alguma peça? </h1>

      <p className="text-textos text-center max-w-2xl"> Me chama no WhatsApp pra gente conversar. Se a peça que você gostou já foi vendida, podemos encomendar uma parecida! </p>

      <div className="flex flex-col gap-4">
        <div className="flex justify-center items-center bg-[#26A65B] rounded-xl py-4 px-2 gap-3 font-bold text-lg">
          <Phone color="white"/>
          <a href="https://wa.me/5569992815365" target="_blank" className="text-branco"> Me chama no WhatsApp </a>
        </div>

        <div className="flex justify-center items-center bg-branco rounded-xl py-4 px-2 gap-3 font-bold text-lg border border-gray-200">
          <Camera />
          <a href="https://www.instagram.com/mycustomknife/" target="_blank"> Me chama no Instagram </a>
        </div>

      </div>
    </div>
  )
}