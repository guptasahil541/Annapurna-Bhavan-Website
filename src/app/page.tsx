import { Hero, About, MenuHighlights, Contact, CTA } from "@/components";

export default function Home() {
  return (
    <main>
      <Hero
        imageSrc="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=2536&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        altText="hero background"
        height={1080}
        width={1920}
        containerHeight="100svh"
      >
        <h1>
          Experience the Taste of India
          <br />
          in every bite
        </h1>
        <CTA />
      </Hero>
      <About />
      <MenuHighlights />
      <Contact />
    </main>
  );
}
