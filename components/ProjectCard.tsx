import React from "react";

import ManegImage from '../components/ManegImage'

interface ProjectProps {
  title: string
  description: string
  image: string | string[] // array of strings
  url: string
}

export default function ProjectCard({ title, description, image, url }: ProjectProps) {
  
  // نحسم الصورة الرئيسية
  const mainImage = Array.isArray(image) ? image : image;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 transition hover:shadow-lg">
      {/* الصورة */}
      {/* <div  className="w-full cursor-pointer h-40 rounded-lg mb-3 overflow-hidden">
        {mainImage ? (
          <img
            src={mainImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-gray-500 text-sm">
            لا توجد صورة
          </div>
        )}
      </div> */}

      
      <ManegImage mainImage={mainImage} title={title}/>
      {/* العنوان */}
      <h3 className="text-xl font-bold text-dark dark:text-white mb-1">{title}</h3>

      {/* الوصف */}
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{description}</p>

      {/* الرابط */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-primary hover:underline"
      >
        مشاهدة المشروع →
      </a>
    </div>
  );
}
