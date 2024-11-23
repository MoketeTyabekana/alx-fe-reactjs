import { BrowserRouter as Router,Routes, Route, Switch, Link, useRouteMatch } from 'react-router-dom';

const ProfileDetails  = () => <h3>Profile</h3>;
const ProfileSettings = () => <h3>Settings</h3>;

export default function Profile(){
   <Router>
    <div>
        <nav>
            <Link to='/Profile Details'>ProfileDetails</Link>
            <Link to='/Profile Details'>ProfileSettings</Link>
        </nav>
        
    </div>
   </Router>

}