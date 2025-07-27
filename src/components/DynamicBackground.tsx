'use client';

import { useSchedule } from '@/context/ScheduleContext';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function DynamicBackground() {
  const { currentStep } = useSchedule();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="absolute inset-0 bg-black" />
    );
  }

  return (
    <>
      {currentStep === 0 ? (
        <div className="absolute inset-0">
          <Image
            src="/IMG_8525.png"
            alt="Background"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            priority
            quality={75}
          />
        </div>
      ) : (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/romantic-bg.svg')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50/10 to-rose-100/10" />
        </>
      )}
    </>
  );
}
