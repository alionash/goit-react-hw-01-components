import user from "./profile/user.json";
import { Profile } from "./profile/profile.jsx";
import data from './statistics/data.json';
import { Statistics } from "./statistics/statistics.jsx";
import friends from "./friendsList/friends.json";
import { FriendsList } from "./friendsList/friends.jsx";
import transactions from "./transactions/transactions.json";
import { TransactionHistory } from "./transactions/transactions.jsx";




export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 20,
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />

      <FriendsList friends={friends} />
      
      <TransactionHistory items ={transactions} />
    </div>
  );
};



