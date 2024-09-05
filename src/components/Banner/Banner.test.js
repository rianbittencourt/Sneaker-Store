import React from 'react';
import { render, screen, waitFor, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Banner from './Banner';

const mockFetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      sneakers: [
        { main_picture_url: 'http://example.com/image1.jpg', name: 'Test Product 1' },
        { main_picture_url: 'http://example.com/image2.jpg', name: 'Test Product 2' },
        { main_picture_url: 'http://example.com/image3.jpg', name: 'Test Product 3' }
      ]
    })
  })
);

global.fetch = mockFetch;

describe('Banner Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    mockFetch.mockClear();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('renders loading state initially', async () => {
    render(<Banner />);
    expect(await screen.findByTestId('loading-placeholder')).toBeInTheDocument();
  });

  test('renders product information after data is loaded', async () => {
    render(<Banner />);

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith("/api/hello");
    });

    await waitFor(() => {
      expect(screen.getByText('Test Product 1')).toBeInTheDocument();
    });

    expect(screen.getByText('BUY NOW')).toBeInTheDocument();
    expect(screen.getByTestId('product-image')).toHaveStyle({
      backgroundImage: 'url(http://example.com/image1.jpg)'
    });
  });

  test('changes product every 5 seconds', async () => {
    render(<Banner />);

    await waitFor(() => {
      expect(screen.getByText('Test Product 1')).toBeInTheDocument();
    });

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    await waitFor(() => {
      expect(screen.getByText('Test Product 2')).toBeInTheDocument();
    });

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    await waitFor(() => {
      expect(screen.getByText('Test Product 3')).toBeInTheDocument();
    });
  });

  test('allows manual product selection', async () => {
    render(<Banner />);

    await waitFor(() => {
      expect(screen.getByText('Test Product 1')).toBeInTheDocument();
    });

    const productButtons = screen.getAllByTestId('product-selector');
    fireEvent.click(productButtons[1]);

    await waitFor(() => {
      expect(screen.getByText('Test Product 2')).toBeInTheDocument();
    });

    fireEvent.click(productButtons[2]);

    await waitFor(() => {
      expect(screen.getByText('Test Product 3')).toBeInTheDocument();
    });
  });

  test('handles API error gracefully', async () => {
    mockFetch.mockImplementationOnce(() => Promise.reject(new Error('API error')));

    render(<Banner />);

    await waitFor(() => {
      expect(screen.getByTestId('error-message')).toBeInTheDocument();
    });
  });

  test('handles empty product list', async () => {
    mockFetch.mockImplementationOnce(() => 
      Promise.resolve({
        json: () => Promise.resolve({ sneakers: [] })
      })
    );

    render(<Banner />);

    await waitFor(() => {
      expect(screen.getByTestId('no-products')).toBeInTheDocument();
    });
  });
});