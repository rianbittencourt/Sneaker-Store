import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Testimonial from './Testimonial';

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

describe('Testimonial component', () => {
  it('initial state of show and isFading', () => {
    const { getByTestId } = render(<Testimonial />);
    expect(getByTestId('testimonial-text')).toHaveTextContent(
      Testimonials[0].text,
    );
    expect(getByTestId('testimonial-name')).toHaveTextContent(Testimonials[0].name);
    expect(getByTestId('testimonial-job')).toHaveTextContent(Testimonials[0].job);
    expect(getByTestId('prev-button')).not.toHaveClass('opacity-0');
    expect(getByTestId('next-button')).not.toHaveClass('opacity-0');
  });

  it('handleNext function increments show ', async () => {
    const { getByTestId } = render(<Testimonial />);
    const nextButton = getByTestId('next-button');
    fireEvent.click(nextButton);
    await waitFor(() => {
      expect(getByTestId('testimonial-text')).toHaveTextContent(
        Testimonials[1].text,
      );
    });
    fireEvent.click(nextButton);
    await waitFor(() => {
      expect(getByTestId('testimonial-text')).toHaveTextContent(
        Testimonials[2].text,
      );
    });
    fireEvent.click(nextButton);
    await waitFor(() => {
      expect(getByTestId('testimonial-text')).toHaveTextContent(
        Testimonials[0].text,
      );
    });

  });

  it('handlePrev function decrements show ', async () => {
    const { getByTestId } = render(<Testimonial />);
    const prevButton = getByTestId('prev-button');
    fireEvent.click(prevButton);
    await waitFor(() => {
      expect(getByTestId('testimonial-text')).toHaveTextContent(
        Testimonials[2].text,
      );
    });
    fireEvent.click(prevButton);
    await waitFor(() => {
      expect(getByTestId('testimonial-text')).toHaveTextContent(
        Testimonials[1].text,
      );
    });
    fireEvent.click(prevButton);
    await waitFor(() => {
      expect(getByTestId('testimonial-text')).toHaveTextContent(
        Testimonials[0].text,
      );

    });
  });


});
