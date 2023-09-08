"use client";
import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";

import "./Styles.scss";
export default function ProdutoDetalhe({ params }) {
	const todosProdutos = [
		{
			id: 0,
			nome: "MENS SHOES DN 23XX, NEW PRODUCT",
			valorAtual: "130.00",
			valorAntigo: "100.00",
			desconto: "25",
			tag: "LIFESTYLE",
			cores: ["preto", "branco", "verde"],
			estoqueNum: 20,
			valorFrete: "150.00",
			estrelas: "1",
			img1: "https://via.placeholder.com/600x600",
			img2: "/4.jpg",
			img3: "/5.jpg",
			img4: "/1.jpg",
		},
		{
			id: 1,
			nome: "MENS SHOES DN 23XX, NEW PRODUCT",
			valorAtual: "130.00",
			valorAntigo: "100.00",
			desconto: "25",
			tag: "LIFESTYLE",
			cores: ["preto", "branco", "verde"],
			estoqueNum: 20,
			valorFrete: "150.00",
			estrelas: "1",
			img1: "/4.jpg",
			img2: "https://via.placeholder.com/600x600",
			img3: "/5.jpg",
			img4: "/1.jpg",
		},
		{
			id: 0,
			nome: "MENS SHOES DN 23XX, NEW PRODUCT",
			valorAtual: "130.00",
			valorAntigo: "100.00",
			desconto: "25",
			tag: "LIFESTYLE",
			cores: ["preto", "branco", "verde"],
			estoqueNum: 20,
			valorFrete: "150.00",
			estrelas: "1",
			img1: "/5.jpg",
			img2: "https://via.placeholder.com/600x600",
			img3: "/5.jpg",
			img4: "/1.jpg",
		},
		{
			id: 0,
			nome: "MENS SHOES DN 23XX, NEW PRODUCT",
			valorAtual: "130.00",
			valorAntigo: "100.00",
			desconto: "25",
			tag: "LIFESTYLE",
			cores: ["preto", "branco", "verde"],
			estoqueNum: 20,
			valorFrete: "150.00",
			estrelas: "1",
			img1: "/1.jpg",
			img2: "https://via.placeholder.com/600x600",
			img3: "/5.jpg",
			img4: "/1.jpg",
		},
	];
	const [principalImage, setPrincipalImage] = useState("");
	const [position, setPosition] = useState(1);
	const [loading, setLoading] = useState("");

	const MAGNIFY_SIZE = 200;
	const MAGNIFY_SIZE_HALF = MAGNIFY_SIZE / 7;

	const [magnifyStyle, setMagnifyStyle] = useState({
		backgroundImage: `url(${principalImage})`,
	});

	const handleMouseMove = (e) => {
		const { offsetX, offsetY, target } = e.nativeEvent;
		const { offsetWidth, offsetHeight } = target;

		const xPercentage = (offsetX / offsetWidth) * 100;
		const yPercentage = (offsetY / offsetHeight) * 100;

		setMagnifyStyle((prev) => ({
			...prev,
			display: "block",
			top: `${offsetY - MAGNIFY_SIZE_HALF}px`,
			left: `${offsetX - MAGNIFY_SIZE_HALF}px`,
			backgroundPosition: `${xPercentage}% ${yPercentage}%`,
		}));
	};

	const handleMouseLeave = (e) => {
		setMagnifyStyle((prev) => ({ ...prev, display: "none" }));
		console.log(principalImage);
	};

	useEffect(() => {
		setLoading(true);
		setPosition(window.location.pathname.slice(10));
		setLoading(false);
	}, []);

	useEffect(() => {
		setLoading(true);
		setPrincipalImage("/1.jpg");
		setMagnifyStyle({
			backgroundImage: `url(${"/1.jpg"})`,
		});
		setLoading(false);
	}, [position]);

	useEffect(() => {
		setMagnifyStyle({
			backgroundImage: `url(${principalImage})`,
		});
	}, [principalImage]);

	return (
		<div className="card-wrapper">
			<div className="Header-card">
				<p className="breadcrumb-card">produtos/{todosProdutos[position].id}</p>
				<Link href="/produtos" className="voltar-card">
					Voltar
				</Link>
			</div>
			{!loading ? (
				<div className="card">
					<div className="product-imgs">
						<div className="img-display">
							<div className="img-showcase">
								<img
									className="principal-image"
									src={principalImage}
									alt="shoe image"
									draggable={false}
									onMouseMove={handleMouseMove}
									onMouseLeave={handleMouseLeave}
								/>
								<div className="magnify" style={magnifyStyle}></div>
							</div>
						</div>
						<div className="img-select">
							<div className="img-item">
								<button
									data-id="1"
									onClick={(e) => {
										setPrincipalImage(todosProdutos[position].img1);
									}}
								>
									<img
										className="img"
										src={todosProdutos[position].img1}
										alt="shoe image"
									/>
								</button>
							</div>
							<div className="img-item">
								<button
									data-id="2"
									onClick={(e) => {
										setPrincipalImage(todosProdutos[position].img2);
									}}
								>
									<img
										className="img"
										src={todosProdutos[position].img2}
										alt="shoe image"
									/>
								</button>
							</div>
							<div className="img-item">
								<button
									data-id="3"
									onClick={(e) => {
										setPrincipalImage(todosProdutos[position].img3);
									}}
								>
									<img
										className="img"
										src={todosProdutos[position].img3}
										alt="shoe image"
									/>
								</button>
							</div>
							<div className="img-item">
								<button
									data-id="4"
									onClick={(e) => {
										setPrincipalImage(todosProdutos[position].img4);
									}}
								>
									<img
										className="img"
										src={todosProdutos[position].img4}
										alt="shoe image"
									/>
								</button>
							</div>
						</div>
					</div>

					<div className="product-content">
						<h2 className="product-title">{todosProdutos[position].nome}</h2>
						<a href="#" className="product-link">
							visit nike store
						</a>
						<div className="product-rating">
							<i className="fas fa-star">
								<svg
									width="20"
									height="20"
									viewBox="0 0 64 64"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M62 25.2H39.1L32 3L24.9 25.2H2L20.5 38.9L13.5 61L32 47.3L50.5 61L43.4 38.8L62 25.2Z"
										fill="#FFCE31"
									/>
								</svg>
							</i>
							<i className="fas fa-star">
								<svg
									width="20"
									height="20"
									viewBox="0 0 64 64"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M62 25.2H39.1L32 3L24.9 25.2H2L20.5 38.9L13.5 61L32 47.3L50.5 61L43.4 38.8L62 25.2Z"
										fill="#FFCE31"
									/>
								</svg>
							</i>
							<i className="fas fa-star">
								<svg
									width="20"
									height="20"
									viewBox="0 0 64 64"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M62 25.2H39.1L32 3L24.9 25.2H2L20.5 38.9L13.5 61L32 47.3L50.5 61L43.4 38.8L62 25.2Z"
										fill="#FFCE31"
									/>
								</svg>
							</i>
							<i className="fas fa-star">
								<svg
									width="20"
									height="20"
									viewBox="0 0 64 64"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M62 25.2H39.1L32 3L24.9 25.2H2L20.5 38.9L13.5 61L32 47.3L50.5 61L43.4 38.8L62 25.2Z"
										fill="#FFCE31"
									/>
								</svg>
							</i>
							<i className="fas fa-star-half-alt">
								<svg
									width="20"
									height="20"
									viewBox="0 0 64 64"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M62 25.2H39.1L32 3L24.9 25.2H2L20.5 38.9L13.5 61L32 47.3L50.5 61L43.4 38.8L62 25.2Z"
										fill="#FFCE31"
									/>
								</svg>
							</i>
							<span> 5(21)</span>
						</div>

						<div className="product-price">
							{todosProdutos[position].valorAtual ? (
								<p className="new-price">
									Novo preço{" "}
									<span>
										${todosProdutos[position].valorAtual}
										{todosProdutos[position].desconto
											? `(${todosProdutos[position].desconto}% OFF)`
											: null}
									</span>
								</p>
							) : null}

							{todosProdutos[position].valorAntigo ? (
								<p className="last-price">
									Preço antigo{" "}
									<span>${todosProdutos[position].valorAntigo}</span>
								</p>
							) : null}
						</div>

						<div className="product-detail">
							<span> Detalhes</span>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
								eveniet veniam tempora fuga tenetur placeat sapiente architecto
								illum soluta consequuntur, aspernatur quidem at sequi ipsa!
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Consequatur, perferendis eius. Dignissimos, labore suscipit.
								Unde.
							</p>
							<ul>
								<li className="listaCor">
									Cor{" "}
									{todosProdutos[position].cores.map((cor, key) => {
										return (
											<p>
												{cor}
												{todosProdutos[position].cores.length - 1 <= key
													? "."
													: ","}
											</p>
										);
									})}
								</li>
								<li>
									Estoque <span>{todosProdutos[position].estoqueNum}</span>
								</li>
								<li>
									tag: <span>{todosProdutos[position].tag}</span>
								</li>

								<li>
									Frete <span> ${todosProdutos[position].valorFrete}</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
}
