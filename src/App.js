import './App.css';
import {useContext} from 'react'
import Home1 from './components/Home1';
import Home2 from './components/Home2';
import Home3 from './components/Home3';
import Home4 from './components/Home4';
import Home5 from './components/Home5';
import Home6 from './components/Home6';
import { GlobalStyle } from './components/GlobalStyle';
import { themecontext } from './components/themecontext';
function App() {
  const {colors}=useContext(themecontext)
  return (
    <div className="App">
      <GlobalStyle colors={colors} />
      <Home1 />
      <Home2 />
      <Home3 />
      <Home4 />
      <Home5 />
      <Home6 />
    </div>
  );
}

export default App;
