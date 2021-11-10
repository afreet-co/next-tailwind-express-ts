import "../styles/global.css";
import type { AppProps /*, AppContext */ } from "next/app";
import { Navbar } from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-screen h-screen md:py-auto overflow-auto  bg-blue-50 text-black">
      <Navbar />
      <main className="max-w-6xl mx-auto pt-14">
        <div className="flex justify-center space-x-4 pt-4 pb-14">
          <Component {...pageProps} />
        </div>
      </main>
    </div>
  );
}

export default MyApp;
