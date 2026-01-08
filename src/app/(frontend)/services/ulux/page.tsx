import "../../globals.css";
import PageScroll from "@/src/components/services/ulux/PageScroll";
import Header from "@/src/components/services/ulux/Header";

export default async function UluxPage() {
  return (
    <div>
      <div className="relative">
        <Header />
        <PageScroll />
      </div>
    </div>
  );
}
