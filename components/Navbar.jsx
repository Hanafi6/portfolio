'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // icons

const links = [
  { name: "الرئيسية", href: "/" },
  { name: "المهارات", href: "/skills" },
  { name: "المشاريع", href: "/projects" },
  { name: "تواصل", href: "/contact" },
];

export default function NavbarWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* اللوجو */}
          <div className="flex-shrink-0 text-xl font-bold text-primary dark:text-white">
            <Link href="/">محمود</Link>
          </div>

          {/* القايمة العادية في الشاشات الكبيرة */}
          <nav className="hidden md:flex gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-primary dark:hover:text-blue-400 transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* زرار الموبايل */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* قائمة الموبايل */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-gray-700 dark:text-white hover:text-primary dark:hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
