import React from 'react'
import { cn } from '../utils.js'
import { Zap, Coffee, Utensils, Sparkles } from 'lucide-react'

export default function Features() {
  return (
    <section id="menu" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-brown-900">
          Наше меню
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/50 backdrop-blur-xl rounded-3xl border border-white/20 p-8 hover:scale-105 transition-all">
            <div className="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-brown-800 mb-3">Специальные сорта</h3>
            <p className="text-brown-600">
              Редкие сорта кофе из экзотических регионов. Каждый напиток - это путешествие.
            </p>
          </div>
          <div className="bg-white/50 backdrop-blur-xl rounded-3xl border border-white/20 p-8 hover:scale-105 transition-all">
            <div className="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center mb-6">
              <Coffee className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-brown-800 mb-3">Кофейные напитки</h3>
            <p className="text-brown-600">
              Классические и современные кофейные напитки, приготовленные с любовью.
            </p>
          </div>
          <div className="bg-white/50 backdrop-blur-xl rounded-3xl border border-white/20 p-8 hover:scale-105 transition-all">
            <div className="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center mb-6">
              <Utensils className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-brown-800 mb-3">Десерты</h3>
            <p className="text-brown-600">
              Свежие домашние десерты, идеально сочетающиеся с кофе.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}