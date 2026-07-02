import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CoffeeCard from './coffeeCard';

type direction = 'next' | 'prev';

const coffees = [
  {
    title: 'French Coffee',
    description:
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...' +
      'French coffee is smooth and aromatic...',

    reverse: false,
    image: '/Pic/french.PNG',
  },
  {
    title: 'Turkish Coffee',
    description:
      'Turkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is oncoffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is oncoffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is oncoffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is oncoffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is oncoffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is oncoffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is on oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methodsTurkish coffee is one of the oldest brewing methods...',
    image: '/Pic/turkish.PNG',
    reverse: true,
  },
  {
    title: 'Espresso',
    description:
      'Espresso is the base of many coffee drinksEspresso is the base of many coffee drinksEspresso is the base of many coffee drinksEspresso is the base of many coffee drinksEspresso is the base of many coffee drinksEspresso is the base of many coffee drinksEspresso is the base of many coffee drinksEspresso is the base of many coffee drinksEspresso is the base of many coffee drinksEspresso is the base of many coffee drinksEspresso is the base of many coffee drinksEspresso is the base of many coffee drinksEspresso is the base of many coffee drinksEspresso is the base of many coffee drinksEspresso is the base of many coffee drinksEspresso is the base of many coffee drinksEspresso is the base of many coffee drinksEspresso is the base of many coffee drinksEspresso is the base of many coffee drinksEspresso is the base of many coffee drinksEspresso is the base of many coffee drinksEspresso is the base of many coffee drinksEspresso is the base of many coffee drinksEspresso is the base of many coffee drinksEspresso is the base of many coffee drinks...',
    reverse: false,
    image: '/Pic/mocapot.png',
  },
];

export default function CoffeeStory() {
  const [currentCard, setCurrentCard] = useState(0);

  const sectionRef = useRef(null);

  const handlerChangeCoffee = (direction: direction) => {
    if (direction === 'next') {
      setCurrentCard((prev) => Math.min(prev + 1, coffees.length - 1));
    } else {
      setCurrentCard((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100"
    >
      <div className="flex w-full sm:top-10 sm:items-start sm:justify-start sm:px-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -80 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <CoffeeCard
              key={currentCard}
              title={coffees[currentCard].title}
              description={coffees[currentCard].description}
              reverse={coffees[currentCard].reverse}
              image={coffees[currentCard].image}
              onReachEnd={handlerChangeCoffee}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
