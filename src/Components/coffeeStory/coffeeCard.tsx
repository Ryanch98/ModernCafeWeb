import CoffeeAnimation from './coffeeAnimation';
import { useRef, useState } from 'react';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';

type Direction = 'next' | 'prev';

interface CoffeeCardProps {
  title: string;
  description: string;
  reverse: boolean;
  image: string;
  onReachEnd: (direction: Direction) => void;
}

export default function CoffeeCard({
  title,
  description,
  reverse,
  image,
  onReachEnd,
}: CoffeeCardProps) {
  const descriptionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  // const trueCoffee = reverse;
  // const [isSm, setIsSm] = useState(false);


  const handleScroll = (e) => {
    const element = e.currentTarget;
    const scrollTop = element.scrollTop;

    const maxScroll = element.scrollHeight - element.clientHeight;

    const p = maxScroll > 0 ? scrollTop / maxScroll : 0;

    setProgress(p);

    // if (scrollTop >= maxScroll - 5) {
    //   onReachEnd?.();
    // }
  };

  // useEffect(() => {
  //   if (descriptionRef.current) {
  //     descriptionRef.current.scrollTop = 0;
  //   }
  // }, [title]);

  return (
    <div className="flex h-screen w-full flex-col px-1 py-5 sm:gap-20">
      <div className="sticky top-5 flex w-full flex-col items-center gap-2 pt-2 text-center">
        <span className="rounded-full bg-amber-200/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">
          Coffee Stories
        </span>

        <h2 className="text-3xl font-black text-white sm:text-4xl">Types of Coffee</h2>

        <p className="mt-4 max-w-3xl text-sm text-slate-300 sm:text-base">
          Discover the aromas and rituals behind each coffee style through a smooth scroll story.
        </p>
      </div>
      {/* <div className="flex h-4 w-4 pt-40">
        <button onClick={onReachEnd}>a</button>
      </div> */}
      <div
        className={`flex w-full max-w-7xl flex-col gap-14 rounded-[34px] px-2 shadow-2xl shadow-slate-900/10 backdrop-blur-xl transition-all duration-500 sm:sticky sm:top-52 sm:flex-col sm:gap-8 sm:border sm:border-slate-200/30 sm:bg-white/90 sm:p-6 ${
          reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
        }`}
      >
        <div className="flex w-full flex-col gap-2 sm:h-auto sm:w-full sm:gap-8 sm:text-center lg:w-[85%] lg:text-left">
          <h3 className="pb-4 text-center text-2xl font-bold text-amber-200 sm:pb-0 sm:text-3xl sm:text-slate-900">
            {title}
          </h3>
          <div
            ref={descriptionRef}
            className="leading-2 h-[30vh] overflow-y-auto rounded-md bg-slate-50 p-2 text-xs text-slate-700 sm:h-[430px] sm:rounded-3xl sm:border sm:border-slate-200/70 sm:p-6 sm:text-base sm:leading-8 sm:shadow-inner sm:shadow-slate-200/40"
            onScroll={handleScroll}
          >
            {description}
          </div>
        </div>
        <div className="flex w-full flex-row justify-between sm:w-[50%] sm:pt-0">
          <button onClick={() => onReachEnd('prev')} className="z-50 flex w-10">
            <ArrowLeftCircleIcon />
          </button>
          <div className="relative flex w-full items-center justify-center lg:w-[45%]">
            <div className="z-20 flex w-full items-center justify-center sm:top-1/2 sm:h-[350px] lg:relative lg:top-auto lg:h-[500px] lg:translate-y-0">
              <CoffeeAnimation reverse={reverse} progress={progress} machineImage={image} />
            </div>
          </div>
          <button onClick={() => onReachEnd('next')} className="z-50 flex w-10">
            <ArrowRightCircleIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
