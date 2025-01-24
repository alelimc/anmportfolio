import React from 'react';
import { Code2, Database, Cloud, Layout, Terminal, Settings } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: Layout,
    technologies: ['C#', 'Java', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    icon: Terminal,
    technologies: ['Node.js', 'Express', 'Python', 'Java'],
  },
  {
    category: 'Databases',
    icon: Database,
    technologies: ['SQL', 'MongoDB', 'MySQL', 'OracleSQL'],
  },
  {
    category: 'Cloud',
    icon: Cloud,
    technologies: ['AWS', 'Docker', 'MS Azure', 'CI/CD'],
  },
  {
    category: 'Tools',
    icon: Settings,
    technologies: ['Git', 'Github', 'VS Code', 'Jira', 'Visual Studio', 'Android Studio', 'Postman', 'Playwright'],
  },
  {
    category: 'Languages',
    icon: Code2,
    technologies: ['C#', 'Python', 'Java', 'JavaScript', 'TypeScript'],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.category} className="bg-white rounded-lg shadow-md p-6">
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