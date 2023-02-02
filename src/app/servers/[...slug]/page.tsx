import { ChannelList } from '@/app/components/ChannelList'
import * as Icon from '@/app/components/Icons'
import { allData } from '@/data'

const getServerData = (id: string) => {
  return allData.filter((d) => d.serverId === id)
}

export default function ServerOne({ params: { slug } }: { params: { slug: string[] } }) {
  const sid = slug.at(0)
  const cid = slug.at(-1)

  const [data] = getServerData(sid as string)
  const channel = data.categories.reduce(prev, (next) => {}, {})
  console.log(channel)

  if (!data) return <>No data for this server</>
  return (
    <>
      <div className="flex w-60 flex-col bg-gray-800">
        <button className="flex h-12 items-center px-4 font-title text-[15px] text-white shadow-sm transition hover:bg-gray-550/[0.16]">
          <div className="relative mr-1 h-4 w-4">
            <Icon.Verified className="absolute h-4 w-4 text-gray-550" />
            <Icon.Check className="absolute h-4 w-4" />
          </div>
          {data.label}
          <Icon.Chevron className="ml-auto h-[18px] w-[18px] opacity-80" />
        </button>
        <ChannelList
          data={data}
          cid={cid}
        />
      </div>

      <main className="flex flex-1 flex-col bg-gray-700">
        <div className="flex h-12 items-center px-3 shadow-sm">general</div>
        <div className="flex-1 space-y-4 overflow-y-scroll p-3">
          {[...Array(40)].map((_, i) => (
            <p key={i}>
              Message {i} Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor corrupti
              consequatur qui itaque? Mollitia ipsam nesciunt fugiat adipisci magnam quibusdam quae
              nihil, consectetur minus necessitatibus iusto ducimus ex rerum cumque? Unde atque
              soluta, et minus exercitationem nemo optio necessitatibus possimus ab quibusdam neque
              iusto voluptatibus itaque reiciendis enim facere placeat nam culpa esse obcaecati,
              consectetur suscipit. Ex quam nisi blanditiis!
            </p>
          ))}
        </div>
      </main>
    </>
  )
}
