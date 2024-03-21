import { Home } from './pages/home';
import { Footer } from './cmps/footer';
import { Header } from './cmps/header';

export const App = () => {
  return (
    <div className="app">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}
