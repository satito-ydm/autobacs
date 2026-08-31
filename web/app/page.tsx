import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer, StickyCTA } from "./components/Footer";
import {
  Articles,
  Banner,
  Booking,
  Branches,
  Brands,
  Categories,
  Faq,
  Highlights,
  LinkHub,
  MaxCard,
  PriceBlock,
  Promotions,
  Services,
  TrustBar,
  Why,
} from "./components/Sections";

export default function Home() {
  return (
    <div id="top">
      <Header />
      <main id="main">
        <Hero />
        <TrustBar />
        <Banner />
        <Categories />
        <Services />
        <Booking />
        <PriceBlock />
        <Highlights />
        <Promotions />
        <MaxCard />
        <Why />
        <Brands />
        <Branches />
        <Articles />
        <Faq />
        <LinkHub />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
