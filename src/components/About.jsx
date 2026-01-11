import React from 'react'
import { cn } from '../utils.js'
import { Sparkles } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-24 bg-brown-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-brown-900">
          Как это работает
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-16 h-16 bg-amber-600/20 rounded-xl flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-brown-800 mb-4">1. Выберите время</h3>
            <p className="text-brown-600 mb-6">
              Зайдите на наш сайт и выберите удобное время для визита. Мы принимаем бронирование на часы.
            </p>
            <h3 className="text-2xl font-bold text-brown-800 mb-4">2. Забронируйте столик</h3>
            <p className="text-brown-600 mb-6">
              Укажите количество гостей и получите подтверждение бронирования в Telegram.
            </p>
            <h3 className="text-2xl font-bold text-brown-800 mb-4">3. Приходите и наслаждайтесь</h3>
            <p className="text-brown-600">
              Приходите в назначенное время и наслаждайтесь уютной атмосферой и вкусным кофе.
            </p>
          </div>
          <div className="relative">
            <img src="https://source.unsplash.com/800x600/?coffee,cafe" alt="Кофейня" className="rounded-3xl shadow-2xl shadow-brown-900/10" />
          </div>
        </div>
      </div>
    </section>
  )
}