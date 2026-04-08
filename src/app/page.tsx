import Autoridade from "@/components/Autoridade";
import Contatos from "@/components/Contatos";
import Header from "@/components/Header";
import SessaoInicial from "@/components/Main";
import Produtos from "@/components/Produtos";

type SearchParams = Promise<{
  tipo?: string;
  pagina?: string;
}>;

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {

   const params = await searchParams;

  const tipo =
    params.tipo === "canivete" || params.tipo === "faca"
      ? params.tipo
      : "todos";

  const pagina = Number(params.pagina ?? "1");

  return (
    <div>
      <Header />
      <SessaoInicial />
      <Produtos
        tipo={tipo}
        pagina={Number.isNaN(pagina) || pagina < 1 ? 1 : pagina}
      />
      <Autoridade />
      <Contatos />
    </div>
  );
}
