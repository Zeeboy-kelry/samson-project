import { Link } from "react-router-dom";
import Image from "../assets/AI.png";
import Image2 from "../assets/language.png";
import Image3 from "../assets/image.jpg"

export default function Home() {
  return (
    <main className="grid lg:flex min-h-screen flex-col items-center lg:justify-between py-28 px-3 lg:px-20">
      
      {/* Top Bar */}
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Link className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started with Sampic&nbsp;
        </Link>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Link
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            to="/"
          >
            By{" "}
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              Samson
            </p>
          </Link>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>

      {/* Grid Layout */}
      <div className="mb-32 grid gap-5 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        
        {/* Image Genereator */}
        <div className="grid gap-3">
          <div className="flex justify-center items-center bg-slate-50 h-56 w-full rounded-lg shadow-lg">
            <img
              className=""
              src={Image3}
              alt="Logo"
              width={180}
              height={37}
            />
          </div>
          <Link to="/image-generator" className="flex justify-center w-full outline-none border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Image Generator
          </Link>
        </div>

      {/* Language generator */}
        <div className="grid gap-3">
          <div className="flex justify-center items-center bg-slate-50 h-56 w-full rounded-lg shadow-lg">
            <img
              className=""
              src={Image2}
              alt="Logo"
              width={180}
              height={37}
            />
          </div>
          <Link to="/translator" className="flex justify-center w-full outline-none border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Language Translator
          </Link>
        </div>

        {/* AI image */}
        <div className="grid gap-3">
          <div className="flex justify-center items-center bg-slate-50 h-56 w-full rounded-lg shadow-lg">
            <img
              className=""
              src={Image}
              alt="Logo"
              width={180}
              height={37}
            />
          </div>
          <Link to="/chatgpt" className="flex justify-center w-full outline-none border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            SamAI
          </Link>
        </div>
      </div>
    </main>
  );
}
