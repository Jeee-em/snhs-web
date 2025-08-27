import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, History, Layers, Users } from "lucide-react"

export default function AboutUsSection() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="mb-2 bg-[#003366]/10 text-[#003366] hover:bg-[#003366]/20">About Us</Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003366] mb-4">Our School's Foundation</h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground">
            Learn about our history, values, and the principles that guide our educational approach.
          </p>
        </div>

        <Tabs defaultValue="vision" className="mx-auto max-w-6xl">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-1 h-auto p-1">
            <TabsTrigger value="vision" className="text-xs sm:text-sm p-2 sm:p-3">
              <span className="hidden sm:inline">Vision & Mission</span>
              <span className="sm:hidden">Vision</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="text-xs sm:text-sm p-2 sm:p-3">History</TabsTrigger>
            <TabsTrigger value="organization" className="text-xs sm:text-sm p-2 sm:p-3">
              <span className="hidden sm:inline">Organization</span>
              <span className="sm:hidden">Org</span>
            </TabsTrigger>
            <TabsTrigger value="achievements" className="text-xs sm:text-sm p-2 sm:p-3">
              <span className="hidden sm:inline">Achievements</span>
              <span className="sm:hidden">Awards</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="vision" className="mt-4 sm:mt-6">
            <Card>
              <CardContent className="p-4 sm:p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  <div className="flex flex-col space-y-4 h-full">
                    <div className="inline-flex items-center gap-2 bg-[#003366]/10 px-3 py-1 rounded-full">
                      <div className="h-2 w-2 rounded-full bg-[#003366]"></div>
                      <span className="text-xs sm:text-sm font-medium text-[#003366]">DepEd Vision</span>
                    </div>
                    <div className="p-4 sm:p-6 rounded-xl bg-white shadow-sm border border-gray-100 flex-1 flex">
                      <p className="text-sm sm:text-base text-muted-foreground text-justify leading-relaxed">
                        We dream of Filipinos who passionately love their country and whose values and competencies enable them to realize their full potential and contribute meaningfully to building the nation.
                        As a learner-centered public institution, the Department of Education continuously improves itself to better serve its stakeholders.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4 h-full">
                    <div className="inline-flex items-center gap-2 bg-[#003366]/10 px-3 py-1 rounded-full">
                      <div className="h-2 w-2 rounded-full bg-[#003366]"></div>
                      <span className="text-xs sm:text-sm font-medium text-[#003366]">DepEd Mission</span>
                    </div>
                    <div className="p-4 sm:p-6 rounded-xl bg-white shadow-sm border border-gray-100 flex-1 flex">
                      <p className="text-sm sm:text-base text-muted-foreground text-justify leading-relaxed">
                        To protect and promote the right of every Filipino to quality, equitable, culture-based, and complete basic education where:
                        <br /> <br />Students learn in a child-friendly, gender-sensitive, safe, and motivating environment.
                        <br /> <br />Teachers facilitate learning and constantly nurture every learner.
                        <br /> <br />Administrators and staff, as stewards of the institution, ensure an enabling and supportive environment for effective learning to happen.
                        <br /> <br />Family, community, and other stakeholders are actively engaged and share responsibility for developing lifelong learners.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8">
                  <div className="inline-flex items-center gap-2 bg-[#003366]/10 px-3 py-1 rounded-full mb-4">
                    <div className="h-2 w-2 rounded-full bg-[#003366]"></div>
                    <span className="text-xs sm:text-sm font-medium text-[#003366]">Core Values</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                    {[
                      { value: "Maka-Diyos", icon: <Award className="h-5 w-5 sm:h-6 sm:w-6 text-[#003366]" /> },
                      { value: "Makatao", icon: <Award className="h-5 w-5 sm:h-6 sm:w-6 text-[#003366]" /> },
                      { value: "Makakalikasan", icon: <Users className="h-5 w-5 sm:h-6 sm:w-6 text-[#003366]" /> },
                      { value: "Makabansa", icon: <Award className="h-5 w-5 sm:h-6 sm:w-6 text-[#003366]" /> },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center p-3 sm:p-4 rounded-lg bg-white shadow-sm border border-gray-100 text-center"
                      >
                        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#003366]/10 flex items-center justify-center mb-2 sm:mb-3">
                          {item.icon}
                        </div>
                        <h3 className="text-xs sm:text-sm font-medium text-[#003366]">{item.value}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="mt-4 sm:mt-6">
            <Card>
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                  <div className="w-full lg:w-1/3">
                    <div className="relative h-64 sm:h-80 lg:h-full lg:min-h-[300px] rounded-xl overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=600&width=400&text=School History"
                        alt="School History"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-2/3 space-y-4 sm:space-y-6">
                    <div className="inline-flex items-center gap-2 bg-[#003366]/10 px-3 py-1 rounded-full">
                      <History className="h-4 w-4 text-[#003366]" />
                      <span className="text-xs sm:text-sm font-medium text-[#003366]">Our History</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#003366]">A Legacy of Excellence Since 1965</h3>
                    <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground">
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
                        className="w-full sm:w-auto border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white text-sm sm:text-base"
                      >
                        Read Full History
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="organization" className="mt-4 sm:mt-6">
            <Card>
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-6 sm:space-y-8">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-[#003366]/10 px-3 py-1 rounded-full mb-4">
                      <Layers className="h-4 w-4 text-[#003366]" />
                      <span className="text-xs sm:text-sm font-medium text-[#003366]">Organizational Structure</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#003366] mb-6 sm:mb-8">School Leadership</h3>

                    <div className="flex justify-center mb-6 sm:mb-8">
                      <div className="w-40 sm:w-48 p-3 sm:p-4 rounded-lg bg-[#003366] text-white text-center">
                        <div className="mx-auto h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-white/20 flex items-center justify-center mb-2">
                          <Users className="h-6 w-6 sm:h-8 sm:w-8 text-[#FFCC00]" />
                        </div>
                        <h4 className="text-sm sm:text-base font-bold">Rosalie L. Milla</h4>
                        <p className="text-xs sm:text-sm text-white/70">School Principal</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
                      {[
                        { name: "Mr. Juan Dela Cruz", position: "Assistant Principal" },
                        { name: "Ms. Ana Reyes", position: "Academic Coordinator" },
                        { name: "Mr. Pedro Lim", position: "Administrative Officer" },
                        { name: "Ms. Elena Garcia", position: "Guidance Counselor" },
                      ].map((staff, index) => (
                        <div
                          key={index}
                          className="p-3 sm:p-4 rounded-lg bg-white shadow-sm border border-gray-100 text-center"
                        >
                          <div className="mx-auto h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#003366]/10 flex items-center justify-center mb-2">
                            <Users className="h-5 w-5 sm:h-6 sm:w-6 text-[#003366]" />
                          </div>
                          <h4 className="text-xs sm:text-sm font-medium text-[#003366]">{staff.name}</h4>
                          <p className="text-xs text-muted-foreground">{staff.position}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 sm:pt-6 border-t border-gray-100">
                    <h3 className="text-lg sm:text-xl font-bold text-[#003366] mb-4 text-center">Department Heads</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                      {[
                        { department: "English", head: "Ms. Patricia Tan" },
                        { department: "Mathematics", head: "Mr. Robert Cruz" },
                        { department: "Science", head: "Dr. Liza Mendoza" },
                        { department: "Social Studies", head: "Mr. Carlos Santos" },
                        { department: "MAPEH", head: "Ms. Diana Reyes" },
                      ].map((dept, index) => (
                        <div
                          key={index}
                          className="p-3 sm:p-4 rounded-lg bg-white shadow-sm border border-gray-100 text-center"
                        >
                          <h4 className="text-xs sm:text-sm font-medium text-[#003366]">{dept.department}</h4>
                          <p className="text-xs text-muted-foreground">{dept.head}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Button className="w-full sm:w-auto bg-[#003366] hover:bg-[#002244] text-white text-sm sm:text-base">
                      View Complete Staff Directory
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="mt-4 sm:mt-6">
            <Card>
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-4 sm:space-y-6">
                  <div className="inline-flex items-center gap-2 bg-[#003366]/10 px-3 py-1 rounded-full">
                    <Award className="h-4 w-4 text-[#003366]" />
                    <span className="text-xs sm:text-sm font-medium text-[#003366]">School Achievements</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#003366]">Our Milestones and Recognitions</h3>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    <div>
                      <h4 className="text-base sm:text-lg font-medium text-[#003366] mb-4">Academic Excellence</h4>
                      <ul className="space-y-3 sm:space-y-4">
                        {[
                          "Ranked Top 5 in the Regional National Achievement Test (2024)",
                          "100% Graduation Rate for the past 5 consecutive years",
                          "Regional Champions in Science and Mathematics Competitions (2023-2024)",
                          "National Finalist in Robotics Competition (2024)",
                          "Produced 15 Government Scholars in the past 3 years",
                        ].map((achievement, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-[#FFCC00]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Award className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#FFCC00]" />
                            </div>
                            <span className="text-sm sm:text-base text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-medium text-[#003366] mb-4">Extracurricular Achievements</h4>
                      <ul className="space-y-3 sm:space-y-4">
                        {[
                          "Regional Champions in Basketball (Boys Division, 2024)",
                          "National Finalists in Choir Competition (2023)",
                          "Best School Publication Award (Regional Level, 2024)",
                          "Champions in Regional Cultural Dance Competition (2023)",
                          "Environmental Conservation Award (2024)",
                        ].map((achievement, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-[#FFCC00]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Award className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#FFCC00]" />
                            </div>
                            <span className="text-sm sm:text-base text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 sm:pt-6 border-t border-gray-100">
                    <h4 className="text-base sm:text-lg font-medium text-[#003366] mb-4">Major Milestones</h4>
                    <div className="relative">
                      <div className="absolute left-2.5 sm:left-3 top-0 bottom-0 w-0.5 bg-[#003366]/20"></div>
                      <div className="space-y-6 sm:space-y-8">
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
                          <div key={index} className="relative pl-10 sm:pl-12">
                            <div className="absolute left-[1px] sm:left-[-1px] top-1 h-5 w-5 sm:h-7 sm:w-7 rounded-full bg-[#003366] flex items-center justify-center">
                              <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-white"></div>
                            </div>
                            <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-gray-100">
                              <span className="text-xs sm:text-sm font-bold text-[#FFCC00] bg-[#003366] px-2 py-0.5 rounded">
                                {milestone.year}
                              </span>
                              <p className="mt-2 text-sm sm:text-base text-muted-foreground">{milestone.event}</p>
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
