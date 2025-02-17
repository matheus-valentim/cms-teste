import styles from "./styles.module.css";
export default function Carrinho() {
	return (
		<article className={styles.carrinho}>
			<article className={styles.teste}>
				<section>
					<small>Home {">"} Carrinho </small>
				</section>
				<h1 className={styles.h1}>Seu Carrinho</h1>
				<main className={styles.main}>
					<article className={styles.esquerdo}>
						<section className={styles.item}>
							<section className={styles.imgContainer}>
								<img src="./1.jpg" alt="" className={styles.img} />
							</section>
							<section className={styles.produto}>
								<section className={styles.tituloItemContainer}>
									<h3>camisa</h3>
									<p>lixera</p>
								</section>
								<section className={styles.detalhes}>
									<p>
										Tamanho:<small> pequeno</small>
									</p>
									<p>
										cor: <small> branco</small>
									</p>
								</section>
								<section className={styles.preço}>
									<p>100R$</p>
									<section className={styles.botoes}>
										<button>-</button>1<button>+</button>
									</section>
								</section>
							</section>
						</section>
						<hr />
						<section className={styles.item}>
							<section className={styles.imgContainer}>
								<img src="./women.jpg" alt="" className={styles.img} />
							</section>
							<section className={styles.produto}>
								<section className={styles.tituloItemContainer}>
									<h3>camisa</h3>
									<p>lixera</p>
								</section>
								<section className={styles.detalhes}>
									<p>
										Tamanho:<small> pequeno</small>
									</p>
									<p>
										cor: <small> branco</small>
									</p>
								</section>
								<section className={styles.preço}>
									<p>100R$</p>
									<section className={styles.botoes}>
										<button>-</button>1<button>+</button>
									</section>
								</section>
							</section>
						</section>
						<hr />
						<section className={styles.item}>
							<section className={styles.imgContainer}>
								<img src="./4.jpg" alt="" className={styles.img} />
							</section>
							<section className={styles.produto}>
								<section className={styles.tituloItemContainer}>
									<h3 className={styles.h3}>camisa</h3>
									<p>lixera</p>
								</section>
								<section className={styles.detalhes}>
									<p>
										Tamanho:<small> pequeno</small>
									</p>
									<p>
										cor: <small> branco</small>
									</p>
								</section>
								<section className={styles.preço}>
									<p>100R$</p>
									<section className={styles.botoes}>
										<button>-</button>1<button>+</button>
									</section>
								</section>
							</section>
						</section>
						<hr />
					</article>
					<article className={styles.pedido}>
						<h3>Resumo do pedido</h3>
						<section>
							<section className={styles.pedidoContainerTexto}>
								<p className={styles.pedidoTexto}>subtotal</p>
								<p>R$200</p>
							</section>
							<section className={styles.pedidoContainerTexto}>
								<p className={styles.pedidoTexto}>desconto</p>
								<p>-R$200</p>
							</section>
							<section className={styles.pedidoContainerTexto}>
								<p className={styles.pedidoTexto}>Taxa de entrega</p>
								<p>R$200</p>
							</section>
							<hr />
							<section className={styles.pedidoContainerTexto}>
								<p className={styles.pedidoTexto}>Total</p>
								<p>R$200</p>
							</section>
							<fieldset>
								<input type="text" /> <button>Add</button>
							</fieldset>
							<button> Checkout</button>
						</section>
					</article>
				</main>
			</article>
		</article>
	);
}
