import React, { useState } from 'react';
import './App.scss';
import CardWrapper from '../card-wrapper/CardWrapper';
import ProfileForm from '../profile-form/ProfileForm';
import { User } from '../../interfaces';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  return (
    <div className="App container">
      <ProfileForm
        addUser={(user: User) => {
          setUsers([...users, user]);
        }}
      />
      <CardWrapper items={users} />
    </div>
  );
};

export default App;
