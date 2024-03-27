import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle,
        AiFillLinkedin,
      AiFillYoutube,
    }from "react-icons/ai";
import Image from '';
import vite from '../public/vite.svg'
    
export default function App() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-2xl">DEVELOPEDBYED</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
            </li>
            <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">Marcos Tullio</h2>
          <h3 className="text-2xl py-2">Developer and engineer</h3>
          <p className="text-md py-5 leading-8 text-gray-800">
            Aprendendo a programar prendendo a programar prendendo a programar
            prendendo a programar prendendo a programar prendendo a programar
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-500">
          <AiFillTwitterCircle/>
          <AiFillLinkedin/>
          <AiFillYoutube/>
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-">
            <img src={vite}/>
        </div>
      </section>
      
      <section>
        <div>
          <h3 className="text-3xl py-1">Services I offer</h3>
          <p></p>
        </div>
      </section>
    </main>
  );
}