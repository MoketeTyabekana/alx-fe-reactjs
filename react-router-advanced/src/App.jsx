import './App.css';
import { BrowserRouter as Router,Routes, Route, useParams,Switch, Link, useRouteMatch } from 'react-router-dom';
import Profile from './components/Profile';


const BlogPost=()=>{
  const {userId}=useParams();
  return<h3>User ID: {userId}</h3>
}

function App() {
  

  return (
    <Switch>
      <Route path='/blog/:id' Component={BlogPost}/>
    </Switch>
  )
}

export default App;
