"use client" // Convierte este componente en un Client Component

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface Product {
  id: number
  name: string
  description: string
  image: string
  price: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleOrderClick = () => {
    const message = `Hola, me gustaría ordenar el producto: ${product.name} (${product.price}).`
    const whatsappUrl = `https://wa.me/50376421894?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-pink-200 hover:border-pink-300">
      <div className="relative h-60 w-full">
        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
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
  )
}