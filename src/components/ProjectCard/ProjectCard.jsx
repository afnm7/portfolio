import "./ProjectCard.css";

export function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__top">
        <span className="project-card__id">{project.id}</span>
        <span className="project-card__subtitle">{project.subtitle}</span>
      </div>

      <h3>{project.title}</h3>

      <div className="project-card__tech">
        {project.tech.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <p className="project-card__description">{project.description}</p>

      <ul className="project-card__points">
        {project.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <div className="project-card__tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}