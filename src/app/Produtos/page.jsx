"use client";
import "./styles.scss";
import Link from "next/link";
import { produtosJson } from "../produtos";
import { useEffect, useState } from "react";
export default function Produtos() {
	const [produtos, setProdutos] = useState("");
	useEffect(() => {
		async function importar() {
			const staticData = await fetch(`http://localhost:3333/retornarProdutos`);
			const data = await staticData.json();
			setProdutos((anterior) => data);
		}
	}, []);
	useEffect(() => {
		console.log(produtos);
	}, [produtos]);
	return (
		<section className="produtos">
			<main className="produtosMain">
				<article className="produtosContainerCards">
					{produtosJson.map((produto) => {
						return (
							<section className="produtosCard">
								<img src={produto.img1} alt="" className="produtosImagemCard" />
								<h3 className="produtosCardTitulo">{produto.nome}</h3>
								<p className="produtosCardPromocao">promoção!</p>
								<section className="produtosCardContainerValor">
									<p className="produtosCardValorAntigo">
										R${produto.valorAntigo}
									</p>
									<p className="produtosCardValorAtual">
										R${produto.valorAtual}
									</p>
								</section>
								<Link href="/Produtos/1" className="produtosCardBotao">
									Ver mais
								</Link>
							</section>
						);
					})}
				</article>
			</main>
			<aside className="produtosSidebar">
				<article className="produtosSidebarContainer">
					<section>
						<h2>Filtros</h2>
						<hr />
					</section>

					<section>
						<p className="produtosSidebarTitle">Sexo:</p>
						<section className="produtosSidebarContainerSexo">
							<section className="produtosTamanhoSidebarContainer">
								<input type="radio" name="sexo" id="Feminino" />
								<label htmlFor="Feminino">Feminino</label>
							</section>
							<section className="produtosTamanhoSidebarContainer">
								<input type="radio" name="sexo" id="Masculino" />
								<label htmlFor="Masculino">Masculino</label>
							</section>
						</section>
					</section>
					<section>
						<p className="produtosSidebarTitle">Tipo de Produtos:</p>
						<section className="produtosSidebarContainerTamanho">
							<section className="produtosTamanhoSidebarContainer">
								<input type="checkbox" name="roupa" id="calca" />
								<label htmlFor="calca">Calça</label>
							</section>
							<section className="produtosTamanhoSidebarContainer">
								<input type="checkbox" name="roupa" id="Camisa" />
								<label htmlFor="Camisa">Camisa</label>
							</section>
						</section>
					</section>
					<section className="produtosSidebarPromocao">
						<p className="produtosSidebarTitle">Promoção:</p>
						<section className="produtosSidebarContainerTamanho">
							<section className="produtosTamanhoSidebarContainer">
								<input type="radio" name="promocao" id="promocaoSim" />
								<label htmlFor="promocaoSim">Sim</label>
							</section>
							<section className="produtosTamanhoSidebarContainer">
								<input type="radio" name="promocao" id="promocaoNao" />
								<label htmlFor="promocaoNao">Não</label>
							</section>
							<section className="produtosTamanhoSidebarContainer">
								<input type="radio" name="promocao" id="promocaoTodas" />
								<label htmlFor="promocaoTodas">Todas</label>
							</section>
						</section>
					</section>
					<section className="">
						<p className="produtosSidebarTitle">Cor:</p>
						<section className="produtosCoresSidebar">
							<section className="produtosCorSidebar produtosCorSidebarAmarelo"></section>
							<section className="produtosCorSidebar produtosCorSidebarAzul"></section>
							<section className="produtosCorSidebar produtosCorSidebarVerde"></section>
							<section className="produtosCorSidebar produtosCorSidebarPreto"></section>
							<section className="produtosCorSidebar produtosCorSidebarCinza"></section>
							<section className="produtosCorSidebar produtosCorSidebarBranco"></section>
						</section>
					</section>
					<section className="produtosTamanhoSidebar">
						<p className="produtosSidebarTitle">Tamanho:</p>
						<section className="produtosTamanhoSidebarWrapper">
							<section className="produtosTamanhoSidebarContainer">
								<input type="radio" name="tamanho" id="tamanhoP" />
								<label htmlFor="tamanhoP">P</label>
							</section>
							<section className="produtosTamanhoSidebarContainer">
								<input type="radio" name="tamanho" id="tamanhoM" />
								<label htmlFor="tamanhoM">M</label>
							</section>
							<section className="produtosTamanhoSidebarContainer">
								<input type="radio" name="tamanho" id="tamanhoG" />
								<label htmlFor="tamanhoG">G</label>
							</section>
							<section className="produtosTamanhoSidebarContainer">
								<input type="radio" name="tamanho" id="tamanhoXG" />
								<label htmlFor="tamanhoXG">XG</label>
							</section>
							<section className="produtosTamanhoSidebarContainer">
								<input type="radio" name="tamanho" id="tamanhoXXG" />
								<label htmlFor="tamanhoXXG">XXG</label>
							</section>
						</section>
					</section>
					<section className="produtosPrecoSidebarWrapper">
						<p className="produtosSidebarTitle">Preço:</p>
						<section className="produtosPrecoSidebarContainer">
							<section className="produtosPrecoSidebarContainerPrices">
								<input
									className="produtosPrecoSidebarContainerPrice"
									type="number"
								/>
								<p>Até</p>
								<input
									className="produtosPrecoSidebarContainerPrice"
									type="number"
								/>
							</section>
							<button className="produtosPrecoSidebarPocurar">Procurar</button>
						</section>
					</section>
				</article>
			</aside>
		</section>
	);
}
