import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Rules from "@/components/Rules";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Featured />
      <Promo />
      <Rules />
      <Footer />
    </main>
  );
};

export default Index;
