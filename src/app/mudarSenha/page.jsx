"use client";
import { useState } from "react";
const { useRouter } = require("next/navigation");

import styles from "./styles.module.css";
export default function mudarSenha() {
	const [senha1, setSenha1] = useState();
	const [senha2, setSenha2] = useState();
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const { push } = useRouter();

	const mandarCodigo = async () => {
		setLoading(true);
		const email = localStorage.getItem("email");
		const token = localStorage.getItem("token");
		const dados = { email: email, senha1: senha1, senha2: senha2 };
		console.log(token);
		const url = `http://localhost:3333/mudarSenha`;
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(dados),
		});
		const dado = await response.json();
		console.log(dado.message, "AAAAAAAAAAAAAA");
		if (dado.status == 400) {
			setLoading(false);
			console.log(dado.message);
			setError(() => dado.message);
		}
		if (dado.status == 201) {
			push("/Produtos");
		}
		// parses JSON response into native JavaScript objects
	};
	return (
		<article className={styles.mudarSenha}>
			<section className={styles.mudarSenhaContainer}>
				<section className={styles.logoContainer}>
					<img
						src="/logo.png"
						alt="logo clothes store"
						className={styles.logoImg}
					/>
				</section>
				<section>
					<section>
						<h1 className={styles.h1}>Nova Senha:</h1>
					</section>
					<form
						action=""
						className={styles.form}
						onSubmit={(e) => e.preventDefault()}
					>
						<p className={styles.p}>
							Redefina sua senha para conseguir o acesso a sua conta.
						</p>
						<fieldset className={styles.fieldset}>
							<label htmlFor="senha1">Digite sua nova senha:</label>
							<input
								type="text"
								className={styles.input}
								id="senha1"
								onChange={(e) => setSenha1(e.target.value)}
							/>
							{error ? <span className={styles.error}>{error}</span> : null}
						</fieldset>
						<fieldset className={styles.fieldset}>
							<label htmlFor="senha2">Repita a senha:</label>
							<input
								type="text"
								id="senha2"
								className={styles.input}
								onChange={(e) => setSenha2(e.target.value)}
							/>
							{error ? <span className={styles.error}>{error}</span> : null}
						</fieldset>
						<button className={styles.btn} onClick={mandarCodigo}>
							{loading ? "Carregando...?" : "CONFIRMAR"}
						</button>
					</form>
				</section>
			</section>
		</article>
	);
}
