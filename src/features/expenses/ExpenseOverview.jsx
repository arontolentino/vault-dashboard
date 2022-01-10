import ExpenseChart from './components/ExpenseChart';

export default function ExpenseOverview() {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-4 text-center space-y-2.5 sm:px-6">
        <h4 className="text-sm tracking-wide text-gray-400">
          This month's spending
        </h4>
        <h3 className="text-4xl font-semibold">$33,682.92</h3>
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
          +8.33%
        </span>
      </div>
      <div className="px-1">
        <ExpenseChart />
      </div>
    </div>
  );
}
