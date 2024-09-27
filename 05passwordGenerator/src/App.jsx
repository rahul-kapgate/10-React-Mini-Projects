import { useCallback, useEffect, useRef, useState } from "react";

import "./App.css";

function App() {

  const [length, setLength] = useState(8)
  const [Password, setPassword] = useState("")
  const[numberAllowed, setNumberAllowed] = useState(false)
  const [ CharacterAllowed, setCharacterAllowed] = useState(false)


  let GeneratePassword = useCallback( () =>  {

   let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
   let pass = ""

   if(numberAllowed){
    str += "1234567890"
   }

   if(CharacterAllowed){
    str += "!@#$%^&*()_+{}:<>-="
   }

    for(let i=1; i<= length; i++){
      let char = Math.floor(Math.random() * str.length )

      pass += str.charAt(char)
    }

    setPassword(pass)

  } , [length,numberAllowed,CharacterAllowed])

useEffect(() => {
  GeneratePassword()
}, [length,numberAllowed,CharacterAllowed]);


let passwordRef = useRef(null)

const copyPasswordToClipboard = useCallback(() => {
  // passwordRef.current?.select();
  // passwordRef.current?.setSelectionRange(0, 999);  not needed
  window.navigator.clipboard.writeText(Password);
  alert("Copied")
}, [Password]);
  
  
 return (
   <>
     <div className="mx-auto w-full max-w-md md:max-w-lg lg:max-w-xl text-center rounded-lg px-4 py-5 my-8 bg-blue-100 text-gray-800 shadow-md sm:px-6">
       <h1 className="font-extrabold text-gray-900 text-xl mb-5">
         Password Generator
       </h1>
       <div className="flex flex-col md:flex-row items-center rounded-md border border-gray-300 overflow-hidden mb-4">
         <input
           className="w-full py-2 px-4 outline-none text-gray-700 bg-white"
           type="text"
           readOnly
           value={Password}
           ref={passwordRef}
         />
         <button
           onClick={copyPasswordToClipboard}
           className="bg-green-600 text-white px-4 py-2 hover:bg-green-500 transition-colors w-full md:w-auto mt-2 md:mt-0"
         >
           Copy
         </button>
       </div>

       <div className="text-left">
         <div className="flex items-center justify-between text-sm mb-3">
           <div className="flex items-center space-x-2">
             <label className="font-semibold">Length:</label>
             <input
               type="range"
               min={6}
               max={50}
               value={length}
               className="cursor-pointer w-full sm:w-auto"
               onChange={(e) => setLength(parseInt(e.target.value, 10))}
             />
             <span>{length}</span>
           </div>
         </div>

         <div className="flex flex-col sm:flex-row justify-between gap-4 text-sm">
           <div className="flex items-center space-x-2">
             <input
               type="checkbox"
               defaultChecked={false}
               id="numberInput"
               onChange={() => setNumberAllowed((prev) => !prev)}
             />
             <label htmlFor="numberInput" className="cursor-pointer">
               Include Numbers
             </label>
           </div>
           <div className="flex items-center space-x-2">
             <input
               type="checkbox"
               defaultChecked={false}
               id="characterInput"
               onChange={() => setCharacterAllowed((prev) => !prev)}
             />
             <label htmlFor="characterInput" className="cursor-pointer">
               Include Characters
             </label>
           </div>
         </div>
       </div>
     </div>
   </>
 );

 
 
}

export default App;
