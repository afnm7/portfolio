import "./Home.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { SectionLabel } from "../../components/SectionLabel/SectionLabel";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { DarkTechSection } from "../../components/DarkTechSection/DarkTechSection";
import { projects } from "../../data/projects";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useSectionTheme } from "../../hooks/useSectionTheme";

export function Home() {
  useScrollReveal();
  useSectionTheme("darktech", "dark-mode");

  const baseUrl = import.meta.env.BASE_URL;

  return (
    <>
      <Navbar />

      <main>
        <section id="home" className="hero section">
          <SectionLabel number="01" label="intro / developer portfolio" />

          <div className="hero__content">
            <p className="eyebrow">
              software engineering · backend · creative tech
            </p>

            <h1>
              Afnaan <br />
              Makhloufi
            </h1>

            <p className="hero__text">
              Software developer focused on backend systems, clean code,
              data-driven applications and creative technology.
            </p>

            <div className="hero__actions">
              <a href="#work" className="button button--primary">
                See my work
              </a>

              <a href="#contact" className="button button--secondary">
                Contact me
              </a>
            </div>
          </div>

          <div className="hero__image">
            <img
              src={`${baseUrl}images/profile/portfolio.jpeg`}
              alt="Afnaan Makhloufi"
              className="hero__profile-image"
            />
          </div>
        </section>

        <section id="about" className="about section reveal">
          <SectionLabel number="02" label="about / who i am" />

          <div className="section-inner about__grid">
            <div>
              <p className="eyebrow">about me</p>
              <h2>Software developer with a backend focus.</h2>
            </div>

            <div className="about__text">
              <p>
                I study HBO-ICT at the Amsterdam University of Applied Sciences.
                My focus is backend development, software architecture and
                maintainable applications.
              </p>

              <p>
                I like projects where data, logic and user value come together.
                I work with Java, TypeScript, Python, React, Vue, databases and
                REST APIs.
              </p>
            </div>
          </div>
        </section>

        <section id="work" className="work section reveal">
          <SectionLabel number="03" label="selected work / projects" />

          <div className="section-inner">
            <div className="section-heading">
              <p className="eyebrow">case studies</p>
              <h2>Selected Projects</h2>

              <p>
                These projects show backend logic, frontend structure, database
                design, testing and creative technology.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        <DarkTechSection />

        <section id="skills" className="skills section reveal">
          <SectionLabel number="05" label="stack / tools" />

          <div className="section-inner skills__grid">
            <div>
              <p className="eyebrow">technical stack</p>
              <h2>Skills.</h2>
            </div>

            <div className="skills__list">
              <span>Java</span>
              <span>TypeScript</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Python</span>
              <span>Spring Boot</span>
              <span>Express.js</span>
              <span>Flask</span>
              <span>Vue</span>
              <span>PostgreSQL</span>
              <span>MySQL</span>
              <span>Docker</span>
              <span>Vitest</span>
              <span>OpenCV</span>
              <span>MediaPipe</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}