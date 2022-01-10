import { DownloadIcon } from '@heroicons/react/outline';
import ActivityTable from './components/ActivityTable';

export default function RecentActivity() {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-4 sm:px-6">
        <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
          <div className="ml-4 mt-2">
            <h3 className="text-base leading-6 text-gray-400">
              Recent Activities
            </h3>
          </div>
          <div className="ml-4 mt-2 flex items-center space-x-4">
            <button className="text-sm px-2 py-2 border border-transparent rounded-md hover:bg-black hover:text-white">
              See all transactions
            </button>
            <button
              type="button"
              className="relative inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md bg-gray-200 hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <DownloadIcon className="h-5 w-5 " />
            </button>
          </div>
        </div>
      </div>
      <div className="px-4 py-4">
        <ActivityTable />
      </div>
    </div>
  );
}
