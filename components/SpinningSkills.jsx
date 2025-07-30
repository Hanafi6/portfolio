'use client';

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

import '../style/SpinningSkills.css'

const icons = [
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiNumpy,
];

export default function SpinningSkills() {
  return (
    <div className="skills-container">
      <div className="circle">
        {icons.map((Icon, index) => (
          <div className="icon" key={index} style={{ transform: `rotateY(${index * (360 / icons.length)}deg) translateZ(200px)` }}>
            <Icon size={40} />
          </div>
        ))}
      </div>
    </div>
  );
}
