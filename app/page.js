'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function WelcomePage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/home');
    }, 3000); // 5 sekund

    return () => clearTimeout(timer); // sahifa tark etilsa, timer to‘xtaydi
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gradient-to-r from-blue-900 via-white to-blue-900 animate-gradient">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
        Welcome to Virtual Physics Laboratory!
      </h1>

      <p className="text-sm  sm:text-base text-gray-700 font-medium mb-6">
        Created by Karimoff
      </p>
    </div>
  );
}
