import './App.css';

//components

import Profile from './components/profile';
import UserList from './components/usersList';

//CONTEXT
import UserState from './context/User/UserState';


function App() {
  return (
    <UserState>
      <Profile />
      <UserList />
    </UserState>
  );
}

export default App;
