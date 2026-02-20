import { Cloud, Droplets, Wind, Thermometer, AlertCircle, Activity, Radio, Satellite } from 'lucide-react';
import { weatherData, predictionData } from '../data/mockData';

export default function Dashboard() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'danger': return 'bg-red-500';
      case 'warning': return 'bg-yellow-500';
      case 'safe': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'danger': return 'Bahaya';
      case 'warning': return 'Waspada';
      case 'safe': return 'Aman';
      default: return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
              <Activity size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Dashboard Monitoring</h1>
              <p className="text-gray-600">Real-time weather & sensor analytics</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            { icon: Thermometer, label: 'Suhu Rata-rata', value: '29.5°C', color: 'from-orange-400 to-red-500', change: '+2.3°' },
            { icon: Droplets, label: 'Kelembaban', value: '76%', color: 'from-blue-400 to-cyan-500', change: '+5%' },
            { icon: Cloud, label: 'Curah Hujan', value: '45mm', color: 'from-indigo-400 to-blue-500', change: '+12mm' },
            { icon: Wind, label: 'Kec. Angin', value: '18 km/h', color: 'from-teal-400 to-green-500', change: '-3 km/h' },
          ].map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-100 hover:shadow-xl transition-all">
                <div className={`w-14 h-14 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon size={28} className="text-white" />
                </div>
                <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{metric.value}</div>
                <div className="text-xs text-green-600 font-semibold">{metric.change} dari kemarin</div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-blue-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                    <Cloud size={20} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Monitoring Cuaca Regional</h2>
                    <p className="text-sm text-gray-500">Data dari 6 provinsi utama</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Satellite size={18} className="text-blue-600" />
                  <span className="text-sm font-semibold text-blue-600">LIVE SENSOR</span>
                </div>
              </div>

              <div className="space-y-4">
                {weatherData.map((data, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-5 border-2 border-gray-200 hover:border-blue-300 transition-all"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">🌍</div>
                        <div>
                          <div className="font-bold text-gray-800 text-lg">{data.province}</div>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className={`w-2 h-2 ${getStatusColor(data.status)} rounded-full`}></div>
                            <span className="text-xs font-semibold text-gray-600">
                              Status: {getStatusText(data.status)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="flex items-center space-x-2 mb-2">
                          <Thermometer size={16} className="text-orange-500" />
                          <span className="text-xs text-gray-600">Suhu</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-800">{data.temp}°C</div>
                      </div>

                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="flex items-center space-x-2 mb-2">
                          <Droplets size={16} className="text-blue-500" />
                          <span className="text-xs text-gray-600">Lembab</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-800">{data.humidity}%</div>
                      </div>

                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="flex items-center space-x-2 mb-2">
                          <Cloud size={16} className="text-cyan-500" />
                          <span className="text-xs text-gray-600">Hujan</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-800">{data.rainfall}mm</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center shadow-lg">
                  <Radio size={24} className="text-blue-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Status Sensor</h3>
                  <p className="text-sm text-blue-200">Network monitoring</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { name: 'Seismograf', status: 'online', count: 247 },
                  { name: 'Rain Gauge', status: 'online', count: 189 },
                  { name: 'Weather Station', status: 'online', count: 156 },
                  { name: 'CCTV Hotspot', status: 'warning', count: 134 },
                  { name: 'Water Level', status: 'online', count: 98 },
                ].map((sensor, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${sensor.status === 'online' ? 'bg-green-400' : 'bg-yellow-400'} animate-pulse`}></div>
                        <div>
                          <div className="font-semibold">{sensor.name}</div>
                          <div className="text-xs text-blue-200">{sensor.count} unit aktif</div>
                        </div>
                      </div>
                      <div className="text-sm font-bold">{sensor.status === 'online' ? '100%' : '98%'}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-orange-100">
              <div className="flex items-center space-x-3 mb-4">
                <AlertCircle size={24} className="text-orange-500" />
                <h3 className="text-lg font-bold text-gray-800">Sistem Alert</h3>
              </div>

              <div className="space-y-3">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <div className="font-semibold text-red-800 text-sm">Critical Alert</div>
                  <div className="text-xs text-red-700 mt-1">2 sensor offline di Sumatera</div>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                  <div className="font-semibold text-yellow-800 text-sm">Warning</div>
                  <div className="text-xs text-yellow-700 mt-1">Hujan tinggi terdeteksi</div>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <div className="font-semibold text-green-800 text-sm">System OK</div>
                  <div className="text-xs text-green-700 mt-1">Semua sistem berjalan normal</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-purple-100">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Activity size={20} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Prediksi ML & Rekomendasi</h2>
              <p className="text-sm text-gray-500">AI-powered disaster prediction</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {predictionData.map((prediction, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 border-2 border-purple-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">
                    {prediction.disaster === 'Banjir' ? '🌊' : prediction.disaster === 'Gempa Bumi' ? '🌋' : '🔥'}
                  </div>
                  <div className="text-3xl font-bold text-purple-700">{prediction.probability}%</div>
                </div>
                <div className="font-bold text-gray-800 mb-1">{prediction.disaster}</div>
                <div className="text-sm text-gray-600 mb-3">{prediction.location}</div>
                <div className="w-full bg-purple-200 rounded-full h-2 mb-3">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                    style={{ width: `${prediction.probability}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-700 mb-2">
                  <span className="font-semibold">Timeframe:</span> {prediction.timeframe}
                </div>
                <div className="bg-white rounded-lg p-3 text-xs text-gray-700 mt-3">
                  <span className="font-semibold">Rekomendasi:</span> {prediction.recommendation}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
