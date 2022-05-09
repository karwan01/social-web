import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from 'react-twitter-embed'

function Widgets() {
  return (
    <div className="col-span-2 hidden px-4 lg:inline">
      <div className=" mt-2 flex  items-center space-x-2 rounded-full bg-slate-100 px-3 py-2">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 bg-transparent outline-none"
        />

        {/* <TwitterTimelineEmbed
          sourceType="profile"
          screenName="saurabhnemade"
          options={{ height: 400 }}
        /> */}
      </div>
    </div>
  )
}

export default Widgets
