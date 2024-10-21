import { useState } from "react";

function App() {
  const [color, setColor] = useState("purple");

  return (
    <>
      {/* full-Screen */}
      <div
        className="w-full h-screen flex justify-center items-center"
        style={{ backgroundColor: color }}
      >
        {/* container to hold buttons */}
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("white")}
            className="bg-gray-300 px-4 py-1 rounded-full text-black shadow-lg"
          >
            White
          </button>

          <button
            onClick={() => setColor("black")}
            className="bg-black px-4 py-1 rounded-full text-white shadow-lg"
          >
            Black
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="bg-yellow-500 px-4 py-1 rounded-full text-white shadow-lg"
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("pink")}
            className="bg-pink-500 px-4 py-1 rounded-full text-white shadow-lg"
          >
            Pink
          </button>

          <button
            onClick={() => setColor("orange")}
            className="bg-orange-500 px-4 py-1 rounded-full text-white shadow-lg"
          >
            Orange
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
