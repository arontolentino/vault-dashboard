import { useState } from 'react';
import Moment from 'react-moment';

export default function ActivityTable() {
  const [transactions] = useState([
    {
      id: 1,
      description: 'Starbucks Cafe',
      employee: 'Ahmed Shafik',
      type: 'Credit',
      location: 'Toronto, ON',
      amount: '$192.03',
      date: '2017-12-14T16:34',
    },
    {
      id: 2,
      description: 'Stripe',
      employee: 'Saud Aziz',
      type: 'Debit',
      location: 'Toronto, ON',
      amount: '$192.03',
      date: '2017-12-14T16:34',
    },
    {
      id: 3,
      description: 'Amazon LLC',
      employee: 'Yisheng Guo',
      type: 'Debit',
      location: 'Seatle, WS',
      amount: '$192.03',
      date: '2017-12-14T16:34',
    },
    {
      id: 4,
      description: 'PayPal SDC',
      employee: 'Aron Tolentino',
      type: 'Credit',
      location: 'Los Angeles, CA',
      amount: '$192.03',
      date: '2017-12-14T16:34',
    },
    {
      id: 5,
      description: 'Vista Print',
      employee: 'Ahmed Shafik',
      type: 'Credit',
      location: 'New York, NY',
      amount: '$192.03',
      date: '2017-12-14T16:34',
    },
    {
      id: 6,
      description: 'TD Canada Trust',
      employee: 'Ahmed Shafik',
      type: 'Transfer',
      location: 'Toronto, ON',
      amount: '$192.03',
      date: '2017-12-14T16:34',
    },
  ]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Description
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Employee
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Type
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Location
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Amount
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <p className="font-semibold">{transaction.description}</p>
                <p>
                  <Moment date={transaction.date} format="LLL" />
                </p>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {transaction.employee}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {transaction.type}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {transaction.location}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {transaction.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
