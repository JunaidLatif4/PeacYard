import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Router from './routes/Router';

function App() {
  return (
    <>
    <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </>
  );
}

export default App;
