export default function Home() {
  return (
    <>
      <div className="flex w-60 flex-col bg-gray-800">
        <div className="flex h-12 items-center px-3 font-title text-white shadow-md">Dashboard</div>
        <div className="flex-1 space-y-2 overflow-y-scroll p-3 font-medium text-gray-300">
          <p className="text-white">Friends</p>
        </div>
      </div>

      <main className="flex flex-1 flex-col bg-gray-700"></main>
    </>
  )
}

{
  /* <div className="max-w-lg">
  <div className="flex hover:bg-gray-800/30 px-4 py-1">
    <Image
      priority
      src={adam}
      alt="author thumbnail"
      className="w-10 h-10 rounded-full mr-4"
    />
    <div className="">
      <p className="flex items-baseline">
        <span className="text-green-500 mr-2 text-sm font-medium">adamwathan</span>
        <span className="text-xs text-gray-500">01/15/2021</span>
      </p>
      <p className="text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in odio quaerat officia, cumque rem
        dignissimos, deserunt non ab cupiditate magnam fugiat corrupti exercitationem assumenda impedit placeat quis
        commodi praesentium.
      </p>
    </div>
  </div>
  <div className="mt-1 hover:bg-gray-800/30 px-4 py-1">
    <p className="text-gray-300 pl-14">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in odio quaerat officia, cumque rem
      dignissimos, deserunt non ab cupiditate magnam fugiat corrupti exercitationem assumenda.
    </p>
  </div>
  <div className="mt-1 hover:bg-gray-800/30 px-4 py-1">
    <p className="text-gray-300 pl-14">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in odio quaerat officia, cumque rem
    </p>
  </div>
</div> */
}
