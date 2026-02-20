import { Settings, Users, Bell, Database, BarChart2, Shield, Server, Activity } from 'lucide-react';

export default function Admin() {
  const systemStats = [
    { label: 'Total Users', value: '12,847', change: '+234', icon: Users, color: 'from-blue-400 to-blue-600' },
    { label: 'Active Reports', value: '342', change: '+45', icon: Bell, color: 'from-orange-400 to-orange-600' },
    { label: 'AI Predictions', value: '1,289', change: '+89', icon: Activity, color: 'from-purple-400 to-purple-600' },
    { label: 'Database Size', value: '2.4 GB', change: '+120 MB', icon: Database, color: 'from-green-400 to-green-600' },
  ];

  const recentUsers = [
    { name: 'Ahmad Rizki', email: 'ahmad@email.com', role: 'Admin', status: 'active', joined: '2024-01-15' },
    { name: 'Siti Nurhaliza', email: 'siti@email.com', role: 'Moderator', status: 'active', joined: '2024-01-20' },
    { name: 'Budi Santoso', email: 'budi@email.com', role: 'User', status: 'active', joined: '2024-02-01' },
    { name: 'Dewi Lestari', email: 'dewi@email.com', role: 'User', status: 'inactive', joined: '2024-02-10' },
  ];

  const systemLogs = [
    { time: '10:45:32', type: 'info', message: 'New disaster report submitted from Jakarta' },
    { time: '10:42:18', type: 'warning', message: 'High CPU usage detected on sensor network' },
    { time: '10:38:55', type: 'success', message: 'AI model training completed successfully' },
    { time: '10:35:20', type: 'error', message: 'Failed to connect to weather API endpoint' },
    { time: '10:30:12', type: 'info', message: 'Database backup completed' },
  ];

  const getLogColor = (type: string) => {
    switch (type) {
      case 'error': return 'border-red-500 bg-red-50';
      case 'warning': return 'border-yellow-500 bg-yellow-50';
      case 'success': return 'border-green-500 bg-green-50';
      default: return 'border-blue-500 bg-blue-50';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Settings size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Admin Panel</h1>
                <p className="text-gray-600">System management & configuration</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-green-700">System Operational</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {systemStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-2 border-purple-100 hover:shadow-xl transition-all">
                <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon size={28} className="text-white" />
                </div>
                <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-xs text-green-600 font-semibold">{stat.change} this week</div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-purple-100 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Users size={20} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">User Management</h2>
                    <p className="text-sm text-gray-500">Manage system users and roles</p>
                  </div>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors text-sm">
                  Add User
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Name</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Email</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Role</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentUsers.map((user, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4">
                          <div className="font-semibold text-gray-800">{user.name}</div>
                          <div className="text-xs text-gray-500">Joined: {user.joined}</div>
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-600">{user.email}</td>
                        <td className="py-4 px-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            user.role === 'Admin' ? 'bg-purple-100 text-purple-700' :
                            user.role === 'Moderator' ? 'bg-blue-100 text-blue-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            user.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                          }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-orange-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Server size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">System Logs</h2>
                  <p className="text-sm text-gray-500">Real-time system activities</p>
                </div>
              </div>

              <div className="space-y-3">
                {systemLogs.map((log, index) => (
                  <div
                    key={index}
                    className={`border-l-4 ${getLogColor(log.type)} p-4 rounded-r-lg`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="text-sm text-gray-800 font-medium">{log.message}</div>
                        <div className="text-xs text-gray-500 mt-1">Time: {log.time}</div>
                      </div>
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${
                        log.type === 'error' ? 'bg-red-100 text-red-700' :
                        log.type === 'warning' ? 'bg-yellow-100 text-yellow-700' :
                        log.type === 'success' ? 'bg-green-100 text-green-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {log.type.toUpperCase()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition-colors">
                View Full Logs
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl shadow-xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg">
                  <BarChart2 size={24} className="text-purple-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Analytics</h3>
                  <p className="text-sm text-purple-200">System performance</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-sm text-purple-200 mb-2">API Response Time</div>
                  <div className="text-3xl font-bold mb-2">127ms</div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-sm text-purple-200 mb-2">Server Uptime</div>
                  <div className="text-3xl font-bold mb-2">99.9%</div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full" style={{ width: '99%' }}></div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-sm text-purple-200 mb-2">AI Model Accuracy</div>
                  <div className="text-3xl font-bold mb-2">94.3%</div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '94%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-green-100">
              <div className="flex items-center space-x-3 mb-4">
                <Shield size={24} className="text-green-600" />
                <h3 className="text-lg font-bold text-gray-800">Security</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">SSL Certificate</span>
                  <span className="text-xs font-semibold text-green-600">Valid</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Firewall</span>
                  <span className="text-xs font-semibold text-green-600">Active</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">DDoS Protection</span>
                  <span className="text-xs font-semibold text-yellow-600">Monitoring</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Data Encryption</span>
                  <span className="text-xs font-semibold text-green-600">Enabled</span>
                </div>
              </div>

              <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors">
                Security Settings
              </button>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Database size={24} />
                <h3 className="text-lg font-bold">Database</h3>
              </div>

              <div className="space-y-3 text-sm">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
                  <div className="flex items-center justify-between mb-1">
                    <span>Storage Used</span>
                    <span className="font-bold">2.4 GB</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-yellow-300 h-2 rounded-full" style={{ width: '48%' }}></div>
                  </div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
                  <div className="flex items-center justify-between">
                    <span>Last Backup</span>
                    <span className="font-bold">2 hours ago</span>
                  </div>
                </div>
                <button className="w-full bg-white text-red-600 font-semibold py-3 rounded-lg hover:bg-red-50 transition-colors mt-2">
                  Backup Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
