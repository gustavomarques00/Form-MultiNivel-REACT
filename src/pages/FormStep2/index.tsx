import * as C from "./styles";
import { Theme } from "../../components/Theme/index";
import { useForm, FormActions } from "../../contexts/FormContext";
import { useHistory, Link } from "react-router-dom";
import { ChangeEvent, useEffect } from "react";
import { SelectOption } from "../../components/SelectOption";

export const FormStep2 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      history.push("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      });
    }
  }, []);

  const handleNextStep = () => {
    if (state.name !== "") {
      history.push("/step3");
    } else {
      alert("Preencha os dados!");
    }
  };

  const setLevel = (level: Number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3</p>
        <h1>{state.name}, o que melhor escreve você?</h1>
        <p>
          Escolha a opção que melhor condiz com oseu estado atual,
          profissionalmente.
        </p>

        <hr />

        <SelectOption
          title="Sou Iniciante"
          description="Comecei a programar a menos de 2 anos"
          icon="🤪"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOption
          title="Sou programador"
          description="Ja programo a 2 anos ou mais"
          icon="🤓"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />
        
        <Link className="backButton" to='/'>Voltar</Link>
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
};
