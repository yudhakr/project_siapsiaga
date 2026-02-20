import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { useState } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Halo! Saya adalah asisten AI SiagaBencana. Ada yang bisa saya bantu?',
      time: '10:30',
    },
  ]);

  const quickActions = [
    'Cara evakuasi gempa',
    'Nomor darurat',
    'Status bencana terdekat',
    'Tips persiapan bencana',
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        { type: 'user', text: message, time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) },
      ]);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: 'bot',
            text: 'Terima kasih atas pertanyaan Anda. AI sedang menganalisis dan akan segera memberikan informasi yang relevan.',
            time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
      }, 1000);

      setMessage('');
    }
  };

  const handleQuickAction = (action: string) => {
    setMessages([
      ...messages,
      { type: 'user', text: action, time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) },
    ]);

    setTimeout(() => {
      let response = '';
      if (action.includes('evakuasi')) {
        response = 'Saat gempa: 1) Lindungi kepala, 2) Cari tempat aman di bawah meja, 3) Jauhi jendela dan benda berat, 4) Setelah gempa mereda, keluar dengan tertib melalui tangga darurat.';
      } else if (action.includes('nomor')) {
        response = 'Nomor Darurat: Damkar (113), Polisi (110), Ambulans (118), SAR (115), BNPB (117). Simpan nomor ini di kontak Anda!';
      } else if (action.includes('status')) {
        response = 'Saat ini terdeteksi 3 kejadian di sekitar Anda: Banjir di Jakarta Selatan (Sedang), Gempa di Yogyakarta (Tinggi), Kebakaran di Kalimantan (Kritis). Klik Dashboard untuk detail.';
      } else {
        response = 'Tips persiapan: 1) Siapkan tas darurat, 2) Simpan dokumen penting, 3) Ketahui jalur evakuasi, 4) Ikuti pelatihan kesiapsiagaan. Lihat halaman Edukasi untuk panduan lengkap.';
      }
      setMessages((prev) => [
        ...prev,
        {
          type: 'bot',
          text: response,
          time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 800);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 animate-bounce"
        >
          <MessageCircle size={28} />
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
            AI
          </div>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border-4 border-blue-200 animate-slide-up">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-5 rounded-t-xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Bot size={24} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg">AI Assistant</h3>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-100">Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-br from-gray-50 to-blue-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-4 shadow-lg ${
                    msg.type === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-none'
                      : 'bg-white text-gray-800 rounded-bl-none border-2 border-blue-200'
                  }`}
                >
                  {msg.type === 'bot' && (
                    <div className="flex items-center space-x-2 mb-2">
                      <Bot size={16} className="text-blue-600" />
                      <span className="text-xs font-semibold text-blue-600">AI Assistant</span>
                    </div>
                  )}
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                  <div
                    className={`text-xs mt-2 ${
                      msg.type === 'user' ? 'text-blue-200' : 'text-gray-500'
                    }`}
                  >
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="space-y-2">
                <div className="text-xs font-semibold text-gray-600 mb-3 text-center">Pertanyaan Cepat:</div>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickAction(action)}
                      className="bg-white border-2 border-blue-200 hover:border-blue-400 text-gray-700 text-xs font-medium px-3 py-2 rounded-lg transition-all hover:shadow-md"
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t-2 border-gray-200 rounded-b-xl">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Tanya AI tentang bencana..."
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-lg hover:shadow-lg transition-all"
              >
                <Send size={20} />
              </button>
            </div>
            <div className="text-xs text-gray-500 mt-2 text-center">
              Powered by AI Machine Learning
            </div>
          </div>
        </div>
      )}
    </>
  );
}
