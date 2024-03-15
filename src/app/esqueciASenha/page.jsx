"use client";
import { useState } from "react";
const { useRouter } = require("next/navigation");
import styles from "./styles.module.css";
export default function RecuperarSenha() {
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const { push } = useRouter();

	const requisicao = async () => {
		setLoading(true);
		console.log(email);
		const url = `http://localhost:3333/recuperarSenha`;
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email }),
		});
		const dado = await response.json();
		console.log(dado);
		if (dado.status == 400) {
			setLoading(false);
			setError(() => dado.message);
		}
		if (dado.status == 201) {
			localStorage.setItem("email", email);

			push("/emailCodigo");
		}

		// parses JSON response into native JavaScript objects
	};

	return (
		<article className={styles.recuperarSenha}>
			<section className={styles.recuperarContainer}>
				<section className={styles.logoContainer}>
					<img
						src="/logo.png"
						alt="logo clothes store"
						className={styles.logoImg}
					/>
				</section>
				<section className={styles.main}>
					<h1 className={styles.h1}>Esqueci a senha</h1>
					<p className={styles.p}>
						Coloque seu email para o processo de verificação, nós vamos enviar 4
						digitos para seu email, verifique a caixa de span.
					</p>
					<form
						action=""
						className={styles.form}
						onSubmit={(e) => {
							e.preventDefault();
						}}
					>
						<fieldset className={styles.fieldset}>
							<label htmlFor="email">Email:</label>
							<input
								id="email"
								type="text"
								className={styles.input}
								onChange={(e) => {
									setEmail(e.target.value.trim());
								}}
							/>
							{error ? <span className={styles.error}>{error}</span> : null}
						</fieldset>
						<button className={styles.btn} onClick={requisicao}>
							{loading ? "carregando..." : "CONTINUAR"}
						</button>
					</form>
				</section>
			</section>
		</article>
	);
}
