"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Tech I work with",
  logos = [],
}: Logos3Props) => {
  return (
    <section className="py-4">
      {heading && (
        <h3 className="mb-6 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {heading}
        </h3>
      )}
      <div className="relative mx-auto flex items-center justify-center">
        <Carousel
          opts={{ loop: true }}
          plugins={[AutoScroll({ playOnInit: true, speed: 0.6 })]}
        >
          <CarouselContent className="ml-0">
            {logos.map((logo) => (
              <CarouselItem
                key={logo.id}
                className="flex basis-1/4 justify-center pl-0 sm:basis-1/5 md:basis-1/6"
              >
                <div className="mx-4 flex shrink-0 items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white p-2 shadow-sm">
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className={logo.className ?? "h-full w-full object-contain"}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-y-0 left-0 w-10 bg-linear-to-r from-background to-transparent" />
        <div className="absolute inset-y-0 right-0 w-10 bg-linear-to-l from-background to-transparent" />
      </div>
    </section>
  );
};

export { Logos3 };
