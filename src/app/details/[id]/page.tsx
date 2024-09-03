// app/details/page.tsx
"use client";

import React from 'react';
import { notFound } from 'next/navigation';
import Product from '@/app/ProductInterFace';
import { useRouter } from 'next/navigation';

interface Params {
  params: {
    id: number;
  };
}

export default async function DetailsPage({ params: { id } }: Params) {
  const router = useRouter();
  let data: Product;

  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    data = await res.json();
  } catch (error) {
    console.error('Failed to fetch product:', error);
    notFound();
    return null;
  }

  if (id > 20) {
    notFound();
    return null;
  }

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8">
      <section className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex justify-center items-center">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div>
            <h1 className=" text-xl sm:text-3xl font-bold text-gray-800 mb-4">{data.title}</h1>
            <p className=" text-lg sm:text-xl font-semibold text-blue-600 mb-4">${data.price}</p>
            <p className="text-xl font-semibold text-orange-300 mb-4">Rating: <span className='text-blue-400'>{data.rating.rate}</span>/<small>5</small> </p>
            <p className="md:text-lg text-sm text-gray-700 mb-6">{data.description}</p>
            <button
              className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={() => alert('Added to cart!')}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
