import React from 'react';
import { Code2, Database, Cloud, Layout, Terminal, Settings, Shield } from 'lucide-react';

const skills = [
  {
    category: 'Frontend Development',
    icon: Layout,
    technologies: ['React', 'TypeScript', 'HTML5', 'CSS3', 'Responsive Design', 'SEO', 'UI/UX'],
  },
  {
    category: 'Backend Development',
    icon: Terminal,
    technologies: ['Java', 'Spring Boot', 'Node.js', 'Express', 'GraphQL', 'Apollo Server', 'RESTful APIs', 'Microservices'],
  },
  {
    category: 'Databases & Analytics',
    icon: Database,
    technologies: ['MySQL', 'MongoDB', 'SQL Server', 'PowerBI', 'Data Analytics', 'Data Visualization'],
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    technologies: ['Azure', 'Azure AD', 'Office 365', 'Docker', 'CI/CD', 'SharePoint'],
  },
  {
    category: 'System Administration',
    icon: Settings,
    technologies: ['Exchange Online', 'MDM', 'Apple Configurator', 'PowerShell', 'Active Directory', 'System Migration'],
  },
  {
    category: 'Security & Best Practices',
    icon: Shield,
    technologies: ['Security Policies', 'Access Control', 'Compliance', 'Best Practices', 'Technical Documentation'],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.category} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <skill.icon className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-bold">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
