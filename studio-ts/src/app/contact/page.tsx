import { useId } from 'react'
import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { RootLayout } from '@/components/RootLayout'

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}


function ContactForm() {
  return (
    <FadeIn className="lg:order-last">
      <form>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Get in Touch
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <label htmlFor="product" className="text-base/6 text-neutral-500">
              Product Inquiry
            </label>
            <select
              id="product"
              name="product"
              className="mt-3 w-full border border-neutral-300 bg-transparent px-6 py-4 text-base/6 text-neutral-950"
            >
              <option value="chairs">Chairs</option>
              <option value="textiles">Textiles</option>
            </select>
          </div>
          <TextInput label="Message" name="message" />
        </div>
        <Button type="submit" className="mt-10">
          Send Message
        </Button>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Contact Details
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        We&apos;d love to hear from you! Contact us for product inquiries or any
        questions you may have.
      </p>

      <div className="mt-10 space-y-4 text-sm text-neutral-600">
        <p>
          <strong className="text-neutral-950">Phone:</strong> (123) 456-7890
        </p>
        <p>
          <strong className="text-neutral-950">Email:</strong>{' '}
          <Link href="mailto:info@24areps.com" className="hover:text-neutral-950">
            info@24areps.com
          </Link>
        </p>
        <p>
          <strong className="text-neutral-950">Address:</strong> 123 Placeholder
          St., Las Vegas, NV
        </p>
      </div>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Reach out for product inquiries or any questions you may have.',
}

export default function Contact() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Contact Us" title="Get in Touch">
        <p>We’d love to hear from you.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </RootLayout>
  )
}
