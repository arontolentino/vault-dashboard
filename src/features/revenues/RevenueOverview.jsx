import { Badge, Card } from '../../components';
import RevenueChart from './components/RevenueChart';

export default function RevenueOverview() {
  return (
    <Card>
      <div className="px-4 py-4 text-center space-y-2.5 sm:px-6">
        <h4 className="text-sm tracking-wide text-gray-400">
          This month's revenue
        </h4>
        <h3 className="text-4xl font-semibold">$93.377.58</h3>

        <Badge color="green">+2.45%</Badge>
      </div>
      <div className="px-1">
        <RevenueChart />
      </div>
    </Card>
  );
}
