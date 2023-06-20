import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import userData from 'data/user.json';
import statsData from 'data/data.json';
import friendsData from 'data/friends.json';
import transactionsData from 'data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile {...userData} />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendsList friends={friendsData} />
      <TransactionHistory transactions={transactionsData} />
    </>
  );
};
