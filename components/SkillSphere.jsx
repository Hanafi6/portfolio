'use client';

import {TagSphere} from 'react-tag-sphere';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiNumpy,
} from 'react-icons/si';

const icons = [
  <FaHtml5 key="html" />,
  <FaCss3Alt key="css" />,
  <FaJs key="js" />,
  <FaReact key="react" />,
  <FaPython key="python" />,
  <FaGitAlt key="git" />,
  <SiNextdotjs key="next" />,
  <SiRedux key="redux" />,
  <SiTailwindcss key="tailwind" />,
  <SiNumpy key="numpy" />,
];

export default function SkillSphere() {
  return (
    <div className="flex justify-center items-center h-[400px]">
      <TagSphere
        tags={icons}
        radius={200}
        speed={0.5}
        keepRollingAfterMouseOut={true}
      />
    </div>
  );
}
