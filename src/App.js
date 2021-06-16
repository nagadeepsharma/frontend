import './App.css';
import {useContext} from 'react'
import Home from './components/Home';
import { GlobalStyle } from './components/GlobalStyle';
import { themecontext } from './components/themecontext';
function App() {
  const {colors}=useContext(themecontext)
  return (
    <div className="App">
      <GlobalStyle colors={colors} />
      <Home />
    </div>
  );
}

export default App;
