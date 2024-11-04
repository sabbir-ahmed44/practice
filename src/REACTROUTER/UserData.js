import { useParams } from 'react-router-dom'

export const UserData = () => {
  const { userId } = useParams()
  return <div>Details about user {userId}</div>
}