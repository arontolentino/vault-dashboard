import React from 'react';

import { Layout } from '../../layout';
import { RecentActivity } from '../activity';
import { Accounts } from '../accounts';
import { ActionButtons } from '../actions';
import { ExpenseOverview } from '../expenses';
import RevenueOverview from '../revenues/RevenueOverview';

const Dashboard = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:gap-6 lg:grid-cols-4">
        {/* Account List */}
        <div className="col-span-1 mb-6 ">
          <div className="flex flex-col-reverse lg:flex-col space-y-3">
            <Accounts />
            <ActionButtons />
          </div>
        </div>
        <div className="col-span-3 overflow-hidden space-y-4">
          <div className="grid grid cols-1 lg:gap-6 lg:grid-cols-2">
            {/* Monthly Earnings */}
            <div className="col-span-1">
              <RevenueOverview />
            </div>
            {/* Monthly Spending */}
            <div className="col-span-1">
              <ExpenseOverview />
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <RecentActivity />
          </div>
        </div>
      </div>

      {/* Accounts */}
    </Layout>
  );
};

export default Dashboard;
