import Image from 'next/image'
import mirageLogo from '../../../public/server-logos/mirage.png'
import nextLogo from '../../../public/server-logos/next.png'
import tailwindLogo from '../../../public/server-logos/tailwind.png'
import AppLink from './AppLink'
import DiscordIcon from './DiscordIcon'

const servers = [
  { id: '1', img: tailwindLogo },
  { id: '2', img: nextLogo },
  { id: '3', img: mirageLogo }
]

export default function Servers() {
  return (
    <div className="space-y-2 overflow-y-scroll bg-gray-900 p-3">
      <AppLink href="/">
        <DiscordIcon className="h-5 w-7" />
      </AppLink>

      <hr className="mx-2 rounded border-t-2 border-t-white/[.06]" />

      <AppLink href="/servers/1">
        <Image
          src={tailwindLogo}
          priority
          alt="tailwind logo"
        />
      </AppLink>

      {/* {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center"
        >
          {i + 1}
        </div>
      ))} */}
    </div>
  )
}
