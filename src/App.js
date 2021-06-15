import './App.css';
import {useContext} from 'react'
import Home1 from './components/Home1';
import { GlobalStyle } from './components/GlobalStyle';
import { themecontext } from './components/themecontext';
function App() {
  const {colors}=useContext(themecontext)
  return (
    <div className="App">
      <GlobalStyle colors={colors} />
      <Home1 />
    </div>
  );
}

export default App;
