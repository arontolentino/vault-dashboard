import { Badge, Card } from '../../components';
import ExpenseChart from './components/ExpenseChart';

export default function ExpenseOverview() {
  return (
    <Card>
      <div className="px-4 py-4 text-center space-y-2.5 sm:px-6">
        <h4 className="text-sm tracking-wide text-gray-400">
          This month's spending
        </h4>
        <h3 className="text-4xl font-semibold">$33,682.92</h3>

        <Badge color="purple">+8.33</Badge>
      </div>
      <div className="px-1">
        <ExpenseChart />
      </div>
    </Card>
  );
}
