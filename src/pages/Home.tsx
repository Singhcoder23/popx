// src/pages/Home.tsx
import { useNavigate } from "react-router-dom"

export default function Home() {
  const nav = useNavigate()

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">Welcome to PopX 👋</h1>
        <p className="text-gray-600 mb-8">
          Choose an option to continue
        </p>

        <div className="space-y-4">
          <button
            onClick={() => nav("/register")}
            className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Create an Account
          </button>

          <button
            onClick={() => nav("/login")}
            className="w-full px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
          >
            Already Registered? Sign in
          </button>
        </div>
      </div>
    </div>
  )
}
