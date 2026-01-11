import {Provider} from 'react-redux'; 
import './App.css';
import PizzaBox from './components/PizzaBox';
import BurgerBox from './components/BurgerBox';
import { store } from './components/redux/store';

function App() {
  return (
    <Provider store={store}>
      <h1>Learning React + Redux</h1>
      <PizzaBox/>
      <BurgerBox/>
    </Provider>
  );
}

export default App;
