'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname, useSelectedLayoutSegments } from 'next/navigation'
import { ReactNode } from 'react'

interface AppLinkProps extends LinkProps {
  children: ReactNode
  serverid?: number
}

export default function ServerLink(props: AppLinkProps) {
  const segments = useSelectedLayoutSegments()
  const serverIdFromPath = segments.at(1)?.split('', 1).at(0)
  const pathName = usePathname()
  const isActive = Number(serverIdFromPath) === props.serverid || props.href === pathName

  return (
    <div className="group relative rounded-full">
      <div className="absolute -left-3 flex h-full items-center">
        <div
          className={`${
            isActive
              ? 'h-10'
              : 'h-5 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100'
          } w-1 origin-left rounded-r bg-white transition-all duration-300`}
        />
      </div>
      <div className="group-active:translate-y-px">
        <Link
          {...props}
          className={`${
            isActive
              ? 'rounded-2xl bg-brand text-white'
              : 'rounded-3xl bg-gray-700 text-gray-100 group-hover:rounded-2xl group-hover:bg-brand group-hover:text-white'
          } flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden transition-all duration-300`}
        >
          {props.children}
        </Link>
      </div>
    </div>
  )
}
