import './App.css';
import Home from './components/Home';
import { GlobalStyle } from './components/GlobalStyle';
import {useSelector } from 'react-redux';

function App() {
  const colors=useSelector((state)=>state)
  return (
    <div className="App">
      <GlobalStyle colors={colors} />
      <Home />
    </div>
  );
}

export default App;
