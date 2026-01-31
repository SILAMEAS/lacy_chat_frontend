
import { useState, useRef, useEffect } from 'react'
import { Send, Phone, Video, Info } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Input } from './ui/input'

interface Message {
  id: string
  senderId: string
  senderName: string
  senderAvatar: string
  text: string
  timestamp: string
  isOwn: boolean
}

const conversationData: Record<string, { name: string; avatar: string; messages: Message[] }> =
  {
    '1': {
      name: 'Creative Director',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      messages: [
        {
          id: '1',
          senderId: '1',
          senderName: 'Creative Director',
          senderAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
          text: 'Hey! Are you here?',
          timestamp: '13:53',
          isOwn: false,
        },
        {
          id: '2',
          senderId: '2',
          senderName: 'You',
          senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
          text: 'Yeah...',
          timestamp: '13:53',
          isOwn: true,
        },
        {
          id: '3',
          senderId: '1',
          senderName: 'Creative Director',
          senderAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
          text: 'Great work on the slides!',
          timestamp: '13:53',
          isOwn: false,
        },
        {
          id: '4',
          senderId: '1',
          senderName: 'Creative Director',
          senderAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
          text: 'Love it! Just one more thing...',
          timestamp: '13:53',
          isOwn: false,
        },
      ],
    },
    '2': {
      name: 'Alex Johnson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      messages: [
        {
          id: '1',
          senderId: '1',
          senderName: 'Alex Johnson',
          senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
          text: 'See you tomorrow at the meeting',
          timestamp: '12:30',
          isOwn: false,
        },
      ],
    },
    '3': {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      messages: [
        {
          id: '1',
          senderId: '1',
          senderName: 'Sarah Chen',
          senderAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
          text: 'The designs look amazing',
          timestamp: '11:15',
          isOwn: false,
        },
      ],
    },
    '4': {
      name: 'Marcus Rivera',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      messages: [
        {
          id: '1',
          senderId: '1',
          senderName: 'Marcus Rivera',
          senderAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
          text: 'Perfect, thanks for the update',
          timestamp: '10:45',
          isOwn: false,
        },
      ],
    },
    '5': {
      name: 'Emma Wilson',
      avatar: 'https://images.unsplash.com/photo-1502378735452-bc7416ce6dfa?w=400&h=400&fit=crop',
      messages: [
        {
          id: '1',
          senderId: '1',
          senderName: 'Emma Wilson',
          senderAvatar: 'https://images.unsplash.com/photo-1502378735452-bc7416ce6dfa?w=400&h=400&fit=crop',
          text: 'Looking forward to the presentation',
          timestamp: '09:20',
          isOwn: false,
        },
      ],
    },
  }

interface ChatWindowProps {
  conversationId: string
}

export function ChatWindow({ conversationId }: ChatWindowProps) {
  const [inputValue, setInputValue] = useState('')
  const [messages, setMessages] = useState(conversationData[conversationId]?.messages || [])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    setMessages(conversationData[conversationId]?.messages || [])
    setInputValue('')
  }, [conversationId])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const newMessage: Message = {
      id: String(messages.length + 1),
      senderId: '2',
      senderName: 'You',
      senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      text: inputValue,
      timestamp: new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }),
      isOwn: true,
    }

    setMessages([...messages, newMessage])
    setInputValue('')
  }

  const conversation = conversationData[conversationId]

  return (
    <div className="flex-1 flex flex-col bg-gradient-to-br from-purple-50/30 via-white to-pink-50/30">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-white/80 backdrop-blur-sm flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={conversation?.avatar || "/placeholder.svg"} alt={conversation?.name} />
            <AvatarFallback>{conversation?.name.split(' ')[0][0]}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold text-foreground">{conversation?.name}</h2>
            <p className="text-xs text-gray-500">Active now</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost" className="h-9 w-9 rounded-full">
            <Phone className="h-5 w-5 text-primary" />
          </Button>
          <Button size="icon" variant="ghost" className="h-9 w-9 rounded-full">
            <Video className="h-5 w-5 text-primary" />
          </Button>
          <Button size="icon" variant="ghost" className="h-9 w-9 rounded-full">
            <Info className="h-5 w-5 text-primary" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'} gap-2`}
          >
            {!message.isOwn && (
              <Avatar className="h-8 w-8 flex-shrink-0">
                <AvatarImage src={message.senderAvatar || "/placeholder.svg"} alt={message.senderName} />
                <AvatarFallback>{message.senderName.split(' ')[0][0]}</AvatarFallback>
              </Avatar>
            )}
            <div className={`flex flex-col ${message.isOwn ? 'items-end' : 'items-start'}`}>
              <div
                className={`px-4 py-2 rounded-2xl max-w-xs lg:max-w-md break-words ${
                  message.isOwn
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-br-none'
                    : 'bg-gray-200 text-foreground rounded-bl-none'
                }`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
              <span className="text-xs text-gray-400 mt-1">{message.timestamp}</span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="px-6 py-4 border-t border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <Input
              placeholder="Enter Message"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage()
                }
              }}
              className="bg-gray-100 border-0 rounded-full py-3 px-4 focus:ring-2 focus:ring-primary focus:bg-white transition-colors"
            />
          </div>
          <Button
            onClick={handleSendMessage}
            size="icon"
            className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
