import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { SocialMedia } from '@/components/SocialMedia'

const navigation = [
  {
    title: 'Navigate',
    links: [
      { title: 'Home', href: '/' },
      { title: 'About Us', href: '/about' },
      { title: 'Products', href: '/products' },
      { title: 'Contact', href: '/contact' },
    ],
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}


function ContactInfo() {
  return (
    <div>
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Contact
      </h2>
      <ul className="mt-4 space-y-2 text-sm text-neutral-700">
        <li>
          <strong className="text-neutral-950">Email:</strong>{' '}
          <Link href="mailto:info@24areps.com" className="hover:text-neutral-950">
            info@24areps.com
          </Link>
        </li>
        <li>
          <strong className="text-neutral-950">Phone:</strong> (123) 456-7890
        </li>
      </ul>
      <SocialMedia className="mt-4" />
    </div>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <ContactInfo />
          </div>
        </div>
        <div className="mt-24 mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Logo className="h-8" fillOnHover />
          </Link>
          <p className="text-sm text-neutral-700">
            © 2025 24A Reps. All Rights Reserved.
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
