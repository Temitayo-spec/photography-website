import Head from 'next/head';
import {
  HomeHeroSection,
  Topbar,
  HomeServicesSection,
  HomeLatestWorkSection,
  HomeExhibitionSection,
  HomeTestimonialSection,
} from '@/components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jacob Grønberg | Photographer & Visual artist</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Topbar />
        <HomeHeroSection />
        <HomeServicesSection />
        <HomeLatestWorkSection />
        <HomeExhibitionSection />
        <HomeTestimonialSection />
      </main>
    </>
  );
}
