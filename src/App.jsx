import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import SlickSlider from './components/SlickSlider';
import ItmContainerOne from './components/ItmContainerOne';
import items from './items.json';
import BestSeller_Container from './components/BestSeller_Container';
import BestSeller_Items from './BestSeller_Items.json';
import HotDeal from './components/HotDeal';
import HotDeal_Container from './components/HotDeal_Container';
import HotDeal_Items from './HotDeal_Items.json';





function App() {

  return ( 
  <div> 
      <Header />
      <SlickSlider />
      <ItmContainerOne items={items} />
      <BestSeller_Container BestSeller_Items={BestSeller_Items} />
      <HotDeal />
      <HotDeal_Container HotDeal_Items={HotDeal_Items} />
      <Footer />
  </div> 
  );
}
export default App;
