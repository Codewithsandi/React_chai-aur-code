import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [allowNumber, setAllowNumber] = useState(false);
  const [allowChar, setAllowChar] = useState(false);
  const [password, setPassword] = useState("");
  const [copy, setCopy] = useState(false);

  const passwordRef = useRef(null);

  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setCopy(true);
  }, [password]);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (allowNumber) str += "0123456789";
    if (allowChar) str += "!@#$%^&*-+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, allowChar, allowNumber, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, allowChar, allowNumber, generatePassword]);

  useEffect(() => {
    if (copy) {
      const timeout = setTimeout(() => {
        setCopy(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [copy]);

  return (
    <>
      <div className="relative">
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 mt-10 bg-gray-700 text-orange-500">
          <h1 className="text-white text-center text-2xl my-3">
            Password generator
          </h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              value={password}
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyToClipBoard}
              className="outline-none bg-blue-600 hover:bg-blue-800 text-white px-3 py-0.5 shrink-0"
            >
              copy
            </button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="cursor-pointer"
              />
              <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={allowNumber}
                onChange={() => {
                  setAllowNumber((prevValue) => !prevValue);
                }}
                id="numberInput"
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                id="characterInput"
                defaultChecked={allowChar}
                onChange={() => {
                  setAllowChar((prevValue) => !prevValue);
                }}
              />
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
        </div>
        {copy && (
          <div className="absolute top-0 h-screen w-full flex items-center justify-center bg-[#fd6666]">
            <div className="w-[20%] h-20 flex items-center justify-center rounded-md bg-gray-700 text-white">
              Successfully Copied.
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
