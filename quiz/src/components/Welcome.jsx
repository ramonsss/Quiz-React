import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Welcome.css";

// importação imagem
import Quiz from "../img/quiz.svg";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Seja Bem-Vindo(a)</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
        Iniciar
      </button>
      <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  );
};

export default Welcome;
