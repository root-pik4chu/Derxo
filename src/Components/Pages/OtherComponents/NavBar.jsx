import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-[2vw] left-0 w-full  p-4 flex justify-between items-center z-50">
      <div className="w-[30.3vw]">
      <div className="text-black text-4xl font-semibold font-[f1] px-[4vw]">Derxo</div>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      <ul className={`w-[30.3vw] text-[1vw] md:flex space-x-6 text-black absolute md:static top-16 left-0  md:w-auto bg-white/10 backdrop-blur-md shadow-lg md:px-[5vw] md:py-[1vw] rounded-[50px] md:p-0 transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
        <li><h1 className="block p-2 cursor-pointer">Home</h1></li>
        <li><h1 className="block p-2 cursor-pointer">About</h1></li>
        <li><h1 className="block p-2 cursor-pointer">Services</h1></li>
        <li><h1 className="block p-2 cursor-pointer">Contact</h1></li>
      </ul>

      <div className="w-[30.3vw]"></div>
    </nav>
  );
}