import { Profile } from './Profile/Profile';
import userData from 'data/user.json';

export const App = () => {
  return (
    <>
      <Profile {...userData} />
    </>
  );
};
