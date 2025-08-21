
import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <div className="card mx-auto">
      <h1 className="heading-xl">Welcome to PopX</h1>
      <p className="desc mt-3 max-w-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <div className="mt-8 space-y-3">
        <Link to="/register" className="btn btn-primary block text-center">Create Account</Link>
        <Link to="/login" className="btn btn-ghost block text-center">Already Registered? Login</Link>
      </div>
    </div>
  )
}
