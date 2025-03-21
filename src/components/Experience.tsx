import { useScrollAnimation } from '@/utils/animations';
import { Separator } from '@/components/ui/separator';

// Group experiences by company
const experiencesByCompany = [
  {
    company: "Theodo",
    logo: "T.",
    totalPeriod: "Sep 2017 - Jun 2024 · 6 years 10 months",
    roles: [
      {
        role: "Head of e-commerce tribe - Tech & Innovation",
        period: "Jul 2021 - Jun 2024 · 3 years",
        location: "",
        description: "Co-founded Theodo's e-commerce division, and quickly realized how little I knew about e-commerce, which led me to dive deep into the topic. I also learned a lot about leadership and strategy (GTM, tech, people, and margins). For 3 years, we built a team of 10 talents and permitted around 20 businesses increase their online sales by building or migrating their custom e-commerce platforms."
      },
      {
        role: "Engineering Manager",
        period: "May 2020 - Jul 2021 · 1 year 3 months",
        location: "Paris, Île-de-France, France",
        description: "Started teaching managers how to manage. Also began engaging in sales, supporting the sales team as solution architect and closing my first deals. On the technical side, I conducted several technical audits and I specialized in observability and monitoring to help teams detect bugs before users report them."
      },
      {
        role: "Tech Lead",
        period: "Jan 2019 - May 2020 · 1 year 5 months",
        location: "Région de Paris, France",
        description: "On the technical side, I have deepened my knowledge in cloud architecture and microservices. I have also learned how to manage the quality of a project (performance/stability/security). Additionally, I have gained experience as a manager for the first time, as well as in recruitment and giving conferences."
      },
      {
        role: "Fullstack Web Developer",
        period: "Sep 2017 - Dec 2018 · 1 year 4 months",
        location: "",
        description: "I had the chance to work on several short-term, high-impact projects in the fields of e-commerce, energy, and banking. I learned to quickly adapt to a technical stack (Python, NodeJS, Java, PHP, Angular, ReactJS). I also learned agile and lean methodologies."
      }
    ]
  },
  {
    company: "Accor",
    logo: "A",
    totalPeriod: "Jan 2016 - Aug 2017 · 1 year 8 months",
    roles: [
      {
        role: "JavaEE Developer Engineering Apprentice",
        period: "Jan 2016 - Aug 2017 · 1 year 8 months",
        location: "AccorHotels",
        description: "Within the Java Backoffice team at AccorHotel, I worked on three projects: - Setting up continuous integration for the team's applications, which introduced me to DevOps, automated testing, and Jenkins. - Migrating a Struts 1 application to Struts 2, for which I developed a code converter to accelerate the migration. - Lastly, developing an Android/ReactJS application."
      }
    ]
  },
  {
    company: "Fagron Group BV",
    logo: "F",
    totalPeriod: "Sep 2014 - Dec 2015 · 1 year 4 months",
    roles: [
      {
        role: "Java Developer Engineering Apprentice",
        period: "Sep 2014 - Dec 2015 · 1 year 4 months",
        location: "Région de Paris, France",
        description: "Satisfied with the website I had developed for the laboratory, the Fagron group entrusted me with developing a new pharmaceutical ERP, and continuing minor updates on the website. I mainly progressed in software architecture and product development, learning how to build with users on the ground."
      }
    ]
  },
  {
    company: "Laboratoire Delpech Marseille",
    logo: "LD",
    totalPeriod: "Apr 2014 - Jun 2014 · 3 months",
    roles: [
      {
        role: "Web Developer Intern",
        period: "Apr 2014 - Jun 2014 · 3 months",
        location: "Région de Marseille, France",
        description: "I was in charge of the product and technical conception, as well as the development, of a website for the pharmaceutical laboratory Delpech. The site functioned as both a showcase for their services and a client portal, enabling customers to track their order progress from the ERP system. To successfully deliver in 3 months, I learned to be meticulous in project management. I also improved my technical skills, particularly in development by creating an optimized ETL in terms of performance, and in server configuration to deploy the project into production."
      }
    ]
  },
  {
    company: "ONET, Materlabo, Hotel Vendome",
    logo: "O",
    totalPeriod: "Jul 2009 - Apr 2014 · 4 years 10 months",
    roles: [
      {
        role: "Student Worker",
        period: "Jul 2009 - Apr 2014 · 4 years 10 months",
        location: "Région de Aix-En-Provence, France",
        description: "Worked as a janitor, construction worker, and hotel receptionist during my holidays and weekends. These experiences taught me the value of hard work."
      }
    ]
  },
  {
    company: "Independent",
    logo: "I",
    totalPeriod: "Jul 2006 - Mar 2014 · 7 years 9 months",
    roles: [
      {
        role: "Young Self-Taught Web Developer",
        period: "Jul 2006 - Mar 2014 · 7 years 9 months",
        location: "Gap, Provence-Alpes-Côte d'Azur, France",
        description: "Passionate about coding from a young age, I launched around ten business projects during middle and high school in areas such as entertainment, music, gaming, and finance—though many remained unfinished. Along the way, I gained knowledge in web development (HTML/JS, PHP, Java, SQL) and SEO, which brought millions of visitors to one of these projects."
      }
    ]
  }
];

const Experience = () => {
  useScrollAnimation();
  
  return (
    <section id="experience" className="section-padding relative bg-secondary/30">
      <div className="animate-on-scroll opacity-0">
        <div className="inline-block px-3 py-1 mb-4 bg-primary/10 rounded-full text-primary text-sm font-medium">
          Professional Journey
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">My Experience</h2>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiencesByCompany.map((companyExp, index) => (
            <div key={index} className="bg-background rounded-xl shadow-sm border border-border overflow-hidden animate-on-scroll opacity-0" style={{ animationDelay: `${index * 150}ms` }}>
              {/* Company Header */}
              <div className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold">
                  {companyExp.logo}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{companyExp.company}</h3>
                  <p className="text-muted-foreground text-sm">{companyExp.totalPeriod}</p>
                </div>
              </div>
              
              <Separator />
              
              {/* Display all roles for each company */}
              {companyExp.roles.map((role, roleIndex) => (
                <div key={roleIndex}>
                  {roleIndex > 0 && <Separator />}
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-1 h-1 rounded-full bg-primary mt-3"></div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{role.role}</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm mb-3">
                          <span className="text-primary font-medium">{role.period}</span>
                          {role.location && (
                            <>
                              <span className="hidden sm:inline text-muted-foreground">•</span>
                              <span className="text-muted-foreground">{role.location}</span>
                            </>
                          )}
                        </div>
                        <p className="text-foreground/80">{role.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

