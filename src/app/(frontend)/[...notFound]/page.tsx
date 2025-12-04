import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import Link from "next/link";
import "../globals.css";

export default async function NotFound() {
  return (
    <div>
      <Header />
      <section className="w-screen h-screen flex flex-col items-center justify-center gap-10">
        <h1 className="text-5xl lg:text-6xl">Oops..!</h1>
        <h1 className="w-[80vw] text-center text-base md:text-2xl lg:text-3xl">
          We couldn&apos;t find what you were looking for
        </h1>
        <Link href="/">
          <button className="text-xs lg:text-base">Return To Homepage</button>
        </Link>
      </section>
      <Footer />
    </div>
  );
}
