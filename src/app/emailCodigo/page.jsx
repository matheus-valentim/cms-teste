"use client";
import { useEffect, useState } from "react";
const { useRouter } = require("next/navigation");

import styles from "./styles.module.css";
export default function emailCodigo() {
	const [um, setUm] = useState("");
	const [dois, setDois] = useState("");
	const [tres, setTres] = useState("");
	const [quatro, setQuatro] = useState("");
	const [error, setError] = useState(false);
	const { push } = useRouter();

	const mandarCodigo = async () => {
		const email = localStorage.getItem("email");
		const codigo = { senha: `${um}${dois}${tres}${quatro}`, email: email };
		console.log(codigo);
		const url = `http://localhost:3333/validarSenha`;
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},

			body: JSON.stringify(codigo),
		});
		const dado = await response.json();
		console.log(dado, "AAAAAAAAAAAAAA");
		if (dado.status == 400) {
			console.log(dado.message);
			setError(() => dado.message);
		}
		if (dado.status == 201) {
			localStorage.setItem("token", dado.message);
			push("/mudarSenha");
		}

		// parses JSON response into native JavaScript objects
	};

	return (
		<article className={styles.emailCodigo}>
			<section className={styles.emailCodigoContainer}>
				<section>
					<h1 className={styles.h1}>VERIFICAÇÃO</h1>
				</section>
				<form
					action=""
					className={styles.form}
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<p className={styles.label}>
						{" "}
						Coloque o código de 4 digitos enviado por email.
					</p>
					<fieldset className={styles.fieldset}>
						<section className={styles.inputGroup}>
							<input
								maxLength={1}
								onChange={(e) => {
									setUm(e.target.value.trim());
								}}
								type="text"
								className={styles.input}
							/>
							<input
								type="text"
								className={styles.input}
								maxLength={1}
								onChange={(e) => {
									setDois(e.target.value.trim());
								}}
							/>
							<input
								type="text"
								className={styles.input}
								maxLength={1}
								onChange={(e) => {
									setTres(e.target.value.trim());
								}}
							/>
							<input
								type="text"
								className={styles.input}
								maxLength={1}
								onChange={(e) => {
									setQuatro(e.target.value.trim());
								}}
							/>
						</section>
					</fieldset>
					{error ? <span className={styles.error}>{error}</span> : null}

					<p className={styles.timer}>00:30</p>
					<button className={styles.btn} onClick={mandarCodigo}>
						CONFIRMAR
					</button>
				</form>
				<section>
					<p className={styles.codeText}>
						Se não recebeu o código{" "}
						<span className={styles.span}>Reenvie.</span>
					</p>
				</section>
			</section>
		</article>
	);
}
