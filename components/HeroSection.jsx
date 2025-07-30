
'use client';

import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
  <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center text-center p-4 sm:p-6 md:p-8 bg-light dark:bg-black overflow-hidden rounded-xl shadow-lg mb-12">
      {/* الخلفية */}
      <Image
        src="/images/محمود.jpg"
        alt="Cover"
        fill
        className="object-cover opacity-50 z-0"
      />

      {/* تغطية داكنة */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />

      {/* المحتوى */}
      <div className="relative z-10 max-w-3xl mx-auto px-2">
      <Image
        src="/images/profile-ai.png.jpg"
        width={120}
        height={120}
        alt="Profile"
        className="rounded-full mx-auto mb-4 border-4 border-white shadow-lg w-[100px] sm:w-[120px]"
      />

        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-white">Mahmoud Ahmed</h1>
        <p className="text-base sm:text-lg text-gray-300 mb-4">
          Frontend Developer & UI Enthusiast 🚀
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {['React', 'Next.js', 'Redux', 'Tailwind'].map((skill) => (
            <span
              key={skill}
              className="bg-primary text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
        <Link
          href="/projects"
          className="inline-block mt-6 px-6 py-2 text-sm sm:text-base bg-accent text-white rounded-lg hover:bg-teal-600 transition"
        >
          Projects
        </Link>
      </div>
    </section>
  )
}
