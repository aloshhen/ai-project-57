import React from 'react'
import { cn } from '../utils.js'
import { Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-brown-900 via-amber-900 to-brown-900 opacity-90 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600">
              Brown Beans
            </span>
          </h1>
          <p className="text-xl text-brown-100 mb-10">
            Авторский кофе и десерты в уютной атмосфере. Бронируйте столик онлайн и наслаждайтесь каждым глотком.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-amber-600 text-white rounded-3xl hover:bg-amber-700 transition-all transform hover:scale-105">
              Бронировать столик
            </button>
            <button className="px-8 py-4 bg-white/20 text-white rounded-3xl hover:bg-white/30 transition-all">
              Посмотреть меню
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}