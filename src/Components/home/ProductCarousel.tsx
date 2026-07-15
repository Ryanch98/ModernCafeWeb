import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import type { MenuItemContent, Language } from '../../constants/types';
import { SWIPER_CONFIG, SWIPER_COVERFLOW_SETTINGS } from '../../constants/homeConstants';

import { addToCart } from '../../redux/cartSlice';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

interface ProductCarouselProps {
  items: MenuItemContent[];
  language: Language;
}

export default function ProductCarousel({ items, language }: ProductCarouselProps) {
  const cartQuantities = useAppSelector((state) =>
    state.cart.items.reduce<Record<string, number>>((acc, ci) => {
      acc[String(ci.id)] = ci.quantity;
      return acc;
    }, {}),
  );
  const dispatch = useAppDispatch();
  return (
    <div className="flex pt-4">
      <Swiper
        {...SWIPER_CONFIG}
        modules={[EffectCoverflow]}
        coverflowEffect={SWIPER_COVERFLOW_SETTINGS}
        style={{
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
        className="w-full overflow-visible px-2 sm:max-w-[70%] sm:px-4"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              onClick={() =>
                dispatch(
                  addToCart({
                    ...item,
                    name: typeof item.name === 'object' ? item.name[language] : item.name,
                    image: item.image ?? '',
                  }),
                )
              }
              className="my-2 flex h-[200px] w-full flex-col items-center justify-around overflow-hidden rounded-2xl p-5 shadow-2xl shadow-current backdrop-blur-lg sm:h-auto sm:p-1 md:shadow-none"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name.en}
                  className="flex h-full w-full items-center justify-center rounded-xl object-cover sm:h-[250px] sm:w-[250px]"
                  style={{
                    transform: `scale(${item.scale || 1})`,
                  }}
                />
              )}

              <h1 className="flex gap-2 text-center text-xl font-semibold text-white">
                {item.name[language] || item.name.en}
                {(cartQuantities[String(item.id)] ?? 0) > 0 && (
                  <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-amber-400 px-1 text-[10px] font-semibold text-slate-950">
                    {cartQuantities[String(item.id)] ?? 0}
                  </span>
                )}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
