import React from 'react'
import { cn } from '../utils.js'
import { Menu } from 'lucide-react'

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200/50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-brown-800">Brown Beans</div>
        <button className="md:hidden p-2">
          <Menu className="w-6 h-6 text-brown-600" />
        </button>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-brown-700 hover:text-brown-900 transition-colors">Главная</a>
          <a href="#menu" className="text-brown-700 hover:text-brown-900 transition-colors">Меню</a>
          <a href="#reservation" className="text-brown-700 hover:text-brown-900 transition-colors">Бронирование</a>
          <a href="#about" className="text-brown-700 hover:text-brown-900 transition-colors">О нас</a>
        </div>
      </div>
    </nav>
  )
}