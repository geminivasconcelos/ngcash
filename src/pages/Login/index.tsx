import Container from "../../components/Container";
import "./style.scss";

export default function Login() {
  return (
    <Container>
      <div className="div-principal">
        <div className="div-h1">
          <h1 className="title-login">NG CA$H</h1>
        </div>

        <div className="div-inputs">
          <div className="div-login">
            <input className="inputs" type="text" placeholder="Login" />
          </div>

          <div className="div-senha">
            <input
              className="inputs"
              type="password"
              placeholder="Senha"
            />
          </div>
        </div>
        <div className="div-login-cadastro">
          <button className="btn-entrar">Entrar</button>
          <p className="text-p">
            Ainda não tem conta? <br /><a  className="link-cadastro" href="#">Cadastre-se aqui.</a>
          </p>
        </div>
      </div>
    </Container>
  );
}
