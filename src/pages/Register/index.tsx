import Container from "../../components/Container";
import "./style.scss";
import { useNavigate, Link } from "react-router-dom";
import * as React from "react";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = React.useState({
    name: "",
    username: "",
    password: "",
  });

  const [warning, setWarning] = React.useState({
    show: false,
    message: "",
  });

  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (form.name === "" || form.username === "" || form.password === "") {
      setWarning({
        show: true,
        message: "Preencha todos os campos",
      });
      setTimeout(() => {
        setWarning({
          show: false,
          message: "",
        });
      }, 3000);
      return;
    }

    let users = [];
    if (localStorage.getItem("users")) {
      users = JSON.parse(localStorage.getItem("users"));
    }
    const user = users.find((u) => u.username === form.username);
    if (user) {
      setWarning({
        show: true,
        message: "E-mail já cadastrado",
      });
      setTimeout(() => {
        setWarning({
          show: false,
          message: "",
        });
      }, 3000);
    } else {
      users.push(form);
      localStorage.setItem("users", JSON.stringify(users));
      setForm({
        name: "",
        username: "",
        password: "",
      });
      setTimeout(() => {
        navigate("/Login");
      }, 500);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="div-principal">
        <div className="div-h1">
          <h1 className="title-login">NG CA$H</h1>
        </div>

        <div className="div-register">
          <input
            className="input-cadastro"
            type="text"
            placeholder="Nome"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            className="input-cadastro"
            type="text"
            placeholder="usuário"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
          <input
            className="input-cadastro"
            type="password"
            placeholder="Senha"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <button className="btn-cadastro">Cadastrar</button>
        <p className="p-text">
          Já tem conta?{" "}
          <a className="p-link" href="/login">
            Clique aqui para fazer login.
          </a>
        </p>
      </div>
    </form>
  );
}
