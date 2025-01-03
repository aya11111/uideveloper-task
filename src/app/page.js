import SideBar from "./components/sidebar/SideBar";
import Header from "./components/sidebar/header/Header";
import Payment from "./components/payment/Payment";
import Footer from "./components/footer/Footer";
export default function Home() {
  return (
    <div>
      <div className="layout">
        <div className="flex   justify-between items-center">
          <SideBar />
          <Header />
        </div>
        
          
        <Payment />
        <Footer />
        
      </div>
      
      
    </div>
          
  );
}
