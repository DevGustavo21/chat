import {Link} from 'react-router-dom'

export default function Contact({channel, active, onClick}) {
  return (
    <div
      className={`border-b-[1px] border-white py-2 font-bold text-slate-700 duration-300 ease-in-out ${
        active ? 'active' : ''
      }`}
    >
      <Link to={`/rooms/${channel.id}`} onClick={onClick}>
        {/* {channel.img} */}
        {channel.channel_name}
      </Link>
    </div>
  )
}
