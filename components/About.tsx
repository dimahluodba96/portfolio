import profilePic from '@/public/images/profile.jpg'
import Image from 'next/image'
import Technologies from './Technologies'

interface AboutProps {
  language: 'en' | 'fr'
}

export default function About({ language }: AboutProps) {
  const content = {
    en: {
      title: 'About Me',
      paragraphs: [
        "Highly motivated and experienced software engineer with a proven track record in designing, developing, and maintaining robust and scalable backend systems.",
        "Experience in data acquisition, processing, and pipeline development, with strong proficiency in Go, Python, and Rust. Eager to contribute to innovative projects and seeking a challenging role in a dynamic environment.",
        "Throughout my career, I have worked on numerous projects with diverse programming languages, technologies, and requirements that go beyond the field of computer science; also, I have successfully led developer teams to deliver scalable software solutions that exceed client expectations and demands.",
        "to achieve something as individuals, we must first be individuals."
      ]
    },
    fr: {
      title: 'À propos de moi',
      paragraphs: [
        "Ingénieur logiciel hautement motivé et expérimenté avec un parcours prouvé dans la conception, le développement et la maintenance de systèmes backend robustes et évolutifs.",
        "Expérience dans l'acquisition de données, le traitement et le développement de pipelines, avec une forte compétence en Go, Python et Rust. Désireux de contribuer à des projets innovants et à la recherche d'un rôle stimulant dans un environnement dynamique.",
        "Tout au long de ma carrière, j'ai travaillé sur de nombreux projets avec divers langages de programmation, technologies et exigences qui vont au-delà du domaine de l'informatique ; j'ai également dirigé avec succès des équipes de développeurs pour fournir des solutions logicielles évolutives qui dépassent les attentes et les demandes des clients.",
        "pour réaliser quelque chose en tant qu'individus, nous devons d'abord être des individus."
      ]
    }
  }

  return (
    <section className="max-w-7xl mx-auto space-y-12 px-6 md:px-0">
      <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
        <Image
          src={profilePic}
          alt="Abdoul Hamid COULIBALY"
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
          priority
        />
        <div className="absolute inset-0 ring-1 ring-white/10 rounded-2xl pointer-events-none" />
      </div>

      <div className="space-y-8">
        <div className="space-y-8 text-muted text-lg md:text-xl leading-relaxed">
          {content[language].paragraphs.map((paragraph, index) => (
            <p key={index} className={`${index === 3 ? "italic" : ""} max-w-prose`}>
              {paragraph}
            </p>
          ))}
        </div>
        <Technologies />
      </div>
    </section>
  )
}
