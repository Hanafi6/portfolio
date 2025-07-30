'use client';

import { motion } from 'framer-motion';

const cards = [
  {
    title: "Who I Am as a Person",
    img: "/images/newText.png",
    desc: `Before I became a developer, I was a guy who loved to notice the small things.
I studied Geomatics Engineering, but I always felt drawn to the world of creativity and interaction.
I find beauty in the details — colors, layout, the feeling behind a page — and I believe simplicity often says more than words.`,
  },
  {
    title: "Who I Am as a Developer",
    img: "/images/part_2.png",
    desc: `My real passion began when I discovered React.
I don’t just write code — I ask why it works, how it can be cleaner, better.
I enjoy building real projects using tools like Tailwind, Zustand, and React Query — from chat apps to interactive note systems that feel alive.`,
  },
  {
    title: "Who I Am as a Learner and Builder",
    img: "/images/text.png",
    desc: `I believe learning is a journey, not a race.
I take my time to understand deeply, and I love documenting what I learn to make it easier for others.
My goal isn’t just to build apps — it’s to be a source of inspiration for anyone starting late or starting over.`,
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
