import React, { useState } from 'react';
import './App.scss';
import CardWrapper from '../card-wrapper/CardWrapper';
import ProfileForm from '../profile-form/ProfileForm';
import User from '../../interfaces/user';

const App: React.FC = () => {
  const [users, setUsers] = useState<Array<User>>([]);

  function addUser(user: User) {
    const newUserArray = [...users];

    newUserArray.push(user);
    setUsers(newUserArray);
  }

  return (
    <div className="App container">
      <ProfileForm addUserHandler={addUser} />
      <CardWrapper items={users} />
    </div>
  );
};

export default App;
