import React, { useEffect, useState } from 'react'


function Popup({images, children, onClose }) {
  const [animateOut, setAnimateOut] = useState(false)
  const [visible, setVisible] = useState(false)

  // تشغيل أنميشن الدخول
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10)
    return () => clearTimeout(timer)
  }, [])

  // تشغيل أنميشن الخروج
  const handleClose = () => {
    setAnimateOut(true)
    setTimeout(() => {
      onClose() // نحذف المكون بعد الأنميشن
    }, 300) // نفس مدة الأنميشن
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs backdrop-grayscale-100 flex items-center justify-center z-50">
      <div
        className={`
          relative w-[80%] max-w-xl h-[70vh] bg-[#333] rounded-xl drop-shadow-lg overflow-hidden 
          flex items-center justify-center p-3
          transition-all duration-300 ease-linear
          ${visible && !animateOut ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
        `}
      >
        {/* زر الإغلاق */}
        <button
          onClick={handleClose}
          className="absolute top-0 right-0 z-10 text-white bg-[#999] rounded w-9 h-9 flex items-center justify-center text-xl hover:bg-[#222]"
        >
          cls
        </button>

        {children}
      </div>
    </div>
  )
}

export default Popup
