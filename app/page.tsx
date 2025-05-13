import Image from "next/image"
import { Instagram, Heart, MessageCircle } from "lucide-react"
import ProductCard from "@/components/product-card"
import TestimonialCard from "@/components/testimonial-card"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  const products = [
    {
      id: 1,
      name: "6 Mini Donuts Glaseados",
      description: "Deliciosos mini donuts con glaseado de diferentes sabores y decoraciones coloridas.",
      image: "/images/mini-donuts.jpg",
      price: "$2.50",
    },
    {
      id: 2,
      name: "Alfajores",
      description: "Suaves alfajores rellenos de dulce de leche y cubiertos con glass.",
      image: "/images/alfajores-detallitos.jpeg",
      price: "$3.00",
    },
    {
      id: 3,
      name: "3 Mini tartaletas",
      description: "Tartaletas rellenas de crema pastelera y frutas frescas.",
      image: "/images/mini-tartaletas.jpg",
      price: "$2.25",
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Claribel Alvarado",
      text: "¡Los mini donuts son increíbles! Perfectos para mi fiesta de cumpleaños. Todos quedaron encantados.",
      rating: 5,
    },
    {
      id: 2,
      name: "Benjamin Esquivel",
      text: "Pedí alfajores para regalar y fueron un éxito total. El sabor es casero y auténtico.",
      rating: 5,
    },
    {
      id: 3,
      name: "Esmeralda Perla",
      text: "Los postres son deliciosos y el servicio es excelente. Siempre cumplen con los tiempos de entrega.",
      rating: 5,
    },
  ]

  const whatsappNumber = "50376421894" // Número de WhatsApp

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-pink-300"></div>
          <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-yellow-200"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-pink-200"></div>
          <div className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full bg-purple-100"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="w-40 h-40 md:w-48 md:h-48 mb-6 relative">
              <Image src="/images/logo.png" alt="Detallitos para vos" fill className="object-contain" priority />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pink-500 mb-4 font-display">
              Detallitos para vos
            </h1>

            <div className="flex items-center justify-center mb-6">
              <Heart className="text-pink-500 mr-2" size={24} />
              <h2 className="text-2xl md:text-3xl font-medium text-pink-600 font-display">Hechos con amor</h2>
              <Heart className="text-pink-500 ml-2" size={24} />
            </div>

            <p className="text-lg md:text-xl text-pink-800 max-w-2xl mb-8">
              Deliciosos mini donuts, alfajores y postres artesanales para endulzar tus momentos especiales
            </p>

            <WhatsAppButton phoneNumber={whatsappNumber} />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white bg-opacity-70">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4 font-display">
              Nuestros Productos Destacados
            </h2>
            <p className="text-lg text-pink-800 max-w-2xl mx-auto">
              Cada producto está elaborado con ingredientes seleccionados y mucho cariño
            </p>
          </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-6 font-display">Sobre Nosotros</h2>
            <p className="text-lg text-pink-800 mb-6">
              En <span className="font-semibold">Detallitos para vos</span> creamos postres artesanales con recetas
              tradicionales y un toque de innovación. Cada producto está hecho a mano con ingredientes de calidad y
              mucho amor.
            </p>
            <p className="text-lg text-pink-800 mb-6">
              Nuestro objetivo es endulzar tus momentos especiales y crear experiencias memorables a través de nuestros
              deliciosos postres.
            </p>
            <div className="flex justify-center">
              <div className="w-32 h-1 bg-pink-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white bg-opacity-70">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4 font-display">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-lg text-pink-800 max-w-2xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mayor recompensa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-pink-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-6 font-display">Contáctanos</h2>
            <p className="text-lg text-pink-800 mb-8">
              ¿Tienes alguna pregunta o quieres hacer un pedido? ¡Escríbenos por WhatsApp!
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="mr-2" size={20} />
                <span className="font-medium">WhatsApp: {whatsappNumber}</span>
              </a>

              <a
                href="https://instagram.com/detallitos_paravos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                <Instagram className="mr-2" size={20} />
                <span className="font-medium">@detallitos_paravos</span>
              </a>
            </div>

            <p className="text-pink-800">Hacemos entregas en toda la ciudad. ¡Consulta por tu zona!</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-500 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-12 h-12 relative mr-3">
                <Image src="/images/logo.png" alt="Detallitos para vos" fill className="object-contain" />
              </div>
              <div>
                <p className="font-bold">Detallitos para vos</p>
                <p className="text-sm">Hechos con amor</p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-2">
                <a
                  href="https://instagram.com/detallitos_paravos"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <MessageCircle size={20} />
                </a>
              </div>
              <p className="text-sm">
                © {new Date().getFullYear()} Detallitos para vos. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}