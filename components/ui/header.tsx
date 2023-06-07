import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image'
import imgLogo from '../../public/images/logo.png'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4 p-2">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
            <Image className="rounded-full" src={imgLogo} width={100} height={100} alt="Logo" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <a
                  href="#sobre"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                 Sobre
                </a>
              </li>
              <li>
                <Link href="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Cursos
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
  
}
