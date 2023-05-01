import './App.css';

//components

import Profile from './components/profile';
import UserList from './components/usersList';

//CONTEXT
import UserState from './context/User/UserState';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <UserState>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <UserList />
          </div>
          <div className="col-md-5">
            <Profile />
          </div>
        </div>
      </div>
    </UserState>
  );
}

export default App;
