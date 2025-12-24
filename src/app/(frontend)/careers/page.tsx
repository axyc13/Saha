import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import Hero from "@/src/components/careers/Hero";
import SearchBar from "@/src/components/careers/SearchBar";
import "../globals.css";

export default async function CareersPage() {
  return (
    <div>
      <Header />
      <Hero />
      <SearchBar />
      <Footer />
    </div>
  );
}
