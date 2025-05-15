import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-800 py-12 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="Nawara Labs Logo" width={24} height={24} className="w-6 h-6" />
              <h3 className="text-lg font-bold text-white">Nawara Labs</h3>
            </div>
            <p className="text-slate-500 max-w-md">
              We build systems that automate the boring stuff so small businesses can focus on serving their customers.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-slate-400">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-500 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-500 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-500 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-slate-400">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-slate-500 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-500 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-900">
          <p className="text-slate-600 text-sm text-center">
            © {new Date().getFullYear()} Nawara Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
