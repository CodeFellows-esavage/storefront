import './App.css';
import { Provider } from 'react-redux';
import createReduxStore from './store';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Categories from './components/storefront/Categories';
import Products from './components/storefront/Products';

const store = createReduxStore();

function App() {
  return (
    <Provider store={store}>
      <Header />
      <section className="App-header">
        <h1>STORE FRONT!</h1>
      </section>
      <Categories />
      <Products />
      <Footer />
    </Provider>
  );
}

export default App;
