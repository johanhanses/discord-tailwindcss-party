export default function ServerOne({ params }: { params: { sid: string } }) {
  return (
    <>
      <div className="flex w-60 flex-col bg-gray-800">
        <div className="flex h-12 items-center px-3 font-title text-white shadow-sm">
          Server {params.sid}
        </div>
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
