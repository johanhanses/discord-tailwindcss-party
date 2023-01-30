'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface AppLinkProps extends LinkProps {
  children: ReactNode
}

export default function AppLink(props: AppLinkProps) {
  const pathname = usePathname()

  return (
    <Link
      {...props}
      className={`${
        pathname === props.href
          ? 'rounded-2xl bg-brand text-white'
          : 'rounded-3xl bg-gray-700 text-gray-100 hover:rounded-2xl hover:bg-brand hover:text-white'
      } flex h-12 w-12 cursor-pointer items-center justify-center    transition-all duration-300`}
    >
      {props.children}
    </Link>
  )
}
