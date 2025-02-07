
import { useParams } from 'react-router-dom'

const UserPage = () => {
    const {id} = useParams()
  return (
 <h1>User {id}</h1>
  )
}

export default UserPage