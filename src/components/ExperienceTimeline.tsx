import React from 'react';

const experiences = [
  {
    company: 'Precise Solutions, Toronto, ON, Canada',
    position: 'Test Invigilator (Part-Time)',
    period: 'May 2024 – Present',
    description: 'Administer standardized exams, ensuring strict adherence to testing protocols and maintaining a secure environment. | Monitor candidates to uphold academic integrity and provide technical assistance as needed. | Maintain accurate records and promptly report any irregularities to uphold testing standards.',
  },
  {
    company: 'Yaya Homecare Services, Toronto, ON, Canada',
    position: 'IT Specialist',
    period: '2023',
    description: 'Developed and launched the company\'s official website, enhancing online presence and user engagement. \| Provided technical support and maintenance, ensuring seamless digital operations. \| Collaborated with stakeholders to implement user-friendly features aligned with business goals.'
  },
  {
    company: 'Technology Elite, Clark Angeles City, Philippines',
    position: 'Systems Engineer',
    period: '2022',
    description: 'Managed remote administration tasks for Australian clients, ensuring system reliability and performance. | ' +
      'Utilized ConnectWise Manage for efficient ticketing and client communication. | ' +
      'Implemented system upgrades and provided solutions to complex technical issues. | ' +
      'Technologies: Windows System Administration, ConnectWise Manage, Systems Engineering, Remote Administration'
  },
  {
    company: 'Rashid School for Boys, Dubai, UAE',
    position: 'Information Technology Network Support Specialist',
    period: '2016 - 2021',
    description: 'Provided comprehensive IT support across the institution, managing over 200 devices and ensuring minimal downtime. | ' +
      'Involved in the migration to Microsoft Azure, enhancing cloud computing capabilities. | ' +
      'Maintained technical documentation and supported various platforms including Lotus Notes and Office 365. | ' +
      'Key skills: Microsoft Azure, System Administration, Technical Documentation, Technical Support, Computer Hardware Troubleshooting, IT Hardware Support, Hardware Installation, Office 365, Lotus Notes, Apple Devices Support',
  },
  {
    company: 'Shanghai American School, Shanghai, China',
    position: 'Student Database and Systems Engineer',
    period: '2014 - 2015',
    description: 'Managed and optimized the PowerSchool Student Information System, improving data accuracy and reporting efficiency. | ' +
      'Developed custom reports using Crystal Reports and SQL, facilitating better decision-making. | ' +
      'Collaborated with cross-functional teams to integrate systems and streamline operations. Technologies: .Net, ASP, SQL',
  },
  {
    company: 'GFL Systems, Inc., Clark Angeles City, Philippines',
    position: 'Systems Administrator',
    period: 'Nov 2011 – Jul 2014',
    description: 'Administered and maintained Windows and Linux servers, ensuring optimal performance and security. | ' +
      'Implemented remote monitoring solutions, reducing system downtime and enhancing client satisfaction. | ' +
      'Provided technical support and resolved complex issues across diverse IT environments. | ' +
      'Skills: Remote Administration, Linux System Administration, Windows System Administration, Server Maintenance'
  },
  {
    company: 'Latifa School for Girls (now Rashid and Latifa Schools), Dubai, UAE',
    position: 'ICT Technician',
    period: 'Sep 2008 – Aug 2011',
    description: 'Delivered IT support services, including hardware installation, troubleshooting, and help desk support. | ' +
      'Managed email systems and ensured the smooth operation of Microsoft Office applications. | ' +
      'Assisted in the administration of Windows systems, contributing to a stable IT infrastructure. | ' +
      'Skills: IT Hardware Support, Help Desk Support, Windows System Administration, Microsoft Office'
  },
  {
    company: 'United Gulf Insurance Brokers One Person Co. L.L.C. (UGIB), Dubai, UAE',
    position: 'IT Supervisor',
    period: 'Apr 2006 – Jul 2008',
    description: 'Supervised the IT department, overseeing web development projects and system administration tasks. | ' +
      'Developed and maintained company websites, enhancing online services and client engagement. | ' +
      'Managed Microsoft SQL Server and Windows Server environments, ensuring data integrity and system reliability. | ' +
      'Skills: Web Design, Web Development, Microsoft SQL Server, Windows Server, IT Management'
  },
  {
    company: 'Amertron Inc., Clark Angeles City,Philippines',
    position: 'MIS Senior Supervisor',
    period: 'Oct 2004 – Jan 2006',
    description: 'Led the Management Information Systems team, overseeing software development and system administration. | ' +
      'Managed software projects from conception to deployment, ensuring alignment with business objectives. | ' +
      'Maintained and optimized MIS infrastructure, contributing to operational efficiency. | ' +
      'Skills: Software Project Management, Management Information Systems (MIS), Software Development, System Administration'
  },
  {
    company: 'Integrated Solutions Technology, Makati, Philippines',
    position: 'Software Programmer',
    period: 'Feb 2004 – Jul 2004',
    description: 'Developed software applications using VB.NET and Oracle SQL Developer, meeting client specifications. | ' +
      'Collaborated with teams to design, code, and test software solutions, ensuring quality and performance. | ' +
      'Skills: VB.NET, Oracle SQL Developer, Software Development, Application Programming'
  },
  {
    company: 'L&T International Group Philippines Inc., Clark Angeles City, Philippines',
    position: 'Systems Support Specialist',
    period: 'Nov 1998 – Jan 2004',
    description: 'Provided technical support and maintenance for IT systems, ensuring continuous operations. | ' +
      'Created technical documentation and assisted in software development projects. | ' +
      'Managed help desk support, resolving user issues promptly and effectively. | ' +
      'Skills: Technical Documentation, IT Hardware Support, Programming, Help Desk Support, Technical Support'
  }
];

const ExperienceTimeline: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Professional Experience</h2>
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







