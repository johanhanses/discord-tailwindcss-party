export default function Channels() {
  return (
    <div className="flex w-60 flex-col bg-gray-800">
      <div className="flex h-12 items-center px-3 font-title text-white shadow-md">Tailwind CSS</div>
      <div className="flex-1 space-y-2 overflow-y-scroll p-3 font-medium text-gray-300">
        <p className="text-white">Channel (unread)</p>
        <p className="text-white">Channel (unread)</p>

        {[...Array(40)].map((_, i) => (
          <p key={i}>Channel {i}</p>
        ))}
      </div>
    </div>
  )
}
