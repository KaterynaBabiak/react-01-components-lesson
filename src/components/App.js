import { FriendList } from "./FriendList/FriendList";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { Transactions } from "./Transactions/Transactions";
import transactionsItems from './transactions.json'

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics />
      <FriendList />
      <Transactions items={transactionsItems} />
    </div>
  );
};
