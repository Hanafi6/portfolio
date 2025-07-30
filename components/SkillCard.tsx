'use client';

import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaPython,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiNumpy,
} from 'react-icons/si';

const icons: { [key: string]: React.ElementType } = {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaPython,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiNumpy,
};

interface SkillCardProps {
  name: string;
  level: string;
  icon: string;
}

export default function SkillCard({ name, level, icon }: SkillCardProps) {
  const IconComponent = icons[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-900 p-4 rounded-xl text-center shadow-lg"
    >
      <motion.div
        className="text-4xl text-blue-500 mb-2 mx-auto"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: 'linear',
        }}
      >
        {IconComponent && <IconComponent />}
      </motion.div>

      <h3 className="text-lg font-bold text-dark dark:text-white">{name}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-300">{level}</p>
    </motion.div>
  );
}
  