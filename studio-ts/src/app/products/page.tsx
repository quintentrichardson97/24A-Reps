import { type Metadata } from 'next'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { RootLayout } from '@/components/RootLayout'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore our seating and textile offerings.',
}

export default function Products() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Products" title="Our Products">
        <p>We represent the finest in seating solutions and luxury textiles for the hospitality sector.</p>
      </PageIntro>

      <SectionIntro title="Chairs" className="mt-24 sm:mt-32 lg:mt-40" smaller>
        <p>
          We offer a range of chairs that are perfect for the hospitality and casino industries. With durability,
          comfort, and style, these chairs are designed to withstand high-traffic areas while maintaining elegance.
        </p>
      </SectionIntro>
      <Container className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <Image src={imageMeeting} alt="Chairs" className="rounded-2xl" />
        <div>
          <p className="text-base text-neutral-600">
            Comfortable, durable, and stylish seating options for casinos and event spaces.
          </p>
          <Button href="/contact" className="mt-4">
            Request More Information
          </Button>
        </div>
      </Container>

      <SectionIntro title="Hospitality Textiles" className="mt-24 sm:mt-32 lg:mt-40" smaller>
        <p>
          Our hospitality textiles are hand-picked to elevate any environment. Whether you need luxurious upholstery
          fabrics, drapery, or custom linens, we have the perfect solutions to complement your style and function.
        </p>
      </SectionIntro>
      <Container className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <Image src={imageWhiteboard} alt="Textiles" className="rounded-2xl" />
        <div>
          <p className="text-base text-neutral-600">Fabrics for upholstery, drapes, linens, and more.</p>
          <Button href="/contact" className="mt-4">
            Request a Sample
          </Button>
        </div>
      </Container>
    </RootLayout>
  )
}
