"use client";

import Image from "next/image";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrderClick = () => {
    const message = `Hola, me gustaría ordenar el producto: ${product.name} (${product.price}).`;
    const whatsappUrl = `https://wa.me/50376421894?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-pink-200 hover:border-pink-300">
        <div
          className="relative h-60 w-full cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-pink-600">{product.name}</h3>
            <span className="font-medium text-pink-500">{product.price}</span>
          </div>
          <p className="text-pink-800 mb-4">{product.description}</p>
          <button
            onClick={handleOrderClick}
            className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
          >
            Ordenar por WhatsApp
          </button>
        </CardContent>
      </Card>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)} // Cierra el modal al hacer clic en el fondo
        >
          <div
            className="relative bg-white p-4 rounded-lg max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del modal cierre el modal
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-black bg-gray-200 rounded-full p-2 hover:bg-gray-300"
            >
              ✕
            </button>
            <Image
              src={product.image}
              alt={product.name}
              width={800}
              height={800}
              className="object-contain w-full h-auto"
              onClick={() => setIsModalOpen(false)} 
            />
          </div>
        </div>
      )}
    </>
  );
}