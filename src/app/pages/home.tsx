import { Navbar } from '../components/navbar'

export function Home() {
  return (
    <main className="flex h-[100rem] w-full flex-col items-center justify-center gap-12">
      <Navbar />
      <h1 className="font-mont text-3xl font-bold sm:text-6xl">
        React Workshop
      </h1>
    </main>
  )
}
