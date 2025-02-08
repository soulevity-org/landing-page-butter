import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-700 to-green-900 text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4 text-green-300">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="hover:text-green-300 transition duration-300">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/updates" className="hover:text-green-300 transition duration-300">
                  Updates
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-green-300">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-green-300 transition duration-300">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-green-300">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-green-300 transition duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-green-300 transition duration-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-green-300">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://twitter.com" className="hover:text-green-300 transition duration-300">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="hover:text-green-300 transition duration-300">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-green-200">© 2025 Soulevity. All rights reserved.</div>
      </div>
    </footer>
  )
}

