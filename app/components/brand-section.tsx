import { MessageCircle, Users, Zap } from 'lucide-react'

export default function BrandSection() {
  return (
    <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-primary to-accent text-primary-foreground flex-col justify-between p-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-2xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48 blur-2xl" />

      <div className="relative z-10">
        {/* Logo/Brand */}
        <div className="flex items-center gap-3 mb-16">
          <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
            <MessageCircle className="w-6 h-6" />
          </div>
          <span className="text-2xl font-bold">ChatApp</span>
        </div>

        {/* Main Heading */}
        <div className="mb-12">
          <h2 className="text-5xl font-bold mb-4 leading-tight text-balance">
            Connect with anyone, anytime
          </h2>
          <p className="text-lg text-white/85 leading-relaxed">
            Experience instant messaging with privacy you can trust. Connect with friends, family, and colleagues in one beautiful app.
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-4">
          <FeatureItem
            icon={<MessageCircle className="w-5 h-5" />}
            title="Instant Messaging"
            description="Send messages in real-time with crystal clarity"
          />
          <FeatureItem
            icon={<Users className="w-5 h-5" />}
            title="Group Conversations"
            description="Create groups and chat with multiple people"
          />
          <FeatureItem
            icon={<Zap className="w-5 h-5" />}
            title="Lightning Fast"
            description="Messages delivered instantly, everywhere you go"
          />
        </div>
      </div>

      {/* Footer Stats */}
      <div className="relative z-10 grid grid-cols-3 gap-6 pt-12 border-t border-white/10">
        <div>
          <div className="text-3xl font-bold mb-1">5M+</div>
          <div className="text-sm text-white/70">Active Users</div>
        </div>
        <div>
          <div className="text-3xl font-bold mb-1">99.8%</div>
          <div className="text-sm text-white/70">Uptime</div>
        </div>
        <div>
          <div className="text-3xl font-bold mb-1">190+</div>
          <div className="text-sm text-white/70">Countries</div>
        </div>
      </div>
    </div>
  )
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex gap-3">
      <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center mt-1 backdrop-blur-sm">
        {icon}
      </div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-white/75">{description}</div>
      </div>
    </div>
  )
}
