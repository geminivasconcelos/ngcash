import Container from "../../components/Container";
import "./style.scss";

export default function Register() {
  return (
    <Container>
      <div className="div-principal">
        <div className="div-h1">
          <h1 className="title-login">NG CA$H</h1>
        </div>

        <div className="div-register">
          <input className="input-cadastro" type="text" placeholder="Nome" />
          <input className="input-cadastro" type="email" placeholder="email" />
          <input
            className="input-cadastro"
            type="password"
            placeholder="Senha"
          />
        </div>

        <button className="btn-cadastro">Cadastrar</button>
        <p className="p-text">Já tem conta? <a className="p-link" href="/login">Clique aqui para fazer login.</a></p>
      </div>
    </Container>
  );
}
