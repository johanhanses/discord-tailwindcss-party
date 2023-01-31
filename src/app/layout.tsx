import Servers from './components/Servers'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="flex h-screen text-gray-100">
          <Servers />
          {children}
        </div>
      </body>
    </html>
  )
}
