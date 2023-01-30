import Channels from './components/Channels'
import Servers from './components/Servers'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="flex h-screen text-gray-100">
          <Servers />
          <Channels />
          <main className="flex flex-1 flex-col bg-gray-700">{children}</main>
        </div>
      </body>
    </html>
  )
}
