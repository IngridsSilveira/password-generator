import { useState } from "react";
import { DivBackground, InputCheckbox, InputShow, InputRange } from "./components/index";


function App() {
  const [inputRange, setRange] = useState<number>(8);
  return (
    <div className="font-bold h-screen w-full flex items-center justify-center bg-slate-300">

    <DivBackground/>

    <fieldset
      className="flex flex-col justify-center w-80 h-80 p-2 bg-slate-100 rounded-r-md shadow-lg"
    >
      <h1 className="text-xl text-center">Password Generator</h1>

      {/* INPUT EXIBIR */}
      <InputShow value={inputRange}/>

      {/* INPUT TAMANHO */}
     <InputRange value={inputRange} onChange={(e) => setRange(Number(e.target.value))}/>

      {/* INPUT CHECKBOX */}
      <p>Characters used:</p>
      <div className="flex">
        <InputCheckbox id="uppercase" label="ABC" name="uppercase"/>
        <InputCheckbox id="lowercase" label="abc" name="lowercase"/>
        <InputCheckbox id="numbers" label="123" name="numbers"/>
        <InputCheckbox id="characters" label="#$@" name="characters"/>
      </div>    
    </fieldset>
  </div>
  );
}

export default App;
