import './App.css';
import { BrowserRouter as Router,Routes, Route, Switch, Link, useRouteMatch } from 'react-router-dom';
import Profile from './components/Profile';


const BlogPost=()=>{
  
}

function App() {
  

  return (
    <Switch>
      <Route path='/' Component={BlogPost}/>
    </Switch>
  )
}

export default App;
