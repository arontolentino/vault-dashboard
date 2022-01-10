import { useState } from 'react';
import { Card } from '../../components';
import AccountCard from './components/AccountCard';

export default function Accounts() {
  const [accounts] = useState([
    {
      accountId: '004-30290-4039203',
      balance: '$328,291.233',
      currency: 'cad',
    },
    {
      accountId: '004-10283-2738273',
      balance: '$12,302.21',
      currency: 'usd',
    },
    {
      accountId: '004-89092-2930283',
      balance: '$293.92',
      currency: 'cad',
    },
  ]);

  return (
    <Card>
      <div className="px-4 py-4 sm:px-6">
        <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
          <div className="ml-4 mt-2">
            <h3 className="text-base leading-6 text-gray-400">Accounts</h3>
          </div>
          <div className="ml-4 mt-2 flex items-center space-x-4">
            <button className="text-sm px-2 py-2 border border-transparent rounded-md hover:bg-black hover:text-white">
              See Details
            </button>
          </div>
        </div>
      </div>
      <ul className="px-4 pb-4 space-y-4">
        {accounts.map((account) => (
          <AccountCard key={account.accountId} account={account} />
        ))}
      </ul>
    </Card>
  );
}
