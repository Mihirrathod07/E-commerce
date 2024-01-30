
import {Link} from 'react-router-dom'

const page404 = () => {
  return (
    <div>
      <h1> 404 page</h1>
      <p>NOT FOUND</p>
      <Link to="/">Go to home page</Link>
    </div>
  )
}

export default page404
