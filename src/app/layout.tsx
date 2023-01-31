import ServerList from './components/ServerList'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="flex h-screen text-gray-100">
          <ServerList />
          {children}
        </div>
      </body>
    </html>
  )
}
