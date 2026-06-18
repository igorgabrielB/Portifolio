import React from 'react'

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick,
  className = '',
  ...props 
}) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 cursor-pointer'
  
  const variants = {
    primary: 'bg-primary-700 hover:bg-primary-600 text-white shadow-lg hover:shadow-xl hover:shadow-primary-700/50',
    secondary: 'bg-transparent border-2 border-primary-700 text-primary-400 hover:bg-primary-700/10',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-dark-950',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
