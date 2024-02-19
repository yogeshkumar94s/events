import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className='bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10'>
        <div className='wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0'>
          <div className='flex flex-col justify-center gap-8'>
            <h1 className='h1-bold'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              facere obcaecati alias! Amet, nisi optio?
            </h1>
            <p className='p-regular-20 md:p-regular-24 '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              sequi atque quasi. Facere aliquid, velit, ut, ipsum quam dolorum
              rem nobis iste culpa corrupti corporis?
            </p>
            <Button className='button w-full sm:w-fit'>Explore now</Button>
          </div>
          <Image
            alt='hero'
            src='/assets/images/hero.png'
            width={1000}
            height={1000}
            className='max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]'
          />
        </div>
      </section>

      <section
        id='events'
        className='wrapper my-8 flex flex-col gap-8 md:gap-12'
      >
        <h2 className='h2-bold '>
          Lorem, ipsum dolor. lsfkahi sahfifi f ywfh
          <br /> Lorem ipsum dolor sit amet.gklwuio uoe uoe te
        </h2>
        <div className='flex w-full flex-col gap-5 md:flex-row'>
          SEARCH && CATEGORY
        </div>
      </section>
    </>
  );
}
