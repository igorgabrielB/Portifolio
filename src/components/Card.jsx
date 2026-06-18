import React from 'react'

export default function Card({ 
  children, 
  className = '', 
  hover = true,
  ...props 
}) {
  return (
    <div
      className={`
        bg-gradient-to-br from-dark-900 to-dark-950 
        border border-primary-700/30 
        rounded-xl p-6 
        backdrop-blur-sm
        ${hover ? 'hover:border-primary-500 hover:shadow-lg hover:shadow-primary-700/20 transition-all duration-300' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}
