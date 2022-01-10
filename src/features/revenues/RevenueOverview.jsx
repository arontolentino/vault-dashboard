import RevenueChart from './components/RevenueChart';

export default function RevenueOverview() {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-4 text-center space-y-2.5 sm:px-6">
        <h4 className="text-sm tracking-wide text-gray-400">
          This month's revenue
        </h4>
        <h3 className="text-4xl font-semibold">$93.377.58</h3>
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
          +2.45%
        </span>
      </div>
      <div className="px-1">
        <RevenueChart />
      </div>
    </div>
  );
}
