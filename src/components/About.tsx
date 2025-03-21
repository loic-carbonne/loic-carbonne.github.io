
import { useScrollAnimation } from '@/utils/animations';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  // Use the hook version inside the component function
  useScrollAnimation();
  
  return <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20 z-0"></div>
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="animate-on-scroll opacity-0 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-2 bg-primary/10 rounded-full blur-xl"></div>
            <Avatar className="h-48 w-48 border-4 border-background shadow-xl">
              <AvatarImage src="https://media.licdn.com/dms/image/v2/C5603AQFvqpvBz8gkTw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517252645536?e=1747872000&v=beta&t=7BZYUyjoXKgmD7_Mz3nQ2OoAhkQpRHmc7LHyUUJsKYs" alt="Loïc Carbonne" />
              <AvatarFallback className="text-3xl font-bold">LC</AvatarFallback>
            </Avatar>
          </div>
        </div>
        
        <div className="animate-on-scroll opacity-0 delay-100">
          <div className="inline-block px-3 py-1 mb-4 bg-primary/10 rounded-full text-primary text-sm font-medium">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Passionate Engineering Leader</h2>
          <p className="text-foreground/80 mb-4">
            As the former Head of E-commerce at Theodo, I've spent over 15 years in tech, evolving from a self-taught developer to leading engineering teams that deliver high-impact solutions for businesses across various industries.
          </p>
          <p className="text-foreground/80 mb-8">
            My expertise spans engineering leadership, e-commerce solutions, cloud architecture, tech quality and observability. I'm passionate about building high-performing teams and creating technical solutions that drive business growth.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[{
            label: "Years Experience",
            value: "15+"
          }, {
            label: "Projects Delivered",
            value: "50+"
          }, {
            label: "Team Members Led",
            value: "50+"
          }].map((stat, index) => <div key={index} className="bg-background rounded-lg p-4 shadow-sm border border-border">
                <div className="text-primary font-bold text-2xl">{stat.value}</div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};

export default About;
