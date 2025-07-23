import { type Metadata } from 'next'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { RootLayout } from '@/components/RootLayout'
import imageMeeting from '@/images/meeting.jpg'

export const metadata: Metadata = {
  description:
    'Premium seating and textiles for the hospitality and casino industries.',
}

export default function Home() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            24A Reps: Premium Seating & Textiles for Hospitality and Casino Industries
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Elevating the experience with high-quality furniture and textiles for hotels, casinos, and event venues.
          </p>
          <Button href="/products" className="mt-8">
            Explore Our Products
          </Button>
        </FadeIn>
      </Container>

      <SectionIntro title="About 24A Reps" className="mt-24 sm:mt-32 lg:mt-40">
        <p>
          At 24A Reps, we specialize in providing premium furniture and textiles to the hospitality and casino
          industries. Our mission is to support these spaces with top-tier, durable, and stylish products that enhance
          every environment.
        </p>
      </SectionIntro>

      <SectionIntro title="Featured Products" className="mt-24 sm:mt-32 lg:mt-40" smaller>
        <p>We represent the finest in seating solutions and luxury textiles for the hospitality sector.</p>
      </SectionIntro>
      <Container className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <Image src={imageMeeting} alt="Featured" className="rounded-2xl" />
        <div className="space-y-4">
          <p className="text-base text-neutral-600">
            Chairs &ndash; Comfortable, durable, and stylish seating options for casinos and event spaces.
          </p>
          <p className="text-base text-neutral-600">
            Hospitality textiles &ndash; Fabrics for upholstery, drapes, linens, and more.
          </p>
          <Button href="/products">Explore Our Full Product Line</Button>
        </div>
      </Container>

      <SectionIntro title="Why Choose 24A Reps?" className="mt-24 sm:mt-32 lg:mt-40" smaller>
        <p>
          With over 15 years in the industry, we bring you carefully curated, high-quality products tailored to your
          needs. Whether it&apos;s providing the best in seating or offering durable, elegant textiles, we ensure the perfect
          solutions for your space.
        </p>
      </SectionIntro>
      <Container className="mt-8">
        <GridList>
          <GridListItem title="Quality Products from Trusted Brands">
            We partner with leading manufacturers known for durability and style.
          </GridListItem>
          <GridListItem title="Personalized Service">
            Our team works closely with you to tailor solutions to your space.
          </GridListItem>
          <GridListItem title="Fast, Reliable Delivery">
            We keep projects on schedule with prompt and secure shipping.
          </GridListItem>
          <GridListItem title="Industry Expertise">
            Over 15 years of experience in hospitality furnishings guides every project.
          </GridListItem>
        </GridList>
      </Container>
    </RootLayout>
  )
}
