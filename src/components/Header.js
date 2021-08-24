import Link from 'next/link'
import Image from 'next/image'
import logo from '@/img/joshpress-logo.png'

export default function Header({ withBlogLink }) {
  return (
    <header className="flex justify-between items-center py-10">
      <div>
        <Link href="/">
          <a aria-label="Josh Pollock">
            <Image src={logo} width="16" height="16" alt="JoshPress logo" />
            <div className="inline-flex px-4">Josh Pollock</div>
          </a>
        </Link>
      </div>

      {false !== withBlogLink ? (
        <div className="text-base leading-5">
          <Link href="/about">
            <a className="font-medium text-gray-500 hover:text-gray-700 pr-4">About</a>
          </Link>
          <Link href="/blog">
            <a className="font-medium text-gray-500 hover:text-gray-700">Blog &rarr;</a>
          </Link>
        </div>
      ) : (
        <div className="text-base leading-5">
          <Link href="/about">
            <a className="font-medium text-gray-500 hover:text-gray-700 pr-4">About</a>
          </Link>
          <Link href="/">
            <a className="font-medium text-gray-500 hover:text-gray-700">Back &rarr;</a>
          </Link>
        </div>
      )}
    </header>
  )
}
