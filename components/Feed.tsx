import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'

function Feed() {
  return (
    <div className="col-span-7 mt-3 px-5 lg:col-span-5 ">
      <div className="flex items-center justify-between">
        <p className="pb-0 text-xl font-bold">Home</p>
        <RefreshIcon className="h-5 w-5 cursor-pointer text-specialOrange transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>
    </div>
  )
}

export default Feed
