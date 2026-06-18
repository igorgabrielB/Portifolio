import React from 'react'

export default function SectionTitle({ 
  title, 
  subtitle, 
  className = '' 
}) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 rounded-full mx-auto mt-6"></div>
    </div>
  )
}
