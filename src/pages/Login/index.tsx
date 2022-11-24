import "./style.scss";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  const [warning, setWarning] = React.useState({
    show: false,
    message: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let users = [];
    if (localStorage.getItem("users")) {
      users = JSON.parse(localStorage.getItem("users"));
      const user = users.find(
        (u) => u.email === form.email && u.password === form.password
      );
      if (user) {
        users.push(user);
        localStorage.setItem("token", btoa(user.email));
        setWarning({ show: false, message: "" });
        // navigate('/Calculation');
        console.log("passou");
      } else {
        setWarning({ show: true, message: "Usuário ou senha inválidos" });
      }
    } else {
      setWarning({ show: true, message: "Não existe usuários cadastrados" });
      setTimeout(() => {
        setWarning({ show: false, message: "" });
      }, 10000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="div-principal">
        <div className="div-h1">
          <h1 className="title-login">NG CA$H</h1>
        </div>

        <div className="div-inputs">
          <div className="div-login">
            <input
              className="inputs"
              type="email"
              placeholder="Login"
              value={form.email}
              onChange={handleChange}
              name="email"
            />
          </div>

          <div className="div-senha">
            <input
              className="inputs"
              type="password"
              placeholder="Senha"
              value={form.password}
              onChange={handleChange}
              name="password"
            />
          </div>
        </div>
        <div className="div-login-cadastro">
          <button type="submit" className="btn-entrar">
            Entrar
          </button>
          <p className="text-p">
            Ainda não tem conta? <br />
            <a className="link-cadastro" href="/register">
              Cadastre-se aqui.
            </a>
          </p>
        </div>
      </div>
    </form>
  );
}
