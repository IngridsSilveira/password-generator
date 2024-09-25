import { useState } from "react";
import {
  DivBackground,
  InputCheckbox,
  InputShow,
  InputRange,
} from "./components/index";

function App() {
  //MODIFICA O INPUT DE RANGE
  const [inputRange, setRange] = useState<string>("8");

  //MOSTRA O INPUT COM A SENHA
  const [inputShow, setInputShow] = useState<string>("");

  //INPUT DE CHECKBOX, MODIFICA O ESTADO CHECKED
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(false);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(false);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);

  //DEFINE A SENHA
  const [password, setPassword] = useState<string>("");

  //FUNÇÃO QUE COPIA A SENHA
  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard.");
  };

  //FUNÇÃO QUE GERA A SENHA ALEATÓRIA
  const passGenerator = () => {
    let characters = "";

    //Construir a string baseado nas opções selecionadas
    if (includeUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) characters += "0123456789";
    if (includeSymbols) characters += "#$@";

    // Verifica se ao menos uma opção foi selecionada
    if (characters.length === 0) {
      alert("Please select at least one character type.");
      return;
    }

    //Gerar a senha com base no range do usuário
    let generatedPassword = "";
    const passwordLength = inputRange;

    for (let i = 0; i < Number(passwordLength); i++) {
      generatedPassword += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    setPassword(generatedPassword);
    setInputShow(generatedPassword);
  };

  return (
    <div className="font-bold h-screen w-full flex items-center justify-center bg-slate-300">
      <DivBackground />

      <fieldset className="flex flex-col justify-center w-80 h-80 p-2 bg-slate-100 rounded-r-md shadow-lg">
        <h1 className="text-xl text-center">Password Generator</h1>

        {/* INPUT EXIBIR */}
        <InputShow value={inputShow} onClick={copyPassword} />

        {/* INPUT TAMANHO */}
        <InputRange
          value={inputRange}
          onChange={(e) => setRange(e.target.value)}
        />

        {/* INPUT CHECKBOX */}
        <p>Characters used:</p>
        <div className="flex">
          <InputCheckbox
            id="uppercase"
            label="ABC"
            name="uppercase"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
          />

          <InputCheckbox
            id="lowercase"
            label="abc"
            name="lowercase"
            checked={includeLowercase}
            onChange={() => setIncludeLowercase(!includeLowercase)}
          />

          <InputCheckbox
            id="numbers"
            label="123"
            name="numbers"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />

          <InputCheckbox
            id="characters"
            label="#$@"
            name="characters"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
        </div>

        {/* BOTÃO GERAR */}
        <button
          className="bg-blue-700 py-2 px-2 rounded mt-2 text-white"
          onClick={passGenerator}
        >
          Generate Password
        </button>
      </fieldset>
    </div>
  );
}

export default App;
