import { Search, Plus } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
// import { Button } from '@/components/ui/button'
import { Input } from './ui/input'
import { Button } from './ui/button';
import { useAppDispatch } from '~/redux/hooks/useRedux';
import { logout } from '~/redux/slice/userSlice';

interface Conversation {
  id: string
  name: string
  avatar: string
  lastMessage: string
  timestamp: string
  unread: boolean
}

const conversations: Conversation[] = [
  {
    id: '1',
    name: 'Creative Director',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    lastMessage: 'Great work on the slides! Love it! Just one more thing...',
    timestamp: '13:53',
    unread: true,
  },
  {
    id: '2',
    name: 'Alex Johnson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    lastMessage: 'See you tomorrow at the meeting',
    timestamp: '12:30',
    unread: false,
  },
  {
    id: '3',
    name: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    lastMessage: 'The designs look amazing',
    timestamp: '11:15',
    unread: false,
  },
  {
    id: '4',
    name: 'Marcus Rivera',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    lastMessage: 'Perfect, thanks for the update',
    timestamp: '10:45',
    unread: false,
  },
  {
    id: '5',
    name: 'Emma Wilson',
    avatar: 'https://images.unsplash.com/photo-1502378735452-bc7416ce6dfa?w=400&h=400&fit=crop',
    lastMessage: 'Looking forward to the presentation',
    timestamp: '09:20',
    unread: false,
  },
]

interface SidebarProps {
  selectedConversation: string
  onSelectConversation: (id: string) => void
}

export function Sidebar({
  selectedConversation,
  onSelectConversation,
}: SidebarProps) {
  const dispatch = useAppDispatch();
  return (
    <div className="w-80 max-w-sm flex flex-col bg-white border-r border-gray-200 shadow-sm">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-foreground">Messenger</h1>
          <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8 rounded-full text-primary hover:bg-primary/10"
          >
            <Plus className="h-5 w-5" />
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search Messenger"
            className="pl-10 bg-gray-100 border-0 rounded-full focus:bg-gray-100 focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        {conversations.map((conversation) => (
          <button
            key={conversation.id}
            onClick={() => onSelectConversation(conversation.id)}
            className={`w-full px-3 py-2 flex items-start gap-3 hover:bg-gray-50 transition-colors ${
              selectedConversation === conversation.id ? 'bg-purple-50' : ''
            }`}
          >
            <div className="relative flex-shrink-0">
              <Avatar className="h-12 w-12">
                <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                <AvatarFallback>{conversation.name.split(' ')[0][0]}</AvatarFallback>
              </Avatar>
              <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white" />
            </div>
            <div className="flex-1 min-w-0 text-left">
              <div className="flex items-center justify-between gap-2 mb-1">
                <p
                  className={`text-sm font-semibold truncate ${
                    conversation.unread ? 'text-foreground' : 'text-gray-700'
                  }`}
                >
                  {conversation.name}
                </p>
                <span className="text-xs text-gray-400 flex-shrink-0">
                  {conversation.timestamp}
                </span>
              </div>
              <p className="text-xs text-gray-500 truncate">
                {conversation.lastMessage}
              </p>
            </div>
            {conversation.unread && (
              <div className="h-2 w-2 bg-primary rounded-full flex-shrink-0 mt-2" />
            )}
          </button>
        ))}
      </div>
            <Button onClick={() => dispatch(logout())}>Logout</Button>
    </div>
  )
}
