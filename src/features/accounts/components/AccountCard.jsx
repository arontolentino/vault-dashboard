export default function AccountCard({ account }) {
  return (
    <li className="px-4 py-4 rounded-lg bg-gray-50 space-y-2">
      <p className="text-2xl">
        {account.balance}
        <span className="ml-1 text-base font-extralight uppercase">
          {account.currency}
        </span>
      </p>
      <p className="text-xs">{account.accountId}</p>
    </li>
  );
}
