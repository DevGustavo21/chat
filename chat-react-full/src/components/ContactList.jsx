import Contact from './Contact'
import {useState, useEffect} from 'react'

export default function ContactList({channels}) {
  const [activeChannelId, setActiveChannelId] = useState(0)
  const [notification, setNotification] = useState(0)

  const increment = () => {
    setNotification(notification + 1)
  }

  useEffect(() => {
    const storedActiveChannelId = localStorage.getItem('activeChannelId')
    if (storedActiveChannelId) {
      setActiveChannelId(Number(storedActiveChannelId))
    }
  }, [])

  const handleChannelClick = (channelId) => {
    setActiveChannelId(channelId)
    localStorage.setItem('activeChannelId', channelId)
  }

  return (
    <div className="flex-1 space-y-4 overflow-y-scroll p-4">
      {channels.map((channel) => (
        <>
          <div className="relative flex">
            <Contact
              key={channel.id}
              channel={channel}
              // img={channel.img} Aqui quise llamar imagen desde la bd pero se me complicó, pero esa era la idea jaja
              active={channel.id === activeChannelId}
              onClick={() => handleChannelClick(channel.id)}
            />

            <div className="absolute right-4 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white">
              {notification}
            </div>
          </div>
        </>
      ))}
    </div>
  )
}
