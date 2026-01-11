import React from 'react'
import { cn } from '../utils.js'

export default function CTA() {
  return (
    <section id="reservation" className="py-24 bg-amber-600">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Забронируйте столик
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Удобное онлайн-бронирование через Telegram. Мы отправим подтверждение в мессенджер.
          </p>
          <button className="px-8 py-4 bg-brown-900 text-white rounded-3xl hover:bg-brown-800 transition-all transform hover:scale-105">
            Начать бронирование
          </button>
        </div>
      </div>
    </section>
  )
}