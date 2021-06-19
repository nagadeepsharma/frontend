import './App.css';
import Home from './components/Home';
import { GlobalStyle } from './components/GlobalStyle';
import {useSelector } from 'react-redux';
import { BrowserRouter,Redirect,Route,Switch } from 'react-router-dom';
import Blogs from './components/blogcomponents/Blogs';
import Detailblog from './components/blogcomponents/Detailblog';

function App() {
  const colors=useSelector((state)=>state.themes)
  return (
    <div className="App">
      <GlobalStyle colors={colors} />
      <BrowserRouter>
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/blogs' exact component={Blogs} />
      <Route path="/blogs/:id" exact component={Detailblog} />
      <Route component={()=><Redirect to='/' />} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
