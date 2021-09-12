import React from "react";

import "./styles.css";

const NewsDesk = () => {
  return (
    <div className="news">
      <aside>
        <h1>Participe de nossas news com promoções e nocidades!</h1>
      </aside>
      <main className="main-content">
        <form className="form-news">
          <input type="text" placeholder="Digite seu nome" />
          <input type="text" placeholder="Digite seu email" />

          <div className="container-button-news">
            <a href="/" className="button-news button--flex">
              Eu quero!
            </a>
          </div>
        </form>
      </main>
    </div>
  );
};

export default NewsDesk;
