'use client'
import React, { useState } from 'react'
import Popup from '../components/Popup'

function ManegImage({ mainImage, title }) {
  const [openModal, setOpenModal] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fade, setFade] = useState(false)

  const handelShowPhoto = () => {
    setCurrentIndex(0) // يبدأ دايمًا من أول صورة
    setOpenModal(true)
  }

  const handleClose = () => {
    setOpenModal(false)
  }

  const handleNext = () => {
    setFade(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % mainImage.length)
      setFade(false)
    }, 300)
  }

  const handlePrev = () => {
    setFade(true)
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? mainImage.length - 1 : prev - 1
      )
      setFade(false)
    }, 100)

  }

  return (
    <>
      <div
        onClick={handelShowPhoto}
        className="w-full cursor-pointer h-40 rounded-lg mb-3 overflow-hidden"
      >
        {mainImage?.length ? (
          <img
            src={mainImage[0]}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-gray-500 text-sm">
            لا توجد صورة
          </div>
        )}
      </div>

      {openModal && (
        <Popup onClose={handleClose}>
          <div className="relative w-full h-full flex items-center justify-center bg-black">
            
            <div className="absolute top-0.5 px-1 text-center rounded bg-[#e5484d]">{currentIndex +1}</div>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full"
            >
              ◀
            </button>

            <img
              src={mainImage[currentIndex]}
              alt={title}
              className={`max-h-[90vh] max-w-full object-contain transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}
            />

            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full"
            >
              ▶
            </button>
          </div>
        </Popup>
      )}
    </>
  )
}

export default ManegImage
