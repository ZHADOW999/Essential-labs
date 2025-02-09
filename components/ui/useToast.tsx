import React, { useState, useEffect } from "react"

interface ToastProps {
  title: string
  description: string
  onClose?: () => void // Callback to allow external control
}

export function Toast({ title, description, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      if (onClose) onClose() // Call the external close function if provided
    }, 5000)

    return () => clearTimeout(timer)
  }, [onClose])

  if (!isVisible) return null

  return (
    <div className="z-50 fixed bottom-4 right-4 w-full max-w-sm bg-white rounded-lg shadow-lg p-4 border border-gray-200">
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
      >
        &times;
      </button>
    </div>
  )
}
