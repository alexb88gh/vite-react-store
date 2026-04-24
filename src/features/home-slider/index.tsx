import slide1 from '@/assets/slide-1.jpg'
import slide2 from '@/assets/slide-2.jpg'
import { Button } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'
import { EffectFade, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export const HomeSlider = () => {
  return (
    <div className="relative min-h-125">
      <Swiper modules={[EffectFade, Navigation]} effect="fade" navigation={true} speed={1000}>
        <SwiperSlide>
          <img src={slide1} className="min-h-125 object-cover object-[55%]" />
          <div className="absolute top-0 w-full h-full z-100 pl-[10%]">
            <Container className="h-full flex flex-col justify-center">
              <h4 className="font-poppins text-[1.1875rem] font-medium tracking-[0.08rem] opacity-70">
                Find the Boundaries. Push Through!
              </h4>
              <h2 className="font-segoe font-bold text-[3.3125em] tracking-[0.005rem] leading-none">
                Summer Sale
              </h2>
              <h3 className="font-poppins font-bold text-[5.875em] leading-none mb-4">70% OFF</h3>
              <div className="flex">
                <h5 className="flex">
                  <span className="font-poppins font-bold uppercase text-[0.75em]">
                    Starting At
                  </span>
                  <b className="mt-px mr-1 ml-3.25 py-1.5 px-2 text-[1.5em] bg-red-400 text-white font-bold font-poppins block -rotate-2">
                    <sup className="top-0.5 text-[100%]">$</sup>
                    <em className="text-[1.5em] not-italic align-text-top tracking-tighter leading-none">
                      199
                    </em>
                    <sup>99</sup>
                  </b>
                </h5>
                <Button className="bg-neutral-700 text-white text-[0.875em] font-poppins font-bold uppercase py-6 px-12 rounded-none cursor-pointer hover:bg-neutral-800">
                  Shop Now!
                </Button>
              </div>
            </Container>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} className="min-h-125 object-cover object-[55%]" />
          <div className="absolute top-0 w-full h-full z-100 pr-[10%]">
            <Container className="h-full flex flex-col justify-center items-end">
              <div>
                <h4 className="font-poppins text-[2.125rem] text-neutral-400 font-medium uppercase">
                  Extra
                </h4>
                <h3 className="font-poppins font-bold text-[4.3125em] leading-none mb-4">
                  20% OFF
                </h3>
                <h3 className="font-poppins font-bold text-[2.625em] leading-none mb-4 uppercase">
                  Accessories
                </h3>
                <h2 className="font-segoe font-bold text-[2.5em] tracking-[0.005rem] leading-none mb-6">
                  Summer Sale
                </h2>
                <Button className="w-full bg-neutral-700 text-white text-[0.875em] font-poppins font-bold uppercase py-6 px-12 rounded-none cursor-pointer hover:bg-neutral-800">
                  Shop All Sale
                </Button>
              </div>
            </Container>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
