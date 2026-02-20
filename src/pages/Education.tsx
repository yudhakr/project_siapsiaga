import { BookOpen, Video, FileText, Download, Shield, Users, Phone, Map } from 'lucide-react';
import { educationContent } from '../data/mockData';

export default function Education() {
  const emergencyNumbers = [
    { name: 'Damkar', number: '113', icon: '🚒' },
    { name: 'Polisi', number: '110', icon: '🚓' },
    { name: 'Ambulans', number: '118', icon: '🚑' },
    { name: 'SAR', number: '115', icon: '⛑️' },
    { name: 'BNPB', number: '117', icon: '🆘' },
    { name: 'PLN', number: '123', icon: '⚡' },
  ];

  const evacuationSteps = [
    'Tetap tenang dan jangan panik',
    'Ambil tas darurat yang sudah disiapkan',
    'Matikan listrik dan gas di rumah',
    'Ikuti jalur evakuasi yang telah ditentukan',
    'Hubungi keluarga untuk konfirmasi keselamatan',
    'Menuju titik kumpul terdekat',
    'Ikuti instruksi dari petugas',
    'Jangan kembali sebelum dinyatakan aman',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
              <BookOpen size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Edukasi & Panduan</h1>
              <p className="text-gray-600">Persiapan dan penanganan bencana</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {educationContent.map((content) => (
            <div
              key={content.id}
              className="bg-white rounded-2xl shadow-lg p-6 border-2 border-green-100 hover:shadow-xl hover:border-green-300 transition-all cursor-pointer"
            >
              <div className="text-5xl mb-4 text-center">{content.icon}</div>
              <div className="text-center mb-3">
                <div className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  {content.category}
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{content.title}</h3>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Video size={14} />
                  <span>{content.duration}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{content.content}</p>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition-colors text-sm">
                Pelajari Sekarang
              </button>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-100 mb-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Map size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Prosedur Evakuasi</h2>
                  <p className="text-sm text-gray-600">Langkah-langkah penting saat evakuasi</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {evacuationSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border-2 border-blue-200"
                  >
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 shadow-lg">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield size={24} className="text-purple-900" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Tas Darurat (Go Bag)</h2>
                  <p className="text-purple-200 text-sm">Persiapan barang penting</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { category: 'Dokumen', items: ['KTP', 'KK', 'BPJS', 'Sertifikat'] },
                  { category: 'Kesehatan', items: ['P3K', 'Obat Rutin', 'Masker', 'Hand Sanitizer'] },
                  { category: 'Perlengkapan', items: ['Senter', 'Baterai', 'Powerbank', 'Radio'] },
                  { category: 'Makanan', items: ['Air Mineral', 'Makanan Kaleng', 'Snack', 'Susu'] },
                  { category: 'Pakaian', items: ['Baju Ganti', 'Jaket', 'Sepatu', 'Jas Hujan'] },
                  { category: 'Keuangan', items: ['Uang Tunai', 'ATM', 'Nomor Kontak', 'Asuransi'] },
                ].map((bag, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="font-bold mb-3 text-yellow-300">{bag.category}</div>
                    <ul className="space-y-2 text-sm">
                      {bag.items.map((item, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <span className="text-green-400">✓</span>
                          <span className="text-purple-100">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl shadow-xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <Phone size={24} className="text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Nomor Darurat</h3>
                  <p className="text-sm text-red-100">Hubungi segera saat darurat</p>
                </div>
              </div>

              <div className="space-y-3">
                {emergencyNumbers.map((contact, index) => (
                  <div
                    key={index}
                    className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-3xl">{contact.icon}</div>
                        <div>
                          <div className="font-bold text-lg">{contact.name}</div>
                          <div className="text-2xl font-bold text-yellow-300">{contact.number}</div>
                        </div>
                      </div>
                      <Phone size={20} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-yellow-100">
              <div className="flex items-center space-x-3 mb-4">
                <FileText size={24} className="text-yellow-600" />
                <h3 className="text-lg font-bold text-gray-800">Materi Download</h3>
              </div>

              <div className="space-y-3">
                {[
                  { title: 'Panduan Lengkap Bencana', size: '2.4 MB', type: 'PDF' },
                  { title: 'Peta Jalur Evakuasi', size: '1.8 MB', type: 'PDF' },
                  { title: 'Checklist Persiapan', size: '856 KB', type: 'PDF' },
                  { title: 'Video Tutorial Evakuasi', size: '45 MB', type: 'MP4' },
                ].map((file, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-gray-50 to-yellow-50 rounded-lg p-4 border-2 border-gray-200 hover:border-yellow-300 transition-all cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800 mb-1">{file.title}</div>
                        <div className="text-xs text-gray-500">
                          {file.type} • {file.size}
                        </div>
                      </div>
                      <Download size={20} className="text-yellow-600" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Users size={24} />
                <h3 className="text-lg font-bold">Komunitas</h3>
              </div>

              <div className="space-y-3 text-sm">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
                  <div className="font-semibold mb-1">Relawan BNPB</div>
                  <div className="text-cyan-100 text-xs">2,847 anggota aktif</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
                  <div className="font-semibold mb-1">Forum Kesiapsiagaan</div>
                  <div className="text-cyan-100 text-xs">1,234 diskusi</div>
                </div>
                <button className="w-full bg-white text-cyan-600 font-semibold py-3 rounded-lg hover:bg-cyan-50 transition-colors mt-2">
                  Gabung Komunitas
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
