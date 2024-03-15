"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
export default function LoginAdmin() {
	const [senha, setSenha] = useState("");
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const [login, setLogin] = useState(true);
	const [registrar, setRegistrar] = useState(false);
	const [senhaRegistrar, setSenhaRegistrar] = useState("");
	const [emailRegistrar, setEmailRegistrar] = useState("");
	const [loadingLogin, setLoadingLogin] = useState(false);
	const [loadingRegistrar, setLoadingRegistrar] = useState(false);

	const autenticar = async () => {
		setLoadingLogin(true);
		const url = `http://localhost:3333/login`;
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ senha, email }),
		});
		const dado = await response.json();
		console.log(dado);
		if (dado.status == 400) {
			setLoadingLogin(false);
			console.log(dado.message);
			setError(() => dado.message);
		}
		// parses JSON response into native JavaScript objects
	};
	const registrarUser = async () => {
		setLoadingRegistrar(true);
		const url = `http://localhost:3333/registrar`;
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ senha: senhaRegistrar, email: emailRegistrar }),
		});
		const dado = await response.json();
		console.log(dado);
		if (dado.status == 400) {
			setLoadingRegistrar(false);
			console.log(dado.message);
			setError(() => dado.message);
		}
		// parses JSON response into native JavaScript objects
	};
	const virarRegistrar = () => {
		setRegistrar(true);
		setLogin(false);
		setError("");

		console.log("registrar");
	};
	const virarLogin = () => {
		setLogin(true);
		setRegistrar(false);
		setError("");
		console.log("login");
	};

	useEffect(() => {
		console.log("login:", login, " / registrar:", registrar);
	}, [login, registrar]);
	return (
		<main className={styles.loginPage}>
			<article className={styles.LoginMain}>
				<section className={styles.logo}>
					<img
						src="/logo.png"
						alt="logo clothes store"
						className={styles.logoImg}
					/>
				</section>
				<section className={styles.girar}>
					<article className={login ? styles.animacao : styles.loginContainer}>
						<section className={styles.titulo}>
							<h1>LOGIN</h1>
						</section>
						<section>
							<section className={styles.containerBtn}>
								<button className={`${styles.btn} ${styles.btnAtivo}`}>
									LOGIN
								</button>
								<button className={styles.btn} onClick={virarRegistrar}>
									REGISTRAR
								</button>
							</section>
							<form
								action=""
								className={styles.form}
								onSubmit={(e) => e.preventDefault()}
							>
								<fieldset className={styles.fieldset}>
									<label htmlFor="emailLogin" className={styles.label}>
										Email:
									</label>
									<input
										type="text"
										placeholder="Enter your email"
										className={styles.input}
										id="emailLogin"
										onChange={(e) => {
											setEmail(e.target.value.trim());
										}}
									/>
									{error ? (
										<span className={styles.loginAdminError}>{error}</span>
									) : null}
								</fieldset>
								<fieldset className={styles.fieldset}>
									<label htmlFor="senhaLogin" className={styles.label}>
										Senha:
									</label>
									<input
										type="password"
										placeholder="Enter your password"
										className={styles.input}
										id="senhaLogin"
										onChange={(e) => {
											setSenha(e.target.value.trim());
										}}
									/>
									{error ? (
										<span className={styles.loginAdminError}>{error}</span>
									) : null}
								</fieldset>
								<button
									className={styles.confirmar}
									onClick={(e) => {
										e.preventDefault();
										autenticar();
									}}
								>
									{loadingLogin ? "Carregando..." : "Confirmar"}
								</button>
							</form>
							<section className={styles.esqueceu}>
								Esqueceu a senha?
								<a href="/esqueciASenha" className={styles.a}>
									Clique Aqui.
								</a>
							</section>
							<section className={styles.nada}></section>
						</section>
					</article>

					<article
						className={
							registrar ? `${styles.animacao} ` : `${styles.registrarContainer}`
						}
					>
						<section className={styles.titulo}>
							<h1>REGISTRAR</h1>
						</section>
						<section>
							<section className={styles.containerBtn}>
								<button className={styles.btn} onClick={virarLogin}>
									LOGIN
								</button>
								<button className={`${styles.btn} ${styles.btnAtivo}`}>
									REGISTRAR
								</button>
							</section>
							<form
								action=""
								className={styles.form}
								onSubmit={(e) => e.preventDefault()}
							>
								<fieldset className={styles.fieldset}>
									<label htmlFor="emailRegister" className={styles.label}>
										Email:
									</label>
									<input
										type="text"
										placeholder="Enter your email"
										className={styles.input}
										id="emailRegister"
										onChange={(e) => {
											setEmailRegistrar(e.target.value.trim());
										}}
									/>
									{error ? (
										<span className={styles.loginAdminError}>{error}</span>
									) : null}
								</fieldset>
								<fieldset className={styles.fieldset}>
									<label htmlFor="senhaRegister" className={styles.label}>
										Senha:
									</label>
									<input
										type="text"
										placeholder="Enter your password"
										className={styles.input}
										id="senhaRegister"
										onChange={(e) => {
											setSenhaRegistrar(e.target.value.trim());
										}}
									/>
									{error ? (
										<span className={styles.loginAdminError}>{error}</span>
									) : null}
								</fieldset>
								<button
									className={styles.confirmar}
									onClick={(e) => {
										e.preventDefault();
										console.log(emailRegistrar, senhaRegistrar);
										registrarUser();
									}}
								>
									{loadingRegistrar ? "Carregando..." : "Confirmar"}
								</button>
							</form>
							<section className={styles.esqueceu1}>
								Esqueceu a senha?{" "}
								<a href="#" className={styles.a}>
									Clique Aqui.
								</a>
							</section>
						</section>
					</article>
				</section>
				<section className={styles.nada}></section>
			</article>
			<aside className={styles.aside}>
				<img
					src="/Right image.png"
					alt="Imagem de duas mulheres que trabalham em uma floricultura, felizes ao se arrumar e arrumar o espaço de trabalho."
				/>
			</aside>
		</main>
	);
}
/*	<section className="loginAdminPage">
			<main className="loginAdmincontainer">
				<h2>Login</h2>
				<section className="loginAdmin">
					<form
						action=""
						className="loginAdminForm"
						onSubmit={(e) => e.preventDefault()}
					>
						<fieldset className="loginAdminContent">
							<label htmlFor="email">Email:</label>
							<input
								id="email"
								type="text"
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
							{error ? <span className="loginAdminError">{error}</span> : null}
						</fieldset>
						<fieldset className="loginAdminContent">
							<label htmlFor="senha">Senha:</label>
							<input
								id="senha"
								type="text"
								onChange={(e) => {
									setSenha(e.target.value);
								}}
							/>
							{error ? <span className="loginAdminError">{error}</span> : null}
						</fieldset>
						<button
							className="loginAdminBotao"
							onClick={(e) => {
								e.preventDefault();
								autenticar();
							}}
						>
							Confirmar
						</button>
					</form>
					<a href="">esqueci a senha</a>
				</section>
			</main>
		</section>*/
