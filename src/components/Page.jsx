import { Layout } from '../layout';
import Card from './Card';

export default function Page({ title }) {
  return (
    <Layout>
      <Card>
        <div className="md:flex md:items-center md:justify-between px-6 py-6">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              {title}
            </h2>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 rounded-md shadow-sm text-sm font-medium bg-gray-200 hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              View
            </button>
          </div>
        </div>
      </Card>
    </Layout>
  );
}
