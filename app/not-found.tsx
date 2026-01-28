import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Not Found | Sanasya Bakery',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-chocolate mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          The page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-caramel text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
        >
          Back to Home
        </a>
      </div>
    </div>
  )
}
