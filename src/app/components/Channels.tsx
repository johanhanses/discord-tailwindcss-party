export default function Channels() {
  return (
    <div className="bg-gray-800 w-60 flex flex-col">
      <div className="px-3 h-12 flex items-center shadow-md font-title text-white">Tailwind CSS</div>
      <div className="p-3 flex-1 overflow-y-scroll space-y-2 text-gray-300 font-medium">
        <p className="text-white">Channel (unread)</p>
        <p className="text-white">Channel (unread)</p>

        {[...Array(40)].map((_, i) => (
          <p key={i}>Channel {i}</p>
        ))}
      </div>
    </div>
  )
}
