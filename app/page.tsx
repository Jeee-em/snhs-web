import Header from "@/components/sections/Header"
import HeroSection from "@/components/sections/HeroSection"
import HighlightsSection from "@/components/sections/HighlightsSection"
import AnnouncementsSection from "@/components/sections/AnnouncementsSection"
import AboutUsSection from "@/components/sections/AboutUsSection"
import AcademicsSection from "@/components/sections/AcademicsSection"
import NewsAnnouncementsSection from "@/components/sections/NewsAnnouncementsSection"
import GallerySection from "@/components/sections/GallerySection"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <HeroSection />
        <div className="flex flex-col md:flex-row gap-8 container mx-auto px-4 py-12">
          <div className="w-full md:w-2/3">
            <HighlightsSection />
          </div>
          <div className="w-full md:w-1/3">
            <AnnouncementsSection />
          </div>
        </div>
        <AboutUsSection />
        <AcademicsSection />
        <NewsAnnouncementsSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  )
}
