import React, { useState, useEffect } from "react";

import "./styles.css";

function NewsDesk() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [account, setAccount] = useState([]);

  const isNull = localStorage.getItem("clients");

  useEffect(() => {
    const clients = JSON.parse(localStorage.getItem("clients"));
    if (clients) {
      setAccount(clients);
    }
  }, []);

  function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
    };

    const newAccount = JSON.stringify([...(account || []), data]);
    localStorage.setItem("clients", newAccount);
    window.location.reload();
  }

  function handleNewRegister(e) {
    e.preventDefault();
    localStorage.removeItem("clients");
    window.location.reload();
  }
  return (
    <>
      {isNull === null ? (
        <section className="news">
          <section>
            <h1>Participe de nossas news com promoções e nocidades!</h1>
          </section>
          <section className="main-content">
            <form className="form-news" onSubmit={handleRegister}>
              <input
                type="text"
                value={name}
                placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                value={email}
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <div className="container-button-news">
                <button className="button-news button--flex">Eu quero!</button>
              </div>
            </form>
          </section>
        </section>
      ) : (
        <section className="news">
          <section>
            <h1>Seu e-mail foi cadastrado com sucesso!</h1>
            <p>
              a partir de agora você receberá as novidade e ofertas exclusivas
            </p>

            <div className="container-button-news-register">
              <button
                className="button-success button--flex"
                onClick={handleNewRegister}
              >
                Cadastrar novo e-mail
              </button>
            </div>
          </section>
        </section>
      )}
    </>
  );
}

export default NewsDesk;
