import React from 'react';
import Layout from './components/Layout';
import { Activity, Box, Clock, Users } from 'lucide-react';

function App() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Active Projects"
            value="12"
            icon={<Activity className="w-6 h-6 text-blue-600" />}
            trend="+2.5%"
          />
          <StatCard
            title="Pending Changes"
            value="28"
            icon={<Clock className="w-6 h-6 text-yellow-600" />}
            trend="+5.0%"
          />
          <StatCard
            title="Total Products"
            value="45"
            icon={<Box className="w-6 h-6 text-green-600" />}
            trend="+1.2%"
          />
          <StatCard
            title="Team Members"
            value="32"
            icon={<Users className="w-6 h-6 text-purple-600" />}
            trend="+3.1%"
          />
        </div>

        {/* Recent Activity */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold">Recent Changes</h2>
            </div>
            <div className="p-4">
              <ActivityItem
                title="Drone Model X-1000 Update"
                description="New firmware version released"
                time="2 hours ago"
                status="completed"
              />
              <ActivityItem
                title="Maintenance Schedule"
                description="Updated maintenance protocol for Q2"
                time="5 hours ago"
                status="in-progress"
              />
              <ActivityItem
                title="Design Review"
                description="Propeller optimization review"
                time="1 day ago"
                status="pending"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold">Upcoming Tasks</h2>
            </div>
            <div className="p-4">
              <TaskItem
                title="Design Review Meeting"
                description="Review new propeller design specifications"
                dueDate="Tomorrow, 10:00 AM"
                priority="high"
              />
              <TaskItem
                title="Documentation Update"
                description="Update technical documentation for Model Y-500"
                dueDate="Friday, 2:00 PM"
                priority="medium"
              />
              <TaskItem
                title="Maintenance Check"
                description="Routine inspection of test units"
                dueDate="Next Week"
                priority="low"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: string;
}

function StatCard({ title, value, icon, trend }: StatCardProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        {icon}
      </div>
      <div className="mt-2">
        <span className="text-sm text-green-600">{trend}</span>
        <span className="text-sm text-gray-500"> vs last month</span>
      </div>
    </div>
  );
}

interface ActivityItemProps {
  title: string;
  description: string;
  time: string;
  status: 'completed' | 'in-progress' | 'pending';
}

function ActivityItem({ title, description, time, status }: ActivityItemProps) {
  const statusColors = {
    completed: 'bg-green-100 text-green-800',
    'in-progress': 'bg-yellow-100 text-yellow-800',
    pending: 'bg-gray-100 text-gray-800',
  };

  return (
    <div className="py-3 border-b last:border-0">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <span className={`px-2 py-1 text-xs rounded-full ${statusColors[status]}`}>
          {status}
        </span>
      </div>
      <p className="text-xs text-gray-400 mt-1">{time}</p>
    </div>
  );
}

interface TaskItemProps {
  title: string;
  description: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
}

function TaskItem({ title, description, dueDate, priority }: TaskItemProps) {
  const priorityColors = {
    high: 'bg-red-100 text-red-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-green-100 text-green-800',
  };

  return (
    <div className="py-3 border-b last:border-0">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <span className={`px-2 py-1 text-xs rounded-full ${priorityColors[priority]}`}>
          {priority}
        </span>
      </div>
      <p className="text-xs text-gray-400 mt-1">{dueDate}</p>
    </div>
  );
}

export default App;