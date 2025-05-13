import { MessageCircle } from "lucide-react"

interface WhatsAppButtonProps {
  phoneNumber: string
}

export default function WhatsAppButton({ phoneNumber }: WhatsAppButtonProps) {
  return (
    <a
      href={`https://wa.me/503${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors shadow-md hover:shadow-lg"
    >
      <MessageCircle className="mr-2" size={20} />
      <span className="font-medium">Pedir por WhatsApp</span>
    </a>
  )
}
