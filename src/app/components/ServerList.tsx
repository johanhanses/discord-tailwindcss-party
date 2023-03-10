import Image from 'next/image'
import mirageLogo from '../../../public/server-logos/mirage.png'
import nextLogo from '../../../public/server-logos/next.png'
import tailwindLogo from '../../../public/server-logos/tailwind.png'
import { Discord } from './Icons'
import ServerLink from './ServerLink'

const servers = [
  { id: '1', img: tailwindLogo },
  { id: '2', img: nextLogo },
  { id: '3', img: mirageLogo }
]

export default function ServerList() {
  return (
    <div className="space-y-2 overflow-y-scroll bg-gray-900 p-3">
      <ServerLink href="/">
        <Discord className="h-5 w-7" />
      </ServerLink>

      <hr className="mx-2 rounded border-t-2 border-t-white/[.06]" />

      {servers.map((server) => (
        <>
          <ServerLink
            href={`/servers/${server.id}`}
            key={server.id}
            serverid={Number(server.id)}
          >
            <Image
              src={server.img}
              priority
              alt="thumbnail image"
            />
          </ServerLink>
        </>
      ))}
    </div>
  )
}
