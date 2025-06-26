import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-2 bg-[#003366]/10 text-[#003366] hover:bg-[#003366]/20">Gallery</Badge>
          <h2 className="text-3xl font-bold text-[#003366] sm:text-4xl mb-4">School Life in Pictures</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Explore our vibrant school community through photos of academic, athletic, and cultural activities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl bg-gray-200 transition-transform duration-300 hover:scale-[1.02]"
            >
              <Image
                src={`/placeholder.svg?height=400&width=400&text=School Activity ${index + 1}`}
                alt={`School activity ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-medium">School Activity {index + 1}</h3>
                <p className="text-sm text-white/80">Academic Year 2024-2025</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-6">
              <TabsList>
                <TabsTrigger value="all">All Photos</TabsTrigger>
                <TabsTrigger value="academic">Academic</TabsTrigger>
                <TabsTrigger value="sports">Sports</TabsTrigger>
                <TabsTrigger value="cultural">Cultural</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-6">
              <div className="text-center">
                <Button className="bg-[#003366] hover:bg-[#002244] text-white">View All Photos</Button>
              </div>
            </TabsContent>

            <TabsContent value="academic" className="mt-6">
              <div className="text-center">
                <Button className="bg-[#003366] hover:bg-[#002244] text-white">View Academic Photos</Button>
              </div>
            </TabsContent>

            <TabsContent value="sports" className="mt-6">
              <div className="text-center">
                <Button className="bg-[#003366] hover:bg-[#002244] text-white">View Sports Photos</Button>
              </div>
            </TabsContent>

            <TabsContent value="cultural" className="mt-6">
              <div className="text-center">
                <Button className="bg-[#003366] hover:bg-[#002244] text-white">View Cultural Photos</Button>
              </div>
            </TabsContent>

            <TabsContent value="events" className="mt-6">
              <div className="text-center">
                <Button className="bg-[#003366] hover:bg-[#002244] text-white">View Event Photos</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
