import { type Metadata } from 'next'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about 24A Reps.',
}

export default function About() {
  return (
    <RootLayout>
      <PageIntro eyebrow="About 24A Reps" title="About 24A Reps">
        <p>
          24A Reps was founded with a single mission: to provide the highest
          quality furniture and textiles for the hospitality and casino
          industries. With years of experience and an extensive network, we’ve
          established ourselves as a reliable partner in enhancing spaces across
          the globe. Our core values include trust, quality, and service. We
          strive to build lasting relationships by delivering top-tier products
          and unparalleled customer service.
        </p>
      </PageIntro>

      <SectionIntro title="Our Values" className="mt-24 sm:mt-32 lg:mt-40">
        <p>At 24A Reps, we believe in...</p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Quality">
            We partner only with the best manufacturers, ensuring that our
            products meet the highest standards.
          </GridListItem>
          <GridListItem title="Reliability">
            We understand the importance of punctuality in the hospitality
            industry, and we are committed to meeting deadlines.
          </GridListItem>
          <GridListItem title="Customer-Centric">
            We prioritize our clients’ needs and work hard to deliver customized
            solutions.
          </GridListItem>
        </GridList>
        <div className="mt-10">
          <Button href="/products">Learn More About Our Products</Button>
        </div>
      </Container>
    </RootLayout>
  )
}
