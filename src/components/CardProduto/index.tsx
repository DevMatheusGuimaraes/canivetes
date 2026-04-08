import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Canivete {
  nome: string;
  descricao: string;
  preco: number;
  url_foto: string;
  identicador: string;
}

export default function CardProduto({ nome, descricao, preco, url_foto, identicador }: Canivete) {

  const mensagem = `Olá, estou interessado no produto ${identicador} e gostaria de mais informações. Se possível, poderia me passar mais detalhes sobre ele?`;

  const linkWhatsapp = `https://wa.me/5569992815365?text=${encodeURIComponent(mensagem)}`;

 const formatCurrency = (value: string): string => {
    const numeric = value.replace(/\D/g, '');
    if (!numeric) return '';
    const amount = (parseInt(numeric) / 100).toFixed(2);
    return `R$ ${amount.replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
  };

  return (
    <article className="w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white">
      <div className="bg-zinc-100 p-6 flex items-center justify-center">
        <div className="relative w-full aspect-[2/3] sm:aspect-[3/3]">
          <Image
            src={url_foto}
            alt="Canivete dobrável"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="bg-white px-6 py-6">
        {/* <p className="mb-2 text-[12px] font-medium uppercase tracking-[0.12em] text-orange-500">
          {nome}
        </p> */}

        <h2 className="mb-1 text-[20px] font-bold leading-tight text-zinc-900">
          Canivete ID: {identicador}
        </h2>

        <p className="mb-6 text-[15px] leading-7 text-zinc-600">
          {descricao}
        </p>

        <button className="flex w-full items-center justify-between text-left text-[16px] font-semibold text-red-500 transition-opacity hover:opacity-80">
          <span className="max-w-[220px]">
            {formatCurrency(preco.toString())}
          </span>

          <a href={linkWhatsapp} target="_blank"> <ArrowRight size={24} /> </a>

        </button>
      </div>
    </article>
  );
}