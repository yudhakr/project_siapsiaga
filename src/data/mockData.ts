export interface DisasterData {
  id: string;
  type: string;
  location: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  time: string;
  description: string;
  lat: number;
  lng: number;
}

export interface Statistics {
  earthquakes: number;
  floods: number;
  fires: number;
  landslides: number;
  total: number;
}

export const recentDisasters: DisasterData[] = [
  {
    id: '1',
    type: 'Gempa Bumi',
    location: 'Yogyakarta',
    severity: 'high',
    time: '5 menit yang lalu',
    description: 'Gempa 5.2 SR terdeteksi',
    lat: -7.7956,
    lng: 110.3695,
  },
  {
    id: '2',
    type: 'Banjir',
    location: 'Jakarta Selatan',
    severity: 'medium',
    time: '15 menit yang lalu',
    description: 'Ketinggian air 80cm',
    lat: -6.2615,
    lng: 106.8106,
  },
  {
    id: '3',
    type: 'Kebakaran Hutan',
    location: 'Kalimantan Tengah',
    severity: 'critical',
    time: '1 jam yang lalu',
    description: 'Hotspot terdeteksi 12 titik',
    lat: -1.6815,
    lng: 113.3824,
  },
  {
    id: '4',
    type: 'Tanah Longsor',
    location: 'Bandung',
    severity: 'medium',
    time: '2 jam yang lalu',
    description: 'Longsor di area perbukitan',
    lat: -6.9175,
    lng: 107.6191,
  },
];

export const statistics: Statistics = {
  earthquakes: 24,
  floods: 18,
  fires: 12,
  landslides: 8,
  total: 62,
};

export const weatherData = [
  { province: 'DKI Jakarta', temp: 32, humidity: 78, rainfall: 45, status: 'warning' },
  { province: 'Jawa Barat', temp: 28, humidity: 82, rainfall: 65, status: 'danger' },
  { province: 'Jawa Tengah', temp: 30, humidity: 75, rainfall: 30, status: 'safe' },
  { province: 'Jawa Timur', temp: 31, humidity: 70, rainfall: 25, status: 'safe' },
  { province: 'Bali', temp: 29, humidity: 80, rainfall: 40, status: 'warning' },
  { province: 'Sumatera Utara', temp: 27, humidity: 85, rainfall: 70, status: 'danger' },
];

export const predictionData = [
  {
    disaster: 'Banjir',
    location: 'Jakarta',
    probability: 85,
    timeframe: '24-48 jam',
    recommendation: 'Siapkan jalur evakuasi, pantau cuaca',
  },
  {
    disaster: 'Gempa Bumi',
    location: 'Lombok',
    probability: 42,
    timeframe: '7 hari',
    recommendation: 'Perhatikan aktivitas seismik',
  },
  {
    disaster: 'Kebakaran Hutan',
    location: 'Riau',
    probability: 78,
    timeframe: '3-5 hari',
    recommendation: 'Patroli aktif, siaga air',
  },
];

export const educationContent = [
  {
    id: 'edu1',
    title: 'Panduan Evakuasi Gempa Bumi',
    category: 'Gempa',
    icon: '🏃‍♂️',
    duration: '5 menit',
    content: 'Lindungi kepala, cari tempat aman, hindari bangunan tinggi...',
  },
  {
    id: 'edu2',
    title: 'Persiapan Menghadapi Banjir',
    category: 'Banjir',
    icon: '🌊',
    duration: '7 menit',
    content: 'Siapkan tas darurat, matikan listrik, cari tempat tinggi...',
  },
  {
    id: 'edu3',
    title: 'Tindakan Saat Kebakaran',
    category: 'Kebakaran',
    icon: '🔥',
    duration: '4 menit',
    content: 'Keluar dengan tertib, tutup pintu, hubungi damkar 113...',
  },
  {
    id: 'edu4',
    title: 'Waspada Tanah Longsor',
    category: 'Longsor',
    icon: '⛰️',
    duration: '6 menit',
    content: 'Perhatikan retakan tanah, dengar suara gemuruh, segera mengungsi...',
  },
];
