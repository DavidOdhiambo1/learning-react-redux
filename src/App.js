import {Provider} from 'react-redux'; 
import './App.css';
import PizzaBox from './components/PizzaBox';
import BurgerBox from './components/BurgerBox';
import { store } from './components/redux/store';
import CustomerOrder from './components/CustomerOrder';
import ProductView from './components/ProductView';

function App() {
  return (
    <Provider store={store}>
      <h1>Learning React + Redux</h1>
      {/* <PizzaBox/>
      <BurgerBox/>
      <CustomerOrder/> */}
      <ProductView/>                    
    </Provider>
  );
}

export default App;
