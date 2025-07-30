'use client';

import { motion } from 'framer-motion';

const cards = [
  {
    title: "Who I Am ",
    img: "/images/newText.png",
    desc: `I'm Mahmoud, a front-end developer passionate 
    about building interactive and functional user interfaces using React
    and Next.js. With a background in space and data analysis, I love combining
    structured design with analytical thinking to deliver effective and easy-to-use software
    solutions.`,
  },
  {
    title: "",
    img: "/images/part_2.png",
    desc: `I'm Mahmoud, someone who sees programming not just as
    code, but as a reflection of a way of thinking. I believe that
    every interface I create is a human experience before it's technical, and that the small details are what create 
    the big impression.`,
  },
  {
    title: "For Me",
    img: "/images/text.png",
    desc: `Every day you postpone your work, someone less fortunate than you will find work and pass you by.
    The comfort you're experiencing now is the grave your fear has dug for you while you're silent.`,
  },
];

export default function AboutMe() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center gap-6 md:gap-12 bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden p-6"
        >
          <img
            src={card.img}
            alt={card.title}
            className="w-full md:w-1/3 aspect-[3/4] object-cover object-top rounded-xl"
          />
          <div className="flex-1 text-center md:text-right">
            <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
              {card.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line leading-relaxed text-sm sm:text-base">
              {card.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
