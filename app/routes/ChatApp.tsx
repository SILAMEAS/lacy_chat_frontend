import type { Route } from "./+types/ChatApp";
import { useState } from 'react'
import { Sidebar } from "~/components/side-bar";
import { ChatWindow } from "~/components/chat-window";
import { useProvider } from "~/libs/hooks/useProvider";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Chat App" },
    { name: "description", content: "Welcome to the Chat App page!" },
  ];
}



export default function ChatApp() {
  const [selectedConversation, setSelectedConversation] = useState('1');
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar
        selectedConversation={selectedConversation}
        onSelectConversation={setSelectedConversation}
      />
      <ChatWindow conversationId={selectedConversation} />
    </div>
  )
}

