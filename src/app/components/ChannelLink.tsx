import * as Icons from '@/app/components/Icons'
import { serverChannel } from '@/data'

export const ChannelLink = ({ channel }: { channel: serverChannel }) => {
  const iconName = channel.icon
  const Icon =
    iconName && iconName === 'Book'
      ? Icons.Book
      : iconName === 'Speaker'
      ? Icons.Speakerphone
      : Icons.Hashtag

  return (
    <a
      href="#"
      className="group mx-2 flex items-center rounded px-2 py-1 text-gray-300 hover:bg-gray-550/[0.16] hover:text-gray-100"
    >
      <>
        <Icon className="mr-1.5 h-5 w-5 text-gray-400" />
        {channel.label}
        <Icons.AddPerson className="ml-auto h-4 w-4 text-gray-200 opacity-0 hover:text-gray-100 group-hover:opacity-100" />
      </>
    </a>
  )
}
