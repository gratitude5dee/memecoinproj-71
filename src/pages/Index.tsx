import { WalletAuth } from "@/components/WalletAuth";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <div className="min-h-screen bg-jatt-darker">
      <Navbar />
      <WalletAuth />
      <Hero />
    </div>
  );
};

export default Index;