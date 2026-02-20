import { Activity, AlertTriangle, Bell, Clock, Droplets, Flame, MapPin, Mountain, TrendingUp } from 'lucide-react';
import { recentDisasters, statistics } from '../data/mockData';

export default function Home() {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getSeverityBorder = (severity: string) => {
    switch (severity) {
      case 'critical': return 'border-red-500';
      case 'high': return 'border-orange-500';
      case 'medium': return 'border-yellow-500';
      case 'low': return 'border-green-500';
      default: return 'border-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-red-500 px-4 py-2 rounded-full mb-4 shadow-lg">
              <Bell className="animate-pulse" size={20} />
              <span className="font-semibold text-sm">SISTEM PERINGATAN DINI AKTIF</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              Sistem Kesiapsiagaan
              <br />
              <span className="text-yellow-300">Bencana</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Monitoring real-time, prediksi akurat, dan respons cepat untuk melindungi Indonesia dari bencana
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Activity, label: 'Gempa Bumi', count: statistics.earthquakes, color: 'from-orange-400 to-red-500' },
              { icon: Droplets, label: 'Banjir', count: statistics.floods, color: 'from-blue-400 to-cyan-500' },
              { icon: Flame, label: 'Kebakaran', count: statistics.fires, color: 'from-red-400 to-orange-500' },
              { icon: Mountain, label: 'Longsor', count: statistics.landslides, color: 'from-yellow-600 to-orange-600' },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mb-3 shadow-lg`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-1">{stat.count}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  <div className="text-xs text-gray-500 mt-2">Hari ini</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Peta Interaktif Indonesia</h2>
                    <p className="text-sm text-gray-500">Real-time disaster monitoring</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold">LIVE</span>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl h-96 overflow-hidden border-4 border-blue-100 shadow-inner">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <div className="text-lg font-semibold text-gray-700 mb-2">Peta Indonesia</div>
                    <div className="text-sm text-gray-500">Interactive disaster mapping system</div>
                  </div>
                </div>

                {recentDisasters.map((disaster, index) => (
                  <div
                    key={disaster.id}
                    className={`absolute bg-white rounded-lg shadow-lg p-3 border-2 ${getSeverityBorder(disaster.severity)} animate-pulse`}
                    style={{
                      top: `${20 + index * 18}%`,
                      left: `${15 + index * 20}%`,
                      animation: `pulse 2s infinite ${index * 0.3}s`,
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 ${getSeverityColor(disaster.severity)} rounded-full`}></div>
                      <div className="text-xs font-semibold text-gray-800">{disaster.location}</div>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">{disaster.type}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                <div className="flex items-center space-x-2 bg-red-50 px-3 py-2 rounded-lg">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-xs font-medium text-gray-700">Critical</span>
                </div>
                <div className="flex items-center space-x-2 bg-orange-50 px-3 py-2 rounded-lg">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-xs font-medium text-gray-700">High</span>
                </div>
                <div className="flex items-center space-x-2 bg-yellow-50 px-3 py-2 rounded-lg">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-xs font-medium text-gray-700">Medium</span>
                </div>
                <div className="flex items-center space-x-2 bg-green-50 px-3 py-2 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-xs font-medium text-gray-700">Low</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center shadow-lg">
                  <TrendingUp size={24} className="text-blue-900" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Prediksi AI Machine Learning</h2>
                  <p className="text-blue-200 text-sm">Analisis prediktif berbasis neural network</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                  <div className="text-sm text-blue-200 mb-2">Probabilitas Banjir Jakarta</div>
                  <div className="text-4xl font-bold mb-3">85%</div>
                  <div className="w-full bg-white/20 rounded-full h-3 mb-3">
                    <div className="bg-yellow-400 h-3 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <div className="text-xs text-blue-200">Prediksi: 24-48 jam ke depan</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                  <div className="text-sm text-blue-200 mb-2">Risiko Kebakaran Riau</div>
                  <div className="text-4xl font-bold mb-3">78%</div>
                  <div className="w-full bg-white/20 rounded-full h-3 mb-3">
                    <div className="bg-orange-400 h-3 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                  <div className="text-xs text-blue-200">Prediksi: 3-5 hari ke depan</div>
                </div>
              </div>

              <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-start space-x-3">
                  <AlertTriangle size={20} className="text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Rekomendasi AI</div>
                    <div className="text-sm text-blue-100">
                      Aktivasi sistem peringatan dini untuk wilayah Jakarta dan sekitarnya.
                      Siapkan jalur evakuasi dan koordinasi dengan tim respons cepat.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-bold text-gray-800">Peringatan Terkini</h3>
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>

              <div className="space-y-4">
                {recentDisasters.map((disaster) => (
                  <div
                    key={disaster.id}
                    className={`border-l-4 ${getSeverityBorder(disaster.severity)} bg-gray-50 p-4 rounded-r-xl hover:shadow-md transition-shadow`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="font-semibold text-gray-800">{disaster.type}</div>
                      <div className={`w-2 h-2 ${getSeverityColor(disaster.severity)} rounded-full mt-1`}></div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                      <MapPin size={14} />
                      <span>{disaster.location}</span>
                    </div>
                    <div className="text-sm text-gray-700 mb-2">{disaster.description}</div>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <Clock size={12} />
                      <span>{disaster.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-lg">
                Lihat Semua Peringatan
              </button>
            </div>

            <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-2xl shadow-xl p-6 text-white">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <span className="text-3xl">📸</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Lapor Kejadian</h3>
                <p className="text-sm text-red-100">AI Image Recognition</p>
              </div>
              <button className="w-full bg-white text-red-600 font-bold py-3 rounded-lg hover:bg-red-50 transition-colors shadow-lg">
                Upload Foto & Lapor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
