import AppLink from './AppLink'
import DiscordIcon from './DiscordIcon'

export default function Servers() {
  return (
    <div className="space-y-2 overflow-y-scroll bg-gray-900 p-3">
      <AppLink href="/">
        <DiscordIcon className="h-5 w-7" />
      </AppLink>
      <AppLink href="/servers/1">S1</AppLink>

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
