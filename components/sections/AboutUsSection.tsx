import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, History, Layers, Users } from "lucide-react"

export default function AboutUsSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-2 bg-[#003366]/10 text-[#003366] hover:bg-[#003366]/20">About Us</Badge>
          <h2 className="text-3xl font-bold text-[#003366] sm:text-4xl mb-4">Our School's Foundation</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Learn about our history, values, and the principles that guide our educational approach.
          </p>
        </div>

        <Tabs defaultValue="vision" className="mx-auto max-w-4xl">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="vision">Vision & Mission</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="organization">Organization</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>
          
          <TabsContent value="vision" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-[#003366]/10 px-3 py-1 rounded-full">
                      <div className="h-2 w-2 rounded-full bg-[#003366]"></div>
                      <span className="text-sm font-medium text-[#003366]">Our Vision</span>
                    </div>
                    <div className="p-6 rounded-xl bg-white shadow-sm border border-gray-100">
                      <p className="text-muted-foreground leading-relaxed">
                        To be a leading educational institution that nurtures future leaders and innovators
                        committed to excellence and service, producing globally competitive graduates who contribute
                        positively to society.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-[#003366]/10 px-3 py-1 rounded-full">
                      <div className="h-2 w-2 rounded-full bg-[#003366]"></div>
                      <span className="text-sm font-medium text-[#003366]">Our Mission</span>
                    </div>
                    <div className="p-6 rounded-xl bg-white shadow-sm border border-gray-100">
                      <p className="text-muted-foreground leading-relaxed">
                        To develop well-rounded individuals equipped with knowledge, skills, and values necessary
                        for personal growth and societal contribution through quality education, innovative teaching
                        methods, and a supportive learning environment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="inline-flex items-center gap-2 bg-[#003366]/10 px-3 py-1 rounded-full mb-4">
                    <div className="h-2 w-2 rounded-full bg-[#003366]"></div>
                    <span className="text-sm font-medium text-[#003366]">Core Values</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {[
                      { value: "Excellence", icon: <Award className="h-6 w-6 text-[#003366]" /> },
                      { value: "Integrity", icon: <Award className="h-6 w-6 text-[#003366]" /> },
                      { value: "Respect", icon: <Users className="h-6 w-6 text-[#003366]" /> },
                      { value: "Responsibility", icon: <Award className="h-6 w-6 text-[#003366]" /> },
                      { value: "Innovation", icon: <Award className="h-6 w-6 text-[#003366]" /> },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center p-4 rounded-lg bg-white shadow-sm border border-gray-100 text-center"
                      >
                        <div className="h-12 w-12 rounded-full bg-[#003366]/10 flex items-center justify-center mb-3">
                          {item.icon}
                        </div>
                        <h3 className="font-medium text-[#003366]">{item.value}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-1/3">
                    <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=600&width=400&text=School History"
                        alt="School History"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-[#003366]/10 px-3 py-1 rounded-full">
                      <History className="h-4 w-4 text-[#003366]" />
                      <span className="text-sm font-medium text-[#003366]">Our History</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#003366]">A Legacy of Excellence Since 1965</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Siay National High School was established in 1965 as a response to the growing educational
                        needs of the community. What began as a small school with just three classrooms and five
                        teachers has grown into one of the region's most respected educational institutions.
                      </p>
                      <p>
                        Throughout the decades, SNHS has continuously evolved, adapting to changing educational
                        standards while maintaining its commitment to academic excellence and holistic development.
                      </p>
                      <p>
                        In 1985, the school expanded its facilities to accommodate more students. By 1995, SNHS had
                        introduced specialized programs in science and technology. The early 2000s saw further
                        growth with the addition of new buildings, laboratories, and sports facilities.
                      </p>
                      <p>
                        Today, Siay National High School stands as a testament to the community's dedication to
                        education, serving thousands of students and producing graduates who have excelled in
                        various fields both locally and internationally.
                      </p>
                    </div>
                    <div className="pt-4">
                      <Button
                        variant="outline"
                        className="border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white"
                      >
                        Read Full History
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="organization" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-[#003366]/10 px-3 py-1 rounded-full mb-4">
                      <Layers className="h-4 w-4 text-[#003366]" />
                      <span className="text-sm font-medium text-[#003366]">Organizational Structure</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#003366] mb-8">School Leadership</h3>

                    <div className="flex justify-center mb-8">
                      <div className="w-48 p-4 rounded-lg bg-[#003366] text-white text-center">
                        <div className="mx-auto h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mb-2">
                          <Users className="h-8 w-8 text-[#FFCC00]" />
                        </div>
                        <h4 className="font-bold">Dr. Maria Santos</h4>
                        <p className="text-sm text-white/70">School Principal</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                      {[
                        { name: "Mr. Juan Dela Cruz", position: "Assistant Principal" },
                        { name: "Ms. Ana Reyes", position: "Academic Coordinator" },
                        { name: "Mr. Pedro Lim", position: "Administrative Officer" },
                        { name: "Ms. Elena Garcia", position: "Guidance Counselor" },
                      ].map((staff, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-lg bg-white shadow-sm border border-gray-100 text-center"
                        >
                          <div className="mx-auto h-12 w-12 rounded-full bg-[#003366]/10 flex items-center justify-center mb-2">
                            <Users className="h-6 w-6 text-[#003366]" />
                          </div>
                          <h4 className="font-medium text-[#003366] text-sm">{staff.name}</h4>
                          <p className="text-xs text-muted-foreground">{staff.position}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100">
                    <h3 className="text-xl font-bold text-[#003366] mb-4 text-center">Department Heads</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                      {[
                        { department: "English", head: "Ms. Patricia Tan" },
                        { department: "Mathematics", head: "Mr. Robert Cruz" },
                        { department: "Science", head: "Dr. Liza Mendoza" },
                        { department: "Social Studies", head: "Mr. Carlos Santos" },
                        { department: "MAPEH", head: "Ms. Diana Reyes" },
                      ].map((dept, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-lg bg-white shadow-sm border border-gray-100 text-center"
                        >
                          <h4 className="font-medium text-[#003366] text-sm">{dept.department}</h4>
                          <p className="text-xs text-muted-foreground">{dept.head}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Button className="bg-[#003366] hover:bg-[#002244] text-white">
                      View Complete Staff Directory
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-[#003366]/10 px-3 py-1 rounded-full">
                    <Award className="h-4 w-4 text-[#003366]" />
                    <span className="text-sm font-medium text-[#003366]">School Achievements</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#003366]">Our Milestones and Recognitions</h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-medium text-[#003366] mb-4">Academic Excellence</h4>
                      <ul className="space-y-4">
                        {[
                          "Ranked Top 5 in the Regional National Achievement Test (2024)",
                          "100% Graduation Rate for the past 5 consecutive years",
                          "Regional Champions in Science and Mathematics Competitions (2023-2024)",
                          "National Finalist in Robotics Competition (2024)",
                          "Produced 15 Government Scholars in the past 3 years",
                        ].map((achievement, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-[#FFCC00]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Award className="h-3 w-3 text-[#FFCC00]" />
                            </div>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-[#003366] mb-4">Extracurricular Achievements</h4>
                      <ul className="space-y-4">
                        {[
                          "Regional Champions in Basketball (Boys Division, 2024)",
                          "National Finalists in Choir Competition (2023)",
                          "Best School Publication Award (Regional Level, 2024)",
                          "Champions in Regional Cultural Dance Competition (2023)",
                          "Environmental Conservation Award (2024)",
                        ].map((achievement, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-[#FFCC00]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Award className="h-3 w-3 text-[#FFCC00]" />
                            </div>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="text-lg font-medium text-[#003366] mb-4">Major Milestones</h4>
                    <div className="relative">
                      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#003366]/20"></div>
                      <div className="space-y-8">
                        {[
                          { year: "2023", event: "Opened new Science and Technology Building" },
                          { year: "2020", event: "Celebrated School's 55th Anniversary" },
                          {
                            year: "2015",
                            event: "Recognized as one of the Top 50 Public High Schools in the Philippines",
                          },
                          { year: "2010", event: "Implemented the Special Science and Technology Curriculum" },
                          { year: "2005", event: "Expanded campus with new academic buildings" },
                        ].map((milestone, index) => (
                          <div key={index} className="relative pl-12">
                            <div className="absolute left-2 top-1 h-6 w-6 rounded-full bg-[#003366] flex items-center justify-center">
                              <div className="h-2 w-2 rounded-full bg-white"></div>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                              <span className="text-sm font-bold text-[#FFCC00] bg-[#003366] px-2 py-0.5 rounded">
                                {milestone.year}
                              </span>
                              <p className="mt-2 text-muted-foreground">{milestone.event}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
