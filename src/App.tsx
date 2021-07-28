import React from "react";
import "./App.scss";
import Background from "./components/Background/Background";
import Cover from "./components/Cover/Cover";

function App() {
  return (
    <Background>
      <Cover>
        <div className="book">
          <label htmlFor="page-1" className="book__page book__page--1">
            <img src="infinity-loop.svg" alt="" />
          </label>

          <label htmlFor="page-2" className="book__page book__page--4">
            <div className="page__content">
              <h1 className="page__content-title">I</h1>
              <div className="page__content-blockquote">
                <p className="page__content-blockquote-text">
                  Toda grande história começa com o primeiro passo.{" "}
                </p>
              </div>
              <div className="page__content-text">
                <p>E depois do primeiro passo, os outros virão. </p>
              </div>
              <div className="page__number">3</div>
            </div>
          </label>

          {/* <!-- Resets the page --> */}
          <input type="radio" name="page" id="page-1" />

          {/* <!-- Goes to the second page --> */}
          <input type="radio" name="page" id="page-2" />
          <label className="book__page book__page--2">
            <div className="book__page-front">
              <div className="page__content">
                <h1 className="page__content-book-title">
                  História de infinitos fins
                </h1>
                <h2 className="page__content-author">por Todo Mundo</h2>

                <p className="page__content-credits">
                  Introdução por
                  <span>...</span>
                </p>

                <p className="page__content-credits">
                  Ilustrações por
                  <span>...</span>
                </p>

                <div className="page__content-copyright">
                  <p>Brasileiros</p>
                  <p>Brasil</p>
                </div>
              </div>
            </div>
            <div className="book__page-back"></div>
          </label>
        </div>
      </Cover>
    </Background>
  );
}

export default App;
