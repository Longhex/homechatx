// src/components/ChatWidget.tsx

"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ArrowUp } from "lucide-react"

interface Message {
  id: number
  type: "customer" | "agent"
  content: string
  image?: string
}

const conversationScript: (Message & { delay: number })[] = [
  { id: 1, type: "customer", content: "Chào shop, cho em hỏi áo này còn size M không ạ?", delay: 1000 },
  { id: 2, type: "agent", content: "Chào bạn! Em xin phép kiểm tra kho hàng cho bạn nhé. Bạn muốn xem mẫu áo nào ạ?", delay: 2000 },
  { id: 3, type: "customer", content: "Áo thun trắng basic ý ạ", delay: 1000 },
  { id: 4, type: "agent", content: "", image: "/white-shirt.jpg", delay: 1000 },
  { id: 5, type: "agent", content: "Dạ vâng! Áo thun trắng basic này shop còn size M ạ. Chất liệu cotton 100%, form dáng chuẩn, rất phù hợp cho mùa hè. Giá 299k, đang có chương trình giảm 20% còn 239k ạ.", delay: 2500 },
  { id: 6, type: "customer", content: "Vậy ship về Hà Nội mất bao lâu ạ?", delay: 2000 },
  { id: 7, type: "agent", content: "Dạ nếu chị ở nội thành Hà Nội thì 2-3 giờ là có hàng ạ. Ngoài thành xa thì khoảng 1-3 ngày. Bên em miễn phí ship cho đơn từ 500k ạ.", delay: 2000 },
  { id: 8, type: "customer", content: "Ok, chị đặt 1 bộ size M. Giao tại 123 Trần Duy Hưng, Cầu Giấy, HN", delay: 2500 },
  { id: 9, type: "agent", content: "Dạ vâng! Em đã ghi nhận đơn hàng:\n\n📦 Áo thun trắng basic - Size M\n💰 Giá: 239k (đã giảm 20%)\n📍 Địa chỉ: 123 Trần Duy Hưng, Cầu Giấy, HN\n🚚 Giao hàng: 2-3 giờ\n\nTổng thanh toán: 239k + 30k ship = 269k\n\nChị vui lòng giữ máy, bên em sẽ gọi xác nhận trong 5 phút ạ!", delay: 3000 },
]

function TypingIndicator() {
  return (
    <div className="flex gap-2 justify-start">
      <Avatar className="h-8 w-8 bg-primary/10 flex-shrink-0">
        <AvatarFallback className="bg-primary/10 text-primary text-xs">AI</AvatarFallback>
      </Avatar>
      <div className="bg-gray-200 rounded-lg p-3 flex items-center gap-1.5">
        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
      </div>
    </div>
  )
}

export function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // ✅ ĐÃ SỬA: scroll mượt, không hiện thanh scroll
  const scrollToBottom = () => {
    const container = messagesEndRef.current
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  useEffect(() => {
    if (currentMessageIndex >= conversationScript.length) return

    const currentMsg = conversationScript[currentMessageIndex]
    const timer = setTimeout(() => {
      if (currentMsg.type === "agent") {
        setIsTyping(true)
        setTimeout(() => {
          setIsTyping(false)
          setMessages((prev) => [...prev, currentMsg])
          setCurrentMessageIndex((prev) => prev + 1)
        }, 1500)
      } else {
        setMessages((prev) => [...prev, currentMsg])
        setCurrentMessageIndex((prev) => prev + 1)
      }
    }, currentMsg.delay)

    return () => clearTimeout(timer)
  }, [currentMessageIndex])

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage: Message = { id: Date.now(), type: "customer", content: inputValue }
      setMessages([...messages, newMessage])
      setInputValue("")
    }
  }

  return (
    <div className="w-full max-w-[300px] h-[500px] bg-white rounded-3xl border flex flex-col overflow-hidden">
      <div className="bg-white border-b p-4 flex items-center gap-3">
        <Avatar className="h-10 w-10">
          <AvatarFallback className="bg-black text-white font-semibold">AI</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold text-sm text-black">AI Agent</h3>
          <p className="text-xs text-gray-500 flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Đang hoạt động
          </p>
        </div>
      </div>

      {/* ✅ ĐÃ SỬA: thêm class scroll-hide để ẩn thanh cuộn */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 scroll-hide" ref={messagesEndRef}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-2 ${
              message.type === "customer" ? "justify-end" : "justify-start"
            } animate-in fade-in slide-in-from-bottom-2 duration-300`}
          >
            {message.type === "agent" && (
              <Avatar className="h-8 w-8 bg-black/10 flex-shrink-0">
                <AvatarFallback className="bg-black/5 text-black text-xs">AI</AvatarFallback>
              </Avatar>
            )}
            <div
              className={`max-w-[80%] rounded-lg p-3 text-sm leading-relaxed ${
                message.type === "customer" ? "bg-black text-white" : "bg-gray-100 text-black"
              }`}
            >
              {message.image && (
                <div className="mb-2 rounded overflow-hidden">
                  <img src={message.image || "/placeholder.svg"} alt="Product" className="w-full h-auto" />
                </div>
              )}
              {message.content && <p className="whitespace-pre-line">{message.content}</p>}
            </div>
          </div>
        ))}
        {isTyping && <TypingIndicator />}
      </div>

      <div className="border-t p-4 bg-white">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Nhập tin nhắn..."
            className="flex-1"
          />
          <Button
            size="icon"
            onClick={handleSend}
            className="bg-black text-white hover:bg-black/90 rounded-full flex-shrink-0"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
