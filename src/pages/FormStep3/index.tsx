import * as C from "./styles";
import { Theme } from "../../components/Theme/index";
import { useForm, FormActions } from "../../contexts/FormContext";
import { useHistory, Link } from "react-router-dom";
import { ChangeEvent, useEffect } from "react";

export const FormStep3 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      history.push("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      });
    }
  }, []);

  const handleNextStep = () => {
    if (state.email !== "" && state.github !== "") {
      console.log(state);
    } else {
      alert("Preencha os dados!");
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  };

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha com os dados para conseguirmos entrar em contato.</p>

        <hr />

        <label>
          Seu é o seu E-mail
          <input
            type="email"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label>
          Seu é o seu GitHub?
          <input
            type="url"
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>

        <Link className="backButton" to="/step2">
          Voltar
        </Link>

        <button onClick={handleNextStep}>Finalizar</button>
      </C.Container>
    </Theme>
  );
};
