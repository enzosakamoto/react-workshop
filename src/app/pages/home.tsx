import { useEffect, useState } from 'react'
import { useTheme } from '../hooks/use-theme'
import { useUsers } from '../hooks/use-users'
import { UserCard } from '../components/user-card'

export function Home() {
  const { theme } = useTheme()
  const { fetchUsers, users } = useUsers()
  const [fade, setFade] = useState(false)

  useEffect(() => {
    fetchUsers()
    setTimeout(() => {
      setFade(true)
    }, 100)
  }, [])

  return (
    <main
      style={{
        backgroundColor:
          theme === 'light' ? 'rgba(255, 255, 255, 1)' : 'rgba(10, 10, 10, 1)',
        color: theme === 'light' ? 'black' : 'white'
      }}
      className="flex min-h-screen w-full flex-col items-center justify-center gap-12 py-24 transition-all duration-700 md:py-0"
    >
      <h1
        className={`text-center font-mont text-2xl font-bold transition-all duration-1000 sm:text-4xl ${fade ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'}`}
      >
        the simple clean
        <br />
        <br />
        シンプルでクリーンな
      </h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {users.map((user, index) => (
          <UserCard key={user.id} user={user} delay={index} />
        ))}
      </div>
    </main>
  )
}
