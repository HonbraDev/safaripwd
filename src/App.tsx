import React, { useState } from "react";
import { BiCopy, BiRefresh } from "react-icons/bi";
import Button from "./components/Buttons";
import generatePassword from "./utils/generatePassword";

function App() {
  const [password, setPassword] = useState(generatePassword());

  const regenerate = () => setPassword(generatePassword());
  const copy = () => navigator.clipboard.writeText(password);

  return (
    <div className="App max-w-xl mx-auto">
      <div className="shadow-md m-4 p-4 rounded-lg">
        <h1 className="text-2xl font-bold">SafariPwd</h1>
        <small className="text-sm font-light text-gray-500">
          A Safari-like password generator
        </small>
        <div className="mt-2 flex flex-row justify-center">
          <input
            className="bg-gray-100 rounded-md p-3 w-full"
            type="text"
            readOnly={true}
            value={password}
          />
          <Button onClick={copy} title="Copy">
            <BiCopy />
          </Button>
          <Button onClick={regenerate} title="Regenerate">
            <BiRefresh />
          </Button>
        </div>
      </div>
      <footer className="p-4 pt-0 font-light text-gray-500">
        Made by{" "}
        <a className="font-semibold" href="https://honbra.com/">
          Honbra
        </a>{" "}
        <span className="text-gray-400 font-thin">|</span> Open-source on{" "}
        <a
          className="font-semibold"
          href="https://github.com/HonbraDev/safaripwd"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
