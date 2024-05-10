import { useState } from "react";

function App() {
  const [color, setColor] = useState("bg-gray-500");

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <>
      <div className={`relative w-full h-screen flex justify-center ${color}`}>
        <div className="bg-white rounded-full p-5 absolute bottom-10 flex flex-wrap gap-2">
          <button
            className="bg-red-600 text-white rounded-lg px-5 py-1"
            onClick={() => { handleColorChange("bg-red-500") }}
          >
            Red
          </button>
          <button
            className="bg-blue-600 text-white rounded-lg px-5 py-1"
            onClick={() => { handleColorChange("bg-blue-500") }}
          >
            Blue
          </button>
          <button
            className="bg-green-600 text-white rounded-lg px-5 py-1"
            onClick={() => { handleColorChange("bg-green-500") }}
          >
            Green
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
