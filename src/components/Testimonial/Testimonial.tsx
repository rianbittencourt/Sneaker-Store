import { useState } from "react";
import IconQMark from "../Icons/IconQMark";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Testimonials = [
  {
    id: 1,
    name: "Carlos Souza",
    job: "Sneaker Buyer",
    text: "I found the perfect pair of rare sneakers I'd been searching for months. The platform is super easy to use, and the buying process was smooth and secure.",
  },
  {
    id: 2,
    name: "Mariana Silva",
    job: "Sneaker Seller",
    text: "Selling my collectible sneakers has never been easier. I quickly listed my products and made great sales. I highly recommend this to anyone looking to sell with ease.",
  },
  {
    id: 3,
    name: "Pedro Lima",
    job: "Sneaker Buyer",
    text: "The variety of models available is amazing! I bought a limited-edition pair at a fair price, and the shipping was super fast. I'm very happy with my purchase.",
  },
];

export default function Testimonial() {
  const [show, setShow] = useState(0);
  const [isFading, setIsFading] = useState(false);

  function handleNext() {
    setIsFading(true);
    setTimeout(() => {
      setShow((prevShow) => (prevShow + 1) % Testimonials.length);
      setIsFading(false);
    }, 250);
  }

  function handlePrev() {
    setIsFading(true);
    setTimeout(() => {
      setShow(
        (prevShow) => (prevShow - 1 + Testimonials.length) % Testimonials.length
      );
      setIsFading(false);
    }, 250);
  }

  return (
    <section className="relative isolate overflow-hidden bg-white max-w-7xl flex mx-auto pb-10">
      <div className="bg-[url('/testimonial-bg.jpg')] w-full h-[20rem] flex items-center justify-around px-5">
        <IoIosArrowBack
          onClick={handlePrev}
          className="text-4xl text-stone-400 hover:text-stone-700 duration-200 cursor-pointer"
          data-testid="prev-button"
        />
        <div
          className={`flex flex-col items-center justify-center gap-10 max-w-2xl px-5 transition-opacity duration-300 ease-in-out ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="h-10 w-10">
            <IconQMark />
          </div>
          <p
            className="text-center text-stone-500 text-sm"
            data-testid="testimonial-text"
          >
            {Testimonials[show].text}
          </p>
          <div className="flex flex-col gap-2 items-center">
            <p
              className="text-stone-800 font-bold text-lg"
              data-testid="testimonial-name"
            >
              {Testimonials[show].name}
            </p>
            <p className="text-stone-500 text-sm" data-testid="testimonial-job">
              {Testimonials[show].job}
            </p>
          </div>
        </div>
        <IoIosArrowForward
          onClick={handleNext}
          className="text-4xl text-stone-400 hover:text-stone-700 duration-200 cursor-pointer"
          data-testid="next-button"
        />
      </div>
    </section>
  );
}
