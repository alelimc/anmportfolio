import React from 'react';

const experiences = [
  {
    company: 'Yaya Homecare Services, Toronto, Canada',
    position: 'IT Specialist',
    period: '2023',
    description: 'Website development',
  },
  {
    company: 'Technology Elite, Clark Angeles City, Philippines',
    position: 'Systems Engineer',
    period: '2022',
    description: 'Windows System Administration, ConnectWise Manage, Systems Engineering, Remote Administration',
  },
  {
    company: 'Rashid School for Boys, Dubai, UAE',
    position: 'Information Technology Network Support Specialist',
    period: '2016 - 2021',
    description: 'Microsoft Azure, System Administration, Technical Documentation, Technical Support, Computer Hardware Troubleshooting, IT Hardware Support, Hardware Installation, Office 365, Lotus Notes, Apple Devices Support',
  },
  {
    company: 'Shanghai American School, Shanghai, China',
    position: 'Student Database and Systems Engineer',
    period: '2014 - 2015',
    description: 'Contributed to frontend development using .Net, ASP and backend using SQL.',
  },
];

const ExperienceTimeline: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-8">
              <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-600"></div>
              <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-blue-600"></div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                <h4 className="text-lg text-blue-600 mb-2">{exp.company}</h4>
                <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;