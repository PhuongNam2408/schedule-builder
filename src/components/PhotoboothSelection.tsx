'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera, MapPin, ArrowLeft, Plus } from 'lucide-react';
import { photobooths, Photobooth } from '@/data/venues';
import { useSchedule } from '@/context/ScheduleContext';

export default function PhotoboothSelection() {
  const { selectedPhotobooth, setSelectedPhotobooth, nextStep, prevStep } = useSchedule();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customName, setCustomName] = useState('');

  const handleSelect = (photobooth: Photobooth) => {
    setSelectedPhotobooth(photobooth);
    setTimeout(() => nextStep(), 500);
  };

  const handleCustomSubmit = async () => {
    if (!customName.trim()) return;

    const customPhotobooth: Photobooth = {
      id: `custom-${Date.now()}`,
      name: customName.trim(),
      address: 'Địa chỉ tùy chọn',
      image: '/placeholder-photobooth.jpg',
      tiktokUrl: '#'
    };

    // Lưu vào database
    try {
      await fetch('/api/custom-venues', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'photobooth',
          name: customName.trim()
        })
      });
    } catch (error) {
      console.error('Error saving custom venue:', error);
    }

    setSelectedPhotobooth(customPhotobooth);
    setTimeout(() => nextStep(), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Back button at top-left */}
        <div className="mb-8">
          <button
            onClick={prevStep}
            className="flex items-center text-pink-600 hover:text-pink-800 text-sm font-medium bg-white rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Quay lại chọn Quán cafe</span>
          </button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            📸 Chọn Photobooth
          </h1>
          <p className="text-lg text-gray-700 font-medium max-w-2xl mx-auto text-justify indent-8">
            Anh biết là hiện tại em thực sự cảm thấy không thoải mái khi chụp photobooth với anh, thế nhưng mà anh vẫn muốn cố gắng một lần nữa. Thực sự là bọn mình đã rất hạnh phúc khi được ở bên nhau, chụp với nhau từng bức ảnh, nhìn nhau, ôm nhau, rồi hôn nhau với những tình cảm chân thật nhất. Liệu em có còn muốn lưu lại những khoảnh khắc đẹp nhất của chúng ta hong? 📷💕
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photobooths.map((photobooth) => (
            <div
              key={photobooth.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 ${
                selectedPhotobooth?.id === photobooth.id
                  ? 'ring-4 ring-purple-400 scale-105'
                  : hoveredId === photobooth.id
                  ? 'scale-105 shadow-xl'
                  : 'hover:shadow-xl'
              }`}
              onClick={() => handleSelect(photobooth)}
              onMouseEnter={() => setHoveredId(photobooth.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative">
                <Image
                  src={photobooth.image}
                  alt={photobooth.name}
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-purple-500 text-white rounded-full p-2">
                  <Camera className="h-4 w-4" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {photobooth.name}
                </h3>
                
                <div className="flex items-center text-gray-700 font-medium mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{photobooth.address}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  {photobooth.tiktokUrl && photobooth.tiktokUrl !== "" && (
                    <a 
                      href={photobooth.tiktokUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-pink-500 hover:text-pink-600 text-sm font-medium"
                    >
                      <span className="mr-1">📱</span>
                      <span>Xem TikTok</span>
                    </a>
                  )}
                  
                  {selectedPhotobooth?.id === photobooth.id && (
                    <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold text-center">
                      Đã chọn 💜
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {/* Custom option card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-dashed border-purple-300 hover:border-purple-400 transition-all duration-300">
            {!showCustomInput ? (
              <div 
                className="p-8 text-center cursor-pointer hover:bg-purple-50 transition-colors duration-200"
                onClick={() => setShowCustomInput(true)}
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plus className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Photobooth khác
                </h3>
                <p className="text-gray-600 text-sm">
                  Nhập tên photobooth bạn muốn đi
                </p>
              </div>
            ) : (
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Nhập tên photobooth của bạn
                </h3>
                <input
                  type="text"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  placeholder="VD: Hàn Quốc Studio..."
                  className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                  onKeyPress={(e) => e.key === 'Enter' && handleCustomSubmit()}
                  autoFocus
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleCustomSubmit}
                    disabled={!customName.trim()}
                    className="flex-1 bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    Chọn chỗ này 📷
                  </button>
                  <button
                    onClick={() => {
                      setShowCustomInput(false);
                      setCustomName('');
                    }}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    Hủy
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 italic mb-6">
            💡 Mẹo: Nhớ xem thêm link tiktok đã được đính kèm để tham khảo nhé! 
          </p>
        </div>
      </div>
    </div>
  );
}
