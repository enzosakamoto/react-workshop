import { Navbar } from '../components/navbar'
import { useTheme } from '../hooks/use-theme'

export function Home() {
  const { theme } = useTheme()
  return (
    <main
      style={{
        backgroundColor:
          theme === 'light' ? 'rgba(255, 255, 255, 1)' : 'rgba(10, 10, 10, 1)',
        color: theme === 'light' ? 'black' : 'white'
      }}
      className="flex h-[100rem] w-full flex-col items-center justify-center gap-12 transition-all duration-700"
    >
      <Navbar />
      <h1 className="text-center font-mont text-3xl font-bold sm:text-6xl">
        The simple clean
        <br />
        シンプルでクリーンな
        <br />
        تمیز کردن ساده
      </h1>
    </main>
  )
}
