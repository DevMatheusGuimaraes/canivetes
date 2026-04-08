import Link from "next/link";
import CardProduto from "../CardProduto";
import { createClient } from "@/lib/supabase/server";

interface ProdutoProps {
  id: number;
  identificador: string;
  nome: string;
  descricao: string;
  preco: number;
  url_foto: string;
  categoria: "canivete" | "faca";
}

interface ProdutosProps {
  tipo: "todos" | "canivete" | "faca";
  pagina: number;
}

const ITENS_POR_PAGINA = 10;

export default async function Produtos({
  tipo,
  pagina,
}: ProdutosProps) {
  const supabase = await createClient();

  const paginaAtual = pagina > 0 ? pagina : 1;
  const from = (paginaAtual - 1) * ITENS_POR_PAGINA;
  const to = from + ITENS_POR_PAGINA - 1;

  let query = supabase
    .from("canivetes")
    .select(
      "id, identificador, nome, descricao, preco, url_foto, categoria",
      { count: "exact" }
    )
    .order("id", { ascending: false });

  if (tipo !== "todos") {
    query = query.eq("categoria", tipo);
  }

  const { data, count, error } = await query.range(from, to);

  if (error) {
    return (
      <div id="produtos" className="pt-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-center">
          Peças Disponíveis
        </h1>

        <p className="mt-6 text-center text-red-500">
          Erro ao carregar os produtos: {error.message}
        </p>
      </div>
    );
  }

  const produtos = data ?? [];
  const totalPaginas = Math.max(
    1,
    Math.ceil((count ?? 0) / ITENS_POR_PAGINA)
  );

  function criarHref(novoTipo: "todos" | "canivete" | "faca", novaPagina = 1) {
    const params = new URLSearchParams();

    if (novoTipo !== "todos") {
      params.set("tipo", novoTipo);
    }

    if (novaPagina > 1) {
      params.set("pagina", String(novaPagina));
    }

    const queryString = params.toString();

    return queryString ? `/?${queryString}#produtos` : "/#produtos";
  }

  const paginas = Array.from({ length: totalPaginas }, (_, i) => i + 1);

  return (
    <section id="produtos" className="pt-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-center">
        Peças Disponíveis
      </h1>

      <p className="text-textos text-center pt-2 text-lg">
        Dá uma olhada nos produtos recentes. Cada peça é única e tem sua própria
        história.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href={criarHref("canivete", 1)}
          className={`rounded-lg px-5 py-2 font-medium transition ${
            tipo === "canivete"
              ? "bg-black text-white"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
        >
          Canivete
        </Link>

        <Link
          href={criarHref("faca", 1)}
          className={`rounded-lg px-5 py-2 font-medium transition ${
            tipo === "faca"
              ? "bg-black text-white"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
        >
          Faca
        </Link>

        <Link
          href={criarHref("todos", 1)}
          className={`rounded-lg px-5 py-2 font-medium transition ${
            tipo === "todos"
              ? "bg-black text-white"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
        >
          Todos
        </Link>
      </div>

      {produtos.length === 0 ? (
        <p className="mt-10 text-center text-gray-500">
          Nenhum produto encontrado nessa categoria.
        </p>
      ) : (
        <>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {produtos.map((item) => (
              <CardProduto
                key={item.id}
                nome={item.nome}
                descricao={item.descricao}
                preco={item.preco}
                url_foto={item.url_foto}
                identicador={item.identificador}
              />
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            <Link
              href={criarHref(tipo, Math.max(1, paginaAtual - 1))}
              aria-disabled={paginaAtual === 1}
              className={`rounded-lg px-4 py-2 border transition ${
                paginaAtual === 1
                  ? "pointer-events-none opacity-50"
                  : "hover:bg-gray-100"
              }`}
            >
              Anterior
            </Link>

            {paginas.map((numeroPagina) => (
              <Link
                key={numeroPagina}
                href={criarHref(tipo, numeroPagina)}
                className={`rounded-lg px-4 py-2 border transition ${
                  numeroPagina === paginaAtual
                    ? "bg-black text-white border-black"
                    : "hover:bg-gray-100"
                }`}
              >
                {numeroPagina}
              </Link>
            ))}

            <Link
              href={criarHref(tipo, Math.min(totalPaginas, paginaAtual + 1))}
              aria-disabled={paginaAtual === totalPaginas}
              className={`rounded-lg px-4 py-2 border transition ${
                paginaAtual === totalPaginas
                  ? "pointer-events-none opacity-50"
                  : "hover:bg-gray-100"
              }`}
            >
              Próxima
            </Link>
          </div>
        </>
      )}
    </section>
  );
}