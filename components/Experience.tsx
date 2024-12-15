interface ExperienceProps {
  language: 'en' | 'fr'
}

export default function Experience({ language }: ExperienceProps) {
  const content = {
    en: {
      title: 'Work Experience',
      jobs: [
        {
          title: 'Backend Engineer - Data Supply Chain',
          company: 'Univers (QoS Energy)',
          location: 'Nantes, France',
          period: 'Since November 2023',
          description: 'Contributing to the evolution and maintenance of Qantum, a SaaS platform for monitoring renewable energy power plants. Developing communication interfaces, providing technical support, and participating in continuous improvement initiatives.',
          skills: 'Go, Ruby on Rails, Python, RabbitMQ, Azure Blob Storage, Docker, Kubernetes, GitOps, Prometheus, OpenTelemetry, Opensearch'
        },
        {
          title: 'Software Engineer',
          company: 'EXFO',
          location: 'Saint-Jacques-de-la-Lande, 35136',
          period: 'October 2021 to October 2023',
          description: 'Analyzed usage and developed optimization tools for the SensAI software solution. Contributed to the development and integration of features for the Adaptive Service Assurance (ASA) Platform.',
          skills: 'Go, Python, Kafka, Docker, Kubernetes, AWS'
        },
        {
          title: 'Backend Developer',
          company: 'Resalocal',
          location: 'Talloires-Montmin, Haute-Savoie',
          period: 'May 2021 to July 2021',
          description: 'Integrated the API for the Apidae Tourism Information System and synchronized Smartmap with the SIT Apidae. Documented technical processes.',
          skills: 'PHP, Confluence, Jira, Kubernetes, Cloudinary'
        },
        {
          title: 'Freelance Web Developer',
          company: 'Independent',
          location: 'Côte d\'Ivoire · Remote',
          period: 'January 2019 to December 2020 · 2 years',
          description: 'Created websites, developed and integrated APIs.',
          skills: 'Laravel, Software Development, Spring Boot, Databases, Java'
        },
        {
          title: 'Junior Developer',
          company: 'OK-SERVICE · Internship',
          location: 'Bouaké, Vallée du Bandama, Côte d\'Ivoire',
          period: 'June 2019 to December 2019 · 7 months',
          description: 'Developed a store inventory and sales management application during a final year internship at a multi-service company. Tasks included studying existing systems, implementing a temporary solution (Microsoft Access application), designing and developing a web application for sales and inventory management, and deploying the application on Firebase.',
          skills: 'Laravel 7, VueJs, Bootstrap 4, Software Development, Databases'
        },
        {
          title: 'Web Developer',
          company: 'ABOUAKE.NET · Internship',
          location: 'Bouaké, Vallée du Bandama, Côte d\'Ivoire',
          period: 'June 2018 to August 2018 · 3 months',
          description: '2nd year school internship: Development of a web application for laundry management.',
          skills: 'AngularJS, Bootstrap3, PHP, Software Development, Databases'
        }
      ]
    },
    fr: {
      title: 'Expériences professionnelles',
      jobs: [
        {
          title: 'Ingénieur Backend - Data Supply Chain',
          company: 'Univers (QoS Energy)',
          location: 'Nantes',
          period: 'Depuis novembre 2023',
          description: 'Contribution à l\'évolution et à la maintenance de Qantum, une plateforme SaaS dédiée au monitoring des centrales électriques à énergies renouvelables. Développement d\'interfaces de communication, support technique et participation aux initiatives d\'amélioration continue.',
          skills: 'Go, Ruby on Rails, Python, RabbitMQ, Azure Blob Storage, Docker, Kubernetes, GitOps, Prometheus, OpenTelemetry, Opensearch'
        },
        {
          title: 'Ingénieur Logiciel',
          company: 'EXFO',
          location: 'Saint-Jacques-de-la-Lande, 35136',
          period: 'D\'octobre 2021 à octobre 2023',
          description: 'Analyse des usages et développement d\'outils d\'optimisation pour la solution logicielle SensAI. Contribution au développement et à l\'intégration de fonctionnalités pour la plateforme Adaptive Service Assurance (ASA).',
          skills: 'Go, Python, Kafka, Docker, Kubernetes, AWS'
        },
        {
          title: 'Développeur back-end',
          company: 'Resalocal',
          location: 'Talloires-Montmin, Haute-Savoie',
          period: 'De mai 2021 à juillet 2021',
          description: 'Intégration de l\'API du Système d\'Information Touristique Apidae et synchronisation entre l\'application Smartmap et le SIT Apidae. Documentation des processus techniques.',
          skills: 'PHP, Confluence, Jira, Kubernetes, Cloudinary'
        },
        {
          title: 'Développeur web freelance',
          company: 'Indépendant',
          location: 'Côte d\'Ivoire · À distance',
          period: 'janvier 2019 - décembre 2020 · 2 ans',
          description: 'Création de sites web, développement et intégration d\'API.',
          skills: 'Laravel, Développement de logiciels, Spring Boot, Bases de données, Java'
        },
        {
          title: 'Développeur junior',
          company: 'OK-SERVICE · Stage',
          location: 'Bouaké, Vallée du Bandama, Côte d\'Ivoire',
          period: 'juin 2019 - décembre 2019 · 7 mois',
          description: 'En stage de fin d\'études au sein d\'une entreprise multiservices (vente de fournitures scolaires et de matériels informatiques, imprimerie et prestations diverses), j\'ai été chargé de développer une application de gestion des stocks du magasin et des ventes. Tâches : Etude de l\'existant, mise en place d\'une solution temporaire (application Microsoft Access), conception et développement d\'une application web de gestion des ventes et des stocks, déploiement de l\'application sur Firebase.',
          skills: 'Laravel 7, VueJs, Bootstrap 4, Développement de logiciels, Bases de données'
        },
        {
          title: 'Développeur web',
          company: 'ABOUAKE.NET · Stage',
          location: 'Bouaké, Vallée du Bandama, Côte d\'Ivoire',
          period: 'juin 2018 - août 2018 · 3 mois',
          description: 'Stage école de 2e année : Développement d\'application web de gestion de pressing.',
          skills: 'AngularJS, Bootstrap3, PHP, Développement de logiciels, Bases de données'
        }
      ]
    }
  }

  return (
    <section className="space-y-12">
      <h2 className="text-3xl font-light">{content[language].title}</h2>
      {content[language].jobs.map((job, index) => (
        <div key={index} className="space-y-4">
          <h3 className="text-xl font-semibold">{job.title}</h3>
          <p className="text-gray-400">{job.company} - {job.location}</p>
          <p className="text-gray-500">{job.period}</p>
          <p className="text-gray-300">{job.description}</p>
          <p className="text-gray-400"><strong>Skills:</strong> {job.skills}</p>
        </div>
      ))}
    </section>
  )
}

