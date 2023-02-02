'use client'

import * as Icon from '@/app/components/Icons'
import { ServerData } from '@/data'
import { useState } from 'react'
import { ChannelLink } from './ChannelLink'

export const ChannelList = ({ data, cid }: { data: ServerData; cid: string | undefined }) => {
  const [closedCategories, setClosedCategories] = useState<number[]>([])

  const toggleCategory = (id: number) => {
    if (!closedCategories.includes(id)) setClosedCategories([...closedCategories, id])
    else setClosedCategories((current) => current.filter((c) => c !== id))
  }

  return (
    <div className="flex-1 space-y-[21px] overflow-y-scroll pt-3 font-medium text-gray-300">
      {data.categories.map((category) => (
        <div
          className="mt-[21px]"
          key={category.id}
        >
          {category.label && (
            <button
              onClick={() => toggleCategory(category.id)}
              className="flex w-full items-center px-0.5 font-title text-xs uppercase tracking-wide hover:text-gray-100"
            >
              <Icon.Arrow
                className={`${
                  closedCategories.includes(category.id) ? '-rotate-90' : ''
                } mr-0.5 h-3 w-3 transition duration-300`}
              />
              {category.label}
            </button>
          )}
          <div className="mt-[5px] space-y-0.5">
            {category.channels
              .filter((channel) => !closedCategories.includes(category.id) || channel.unread)
              .map((channel) => (
                <ChannelLink
                  channel={channel}
                  key={channel.id}
                  activeChannelId={Number(cid)}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}
