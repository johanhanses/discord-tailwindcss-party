import { CheckIcon, ChevronIcon, VerifiedIcon } from '@/app/components/Icons'

export default function ServerOne({ params }: { params: { sid: string } }) {
  return (
    <>
      <div className="flex w-60 flex-col bg-gray-800">
        <button className="flex h-12 items-center px-4 font-title text-[15px] text-white shadow-sm transition hover:bg-gray-550/[0.16]">
          <div className="relative mr-1 h-4 w-4">
            <VerifiedIcon className="absolute h-4 w-4 text-gray-550" />
            <CheckIcon className="absolute h-4 w-4" />
          </div>
          Tailwind CSS
          <ChevronIcon className="ml-auto h-[18px] w-[18px] opacity-80" />
        </button>

        <div className="flex-1 space-y-2 overflow-y-scroll p-3 font-medium text-gray-300">
          <p className="text-white">Channel (unread)</p>
          <p className="text-white">Channel (unread)</p>

          {[...Array(40)].map((_, i) => (
            <p key={i}>Channel {i}</p>
          ))}
        </div>
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
