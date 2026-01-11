import React from 'react'
import { cn } from '../utils.js'

export default function Footer() {
  return (
    <footer className="bg-brown-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-amber-600">Brown Beans</h3>
            <p className="text-brown-200">
              Авторский кофе и десерты в уютной атмосфере. Мы работаем с 9:00 до 22:00.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <p className="text-brown-200 mb-2">ул. Кофейная, 12, г. Город</p>
            <p className="text-brown-200 mb-2">+7 (123) 456-78-90</p>
            <p className="text-brown-200">info@brownbeans.ru</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Соцсети</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-brown-200 hover:text-amber-600 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-brown-200 hover:text-amber-600 transition-colors">
                Telegram
              </a>
              <a href="#" className="text-brown-200 hover:text-amber-600 transition-colors">
                VK
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-brown-800 text-center text-brown-400">
          <p>© 2024 Brown Beans. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}