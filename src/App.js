import './App.css';
import {useContext} from 'react'
import Home1 from './components/Home1';
import Home2 from './components/Home2';
import { GlobalStyle } from './components/GlobalStyle';
import { themecontext } from './components/themecontext';
function App() {
  const {colors}=useContext(themecontext)
  return (
    <div className="App">
      <GlobalStyle colors={colors} />
      <Home1 />
      <Home2 />
    </div>
  );
}

export default App;
