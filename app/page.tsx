import { AppSection } from "@/components/app-section";
import { Clients } from "@/components/clients";
import { CompanyStory } from "@/components/company-story";
import { Coverage } from "@/components/coverage";
import { Cta } from "@/components/cta";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Solocontrol Engenharia e Consultoria",
  description: "Controle tecnológico de pavimentação, concreto e solos.",
  telephone: "+55-16-99184-5032",
  email: "contatos.solocontrol@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Francisco Martimiano de Oliveira, 275",
    addressLocality: "Américo Brasiliense",
    addressRegion: "SP",
    postalCode: "14820-025",
    addressCountry: "BR",
  },
};

export default function Home() {
  return (
    <main className="w-full max-w-full overflow-x-hidden">
      <SmoothScroll />
      <Navigation />
      <Hero />
      <Clients />
      <Services />
      <CompanyStory />
      <Process />
      <AppSection />
      <Stats />
      <Coverage />
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </main>
  );
}
