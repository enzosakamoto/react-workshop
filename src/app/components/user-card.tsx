import { User } from '@/domain/entities/user'
import { useUsers } from '../hooks/use-users'
import { useTheme } from '../hooks/use-theme'
import { useEffect, useState } from 'react'

type UserCardProps = {
  user: User
  delay: number
}

export function UserCard({ user, delay }: UserCardProps) {
  const { deleteUser } = useUsers()
  const { theme } = useTheme()
  const [fade, setFade] = useState(false)

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this user?'))
      await deleteUser(user.id)
  }

  useEffect(() => {
    setTimeout(() => {
      setFade(true)
    }, 100)
  })

  return (
    <div
      style={{
        backgroundColor:
          theme === 'light' ? 'rgba(255, 255, 255, 1)' : 'rgba(30, 30, 30, 1)',
        color: theme === 'light' ? 'black' : 'white',
        transitionDelay: `${delay * 100 + 200}ms`
      }}
      onClick={handleDelete}
      className={`flex cursor-pointer flex-col items-center justify-center rounded-md p-4 drop-shadow-md transition-all duration-1000 md:p-6 ${fade ? 'opacity-100' : 'opacity-0'}`}
    >
      <h2 className="font-bold">{user.name}</h2>
      <p className="font-light">{user.email}</p>
    </div>
  )
}
