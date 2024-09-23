import { useState } from 'react'



function App() {
 const [color, setColor ] = useState('purple')

  return (
    <>
      {/* full-Screen  */}
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        {/* container to hold buttuns   */}
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
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
              onClick={() => setColor("Black")}
              className="bg-black px-4 py-1 rounded-full text-white shadow-lg"
            >
              Black
            </button>

            <button
              onClick={() => setColor("Yellow")}
              className="bg-yellow-500 px-4 py-1 rounded-full text-white shadow-lg"
            >
              Yellow
            </button>

            <button
              onClick={() => setColor("pink")}
              className="bg-pink-500 px-4 py-1 rounded-full text-white shadow-lg"
            >
              pink
            </button>

            <button
              onClick={() => setColor("orange")}
              className="bg-orange-500 px-4 py-1 rounded-full text-white shadow-lg"
            >
              Organge
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
