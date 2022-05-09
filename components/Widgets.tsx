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
    <div className="px-4">
      <div className=" mt-2 flex  items-center space-x-2 rounded-full bg-slate-100 px-3 py-2">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 bg-transparent outline-none"
        />
      </div>

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="Karwan Khdhr"
        options={{ height: 1000 }}
      />
    </div>
  )
}

export default Widgets
