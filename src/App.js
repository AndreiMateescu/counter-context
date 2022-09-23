import Counter from "./components/counter/Counter";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import { CountProvider } from "./Context/CountProvider";

function App() {
  return (
    <CountProvider>
      <br />
      <Header />
      <br />
      <Counter />
      <br />
      <Footer />
      <br />
    </CountProvider>
  );
}

export default App;
