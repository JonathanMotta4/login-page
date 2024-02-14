import Link from 'next/link'
export default function Home() {
  return (
    <div className="w-full h-screen bg-slate-900 text-slate-100">
      <ul>
        <li>
          <Link href={'/register'}>Register</Link>
        </li>
      </ul>
    </div>
  )
}
