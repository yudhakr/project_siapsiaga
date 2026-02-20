import { Camera, Upload, MapPin, Calendar, FileText, CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

export default function Reports() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const recentReports = [
    {
      id: 'R001',
      type: 'Banjir',
      location: 'Jakarta Pusat',
      reporter: 'Ahmad Rizki',
      status: 'verified',
      time: '10 menit lalu',
      confidence: 95,
    },
    {
      id: 'R002',
      type: 'Kebakaran',
      location: 'Bandung Utara',
      reporter: 'Siti Nurhaliza',
      status: 'processing',
      time: '25 menit lalu',
      confidence: 88,
    },
    {
      id: 'R003',
      type: 'Tanah Longsor',
      location: 'Bogor Selatan',
      reporter: 'Budi Santoso',
      status: 'verified',
      time: '1 jam lalu',
      confidence: 92,
    },
  ];

  const handleFileSelect = () => {
    setSelectedFile('sample-disaster.jpg');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <Camera size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Laporan Kejadian</h1>
              <p className="text-gray-600">AI-powered incident reporting system</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-red-100 mb-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Upload size={36} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Upload Foto Kejadian</h2>
                <p className="text-gray-600">AI akan menganalisis gambar secara otomatis</p>
              </div>

              <div className="border-4 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-red-400 transition-all bg-gray-50 mb-6">
                {!selectedFile ? (
                  <div>
                    <div className="text-6xl mb-4">📸</div>
                    <div className="text-lg font-semibold text-gray-700 mb-2">
                      Klik atau drag & drop gambar
                    </div>
                    <div className="text-sm text-gray-500 mb-4">PNG, JPG, JPEG (Max 10MB)</div>
                    <button
                      onClick={handleFileSelect}
                      className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-lg"
                    >
                      Pilih Gambar
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="text-6xl mb-4">✅</div>
                    <div className="text-lg font-semibold text-gray-700">Gambar berhasil diupload</div>
                    <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                      <div className="flex items-center justify-center space-x-3 mb-4">
                        <div className="animate-spin w-6 h-6 border-3 border-blue-600 border-t-transparent rounded-full"></div>
                        <span className="font-semibold text-blue-700">AI sedang menganalisis...</span>
                      </div>
                      <div className="w-full bg-blue-200 rounded-full h-3">
                        <div className="bg-blue-600 h-3 rounded-full animate-pulse" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {selectedFile && (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 mb-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle size={32} className="text-green-600 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">Hasil Analisis AI</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="text-sm text-gray-600 mb-1">Jenis Bencana</div>
                          <div className="text-xl font-bold text-gray-800">Banjir</div>
                          <div className="text-xs text-green-600 mt-1">Confidence: 94%</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="text-sm text-gray-600 mb-1">Tingkat Keparahan</div>
                          <div className="text-xl font-bold text-orange-600">Sedang</div>
                          <div className="text-xs text-gray-600 mt-1">Level: 6/10</div>
                        </div>
                      </div>
                      <div className="mt-4 bg-white rounded-lg p-4 shadow-sm">
                        <div className="text-sm text-gray-600 mb-2">Deteksi Objek:</div>
                        <div className="flex flex-wrap gap-2">
                          {['Air Tinggi', 'Kendaraan Terendam', 'Jalan Tergenang', 'Pohon Tumbang'].map((obj, i) => (
                            <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                              {obj}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Lokasi Kejadian</label>
                  <div className="relative">
                    <MapPin size={20} className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Masukkan lokasi..."
                      className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Deskripsi Tambahan</label>
                  <textarea
                    rows={4}
                    placeholder="Jelaskan situasi kejadian..."
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none resize-none"
                  ></textarea>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nama Pelapor</label>
                    <input
                      type="text"
                      placeholder="Nama lengkap"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">No. Telepon</label>
                    <input
                      type="tel"
                      placeholder="08xx-xxxx-xxxx"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                    />
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg text-lg">
                  Kirim Laporan
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-blue-100 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Laporan Terbaru</h3>

              <div className="space-y-4">
                {recentReports.map((report) => (
                  <div
                    key={report.id}
                    className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 border-2 border-gray-200 hover:border-blue-300 transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="font-bold text-gray-800">{report.type}</div>
                      <div
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          report.status === 'verified'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {report.status === 'verified' ? '✓ Verified' : '⏳ Processing'}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                      <MapPin size={14} />
                      <span>{report.location}</span>
                    </div>
                    <div className="text-xs text-gray-500 mb-2">Pelapor: {report.reporter}</div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <Clock size={12} />
                        <span>{report.time}</span>
                      </div>
                      <div className="text-xs font-semibold text-blue-600">AI: {report.confidence}%</div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
                Lihat Semua Laporan
              </button>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle size={24} />
                <h3 className="text-lg font-bold">Panduan Pelaporan</h3>
              </div>

              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-yellow-300">•</span>
                  <span>Ambil foto yang jelas dan terang</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-yellow-300">•</span>
                  <span>Pastikan lokasi akurat</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-yellow-300">•</span>
                  <span>Berikan deskripsi lengkap</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-yellow-300">•</span>
                  <span>Hindari informasi palsu</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
