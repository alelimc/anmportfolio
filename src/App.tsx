import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2 } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillsSection from './components/SkillsSection';
import ContactForm from './components/ContactForm';

function App() {
  return (
<div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 to-gray-600 text-white">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-6 object-cover"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Aleli Macapagal</h1>
            <h2 className="text-xl md:text-2xl mb-6">Systems Engineer</h2>
            <p className="text-base max-w-3xl mb-8 leading-relaxed">
              A Systems Engineer with 10+ years of experience in building and managing scalable applications.
              Specialized in .Net, Java, MERN, Python, Cloud technologies, and Network support.
            </p>
            <p className="text-base max-w-3xl mb-8 leading-relaxed">
              I have over a decade of experience as a Systems Engineer, complemented by a Computer Science degree and recent studies in Centennial College's Software Engineering Technology program. I've led system upgrades, streamlined workflows, and improved efficiency in my IT Specialist role. 
              My expertise includes full-stack development, database management, and cloud computing, with strong skills in Java, Python, and C#. I excel in creating user-centric applications, leading projects, and mentoring teams. I'm excited to apply my technical skills and innovative approach to contribute to your organization's success.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/alelimc" className="hover:text-blue-200 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/alelimacapagal/" className="hover:text-blue-200 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:alelimc@yahoo.com" className="hover:text-blue-200 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      <SkillsSection />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Website Design"
              description="A Homecare company website"
              technologies={['HTML', 'CSS']}
              image="/images/yayahs.jpg"
              githubUrl="https://github.com"
              liveUrl="https://yayahomecareservices.ca/"
            />
            <ProjectCard
              title="Bloodbank Management System"
              description="Blood bank management web application"
              technologies={['Springboot', 'JavaEE', 'MySQL', 'JSON']}
              image="/images/bloodbankapp.jpg"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            <ProjectCard
              title="Analytics Dashboard"
              description="Data visualization dashboard for business metrics"
              technologies={['Python', 'PowerBI', 'Azure']}
              image="/images/data_analytics.jpg"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            <ProjectCard
              title="Email & MS Office Migration"
              description="Email and Microsoft Office upgrade/migration project for a large organization"
              technologies={['Office 365', 'Exchange', 'Outlook', 'Lotus Notes']}
              image="/images/migration.png"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />  
            <ProjectCard
              title="iPAD MDM Configuration"
              description="Configuration of iPADs for a large organization using Mobile Device Management"
              technologies={['Lightspeed MDM', 'Apple Configurator', 'Mac Server']}
              image="/images/ipadmdm.png"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />                                  
          </div>
        </div>
      </section>

      <ExperienceTimeline />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <ContactForm />
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2025 Aleli Macapagal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;