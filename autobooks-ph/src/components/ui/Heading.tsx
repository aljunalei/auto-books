//HEADING.TSX
"use client";
import { JSX } from "react";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
  className?: string
}

export default function Heading({ level, children, className = '' }: HeadingProps) {
  const baseClasses = 'font-bold text-gray-900'
  
  const sizeClasses = {
    1: 'text-4xl md:text-5xl',
    2: 'text-3xl md:text-4xl',
    3: 'text-2xl md:text-3xl',
    4: 'text-xl md:text-2xl',
    5: 'text-lg md:text-xl',
    6: 'text-base md:text-lg'
  }

  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <Tag className={`${baseClasses} ${sizeClasses[level]} ${className}`}>
      {children}
    </Tag>
  )
}