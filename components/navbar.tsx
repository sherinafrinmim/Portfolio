'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
      <nav className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='container mx-auto px-4'>
          <div className='flex h-16 items-center justify-between'>
            {/* logo  */}
            <Link href='/' className='text-2xl font-bold'>
             Sherin <span className='text-primary'>Afrin</span> Mim
            </Link>

            {/* Desktop Navigation */}
            <div className='hidden md:flex md:items-center md:space-x-8'>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className='text-sm font-medium transition-colors hover:text-[#efd3b3]'>
                  {item.label}
                </Link>
              ))}
              {/* <ThemeSwitcher /> */}
              {/* <ModeToggle /> */}
            </div>

            {/* Mobile Navigation */}
            <div className='md:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className='inline-flex items-center justify-center rounded-md p-2'>
                {isOpen ? (
                  <X className='h-6 w-6' />
                ) : (
                  <Menu className='h-6 w-6' />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className='md:hidden'>
              <div className='space-y-1 pb-3 pt-2'>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className='block px-3 py-2 text-base font-medium'
                    onClick={() => setIsOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

  );
}
