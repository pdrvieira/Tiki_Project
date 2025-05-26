import { StyledBox2, StyledForm, StyledInput, StyledCheckboxLabel } from "./InputField.styles";
import { useState } from "react";
import Button from "../Button/Button";

function InputField() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [aceito, setAceito] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!aceito) {
      alert("Você precisa aceitar a política de privacidade.");
      return;
    }
    setLoading(true);
    setSuccess(false);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setNome("");
      setEmail("");
      setAceito(false);
      setTimeout(() => setSuccess(false), 1800);
    }, 1200);
  };

  return (
    <StyledBox2>
      <h2 style={{ paddingTop: 80, paddingBottom: 44 }}>
        CADASTRE-SE E FIQUE POR DENTRO<br /> DAS NOVIDADES
      </h2>

      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <StyledInput
          type="email"
          placeholder="meuemail@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <StyledCheckboxLabel>
          <input
            type="checkbox"
            checked={aceito}
            onChange={() => setAceito(!aceito)}
          />
          <span>Declaro que li e aceito a política de privacidade</span>
        </StyledCheckboxLabel>

        <Button style={{marginBottom:50}} type="submit" loading={loading} success={success}>ENVIAR</Button>
      </StyledForm>
    </StyledBox2>
  );
}

export default InputField;
