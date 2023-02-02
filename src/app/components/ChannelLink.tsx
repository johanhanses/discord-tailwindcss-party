import * as Icons from '@/app/components/Icons'
import { serverChannel } from '@/data'
import Link from 'next/link'

export const ChannelLink = ({
  channel,
  activeChannelId
}: {
  channel: serverChannel
  activeChannelId: number
}) => {
  const active = activeChannelId === channel.id
  const iconName = channel.icon
  const Icon =
    iconName && iconName === 'Book'
      ? Icons.Book
      : iconName === 'Speaker'
      ? Icons.Speakerphone
      : Icons.Hashtag
  const state = active ? 'active' : channel.unread ? 'inactiveUnread' : 'inactiveRead'
  const classes = {
    active: 'bg-gray-550/[0.32] text-white',
    inactiveUnread: 'text-white hover:bg-gray-550/[0.16] active:bg-gray-550/[0.24]',
    inactiveRead:
      'text-gray-300 hover:bg-gray-550/[0.16] hover:text-gray-100 active:bg-gray-550/[0.24]'
  }

  return (
    <Link
      href={`/servers/1/channel/${channel.id}`}
      className={`${classes[state]} group relative mx-2 flex items-center rounded px-2 py-1`}
    >
      <>
        {state === 'inactiveUnread' && (
          <div className="absolute -left-2 h-2 w-1 rounded-r-full bg-white"></div>
        )}
        <Icon className="mr-1.5 h-5 w-5 text-gray-400" />
        {channel.label}
        <Icons.AddPerson className="ml-auto h-4 w-4 text-gray-200 opacity-0 hover:text-gray-100 group-hover:opacity-100" />
      </>
    </Link>
  )
}
