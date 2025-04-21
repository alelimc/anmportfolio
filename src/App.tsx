import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2 } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillsSection from './components/SkillsSection';
import ContactForm from './components/ContactForm';

function App() {
  return (
<div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-8">
              <img
                src="/images/profile4.jpg"
                alt="Aleli Macapagal"
                className="w-48 h-48 rounded-full border-4 border-white shadow-2xl object-cover"
              />
              <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                Available for Work
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              ALELI MACAPAGAL
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-blue-200 font-light">
              Software Engineer & Systems Administrator
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-6 leading-relaxed text-blue-100 font-light">
                A versatile Tech Professional with 10+ years of global experience, combining deep expertise in System Administration 
                with modern Software Engineering practices. Currently completing Software Engineering Technology at Centennial College (2025).
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
                <div className="bg-blue-800/30 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-3 text-blue-200">Technical Expertise</h3>
                  <p className="text-blue-100">
                    Proficient in full-stack development using Java/Spring Boot, MERN stack, and cloud technologies. 
                    Expert in Microsoft 365, Azure, AD, and PowerShell automation. Experienced in implementing secure, 
                    scalable enterprise solutions.
                  </p>
                </div>
                <div className="bg-blue-800/30 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-3 text-blue-200">Professional Impact</h3>
                  <p className="text-blue-100">
                    Track record of successful enterprise-scale migrations, security implementations, and development of 
                    business-critical applications. Seeking hybrid/remote roles where I can leverage both development and 
                    systems expertise.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <a 
                href="https://github.com/leizcool" 
                className="flex items-center px-6 py-3 bg-white text-blue-700 rounded-full hover:bg-blue-100 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} className="mr-2" />
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/alelimacapagal/" 
                className="flex items-center px-6 py-3 bg-white text-blue-700 rounded-full hover:bg-blue-100 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} className="mr-2" />
                LinkedIn
              </a>
              <a 
                href="mailto:alelimc@yahoo.com" 
                className="flex items-center px-6 py-3 bg-white text-blue-700 rounded-full hover:bg-blue-100 transition-colors duration-300"
              >
                <Mail size={20} className="mr-2" />
                Email
              </a>
            </div>
          </div>
        </div>
      </header>

      <SkillsSection />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Personalized Diet Planner Web Application"
              description="The Personalized Diet Planner is a web application developed to simplify and enhance meal planning by providing tailored dietary recommendations. Designed for individuals and healthcare providers, the system helps promote healthier eating habits, supports specific medical and fitness goals, and accommodates dietary restrictions such as allergies or vegetarian and vegan lifestyles."
              technologies={['Springboot', 'JavaEE', 'MySQL', 'JSON']}
              image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              githubUrl="https://github.com/leizcool/Personalized-Diet-Planner.git"
              liveUrl="https://example.com"
            />
            <ProjectCard
              title="Healthcare Monitoring System"
              description="A web application for nurse practitioners to monitor patients during the first weeks of their release from the hospital and help patients monitor their daily activities."
              technologies={['MERN stack', 'GraphQL', 'Apollo Server', 'AI', 'Microservices']}
              image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              githubUrl="https://github.com/leizcool/Healthcare-Monitoring-System"
              liveUrl="https://example.com"
            />
            <ProjectCard
              title="Analytics Dashboard"
              description="Developed a comprehensive data visualization dashboard using Python and PowerBI, integrated with Azure services. This solution provides real-time business metrics, customizable reports, and predictive analytics capabilities. Features include automated data collection, interactive visualizations, and role-based access control for different stakeholders."
              technologies={['Python', 'PowerBI', 'Azure', 'SQL', 'Data Analytics']}
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              githubUrl="https://github.com/leizcool"
              liveUrl="https://example.com"
            />
            <ProjectCard
              title="Email & MS Office Migration"
              description="Led a complex migration project for a 500+ user organization, transitioning from legacy systems to Office 365. Successfully managed the migration of email systems, SharePoint sites, and collaboration tools while ensuring minimal downtime. Implemented security best practices and provided comprehensive end-user training."
              technologies={['Office 365', 'Exchange Online', 'SharePoint', 'Azure AD', 'PowerShell']}
              image="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              githubUrl="https://github.com/leizcool"
              liveUrl="https://example.com"
            />  
            <ProjectCard
              title="iPAD MDM Configuration"
              description="Implemented and managed a Mobile Device Management solution for 1000+ iPads in an educational environment. Developed automated deployment workflows, custom security policies, and app distribution strategies. Reduced device setup time by 75% and improved security compliance through centralized management."
              technologies={['Lightspeed MDM', 'Apple Configurator', 'Mac Server', 'iOS Management', 'Security Policies']}
              image="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              githubUrl="https://github.com/leizcool"
              liveUrl="https://example.com"
            />                                  
            <ProjectCard
              title="Website Design and Implementation"
              description="Designed and developed a modern, responsive website for Yaya Homecare Services. Implemented SEO best practices, optimized performance, and created an intuitive user interface. The site features service information, contact forms, and a client portal, resulting in increased client engagement and improved online presence."
              technologies={['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'SEO']}
              image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              githubUrl="https://github.com/leizcool"
              liveUrl="https://yayahomecareservices.ca/"
            />
          </div>
        </div>
      </section> 

      <ExperienceTimeline />

{/*       <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <ContactForm />
        </div>
      </section>
 */}
      <footer className="bg-gradient-to-r from-blue-600 to-gray-600 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2025 Aleli Macapagal. All rights reserved.</p>
        </div>
      </footer>
    </div> 
  );
}

export default App;








