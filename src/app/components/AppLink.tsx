'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface AppLinkProps extends LinkProps {
  children: ReactNode
}

export default function AppLink(props: AppLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === props.href

  return (
    <div className="group relative rounded-full">
      <div className="absolute -left-3 flex h-full items-center">
        <div
          className={`${
            isActive ? 'h-10' : 'h-5 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100'
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
