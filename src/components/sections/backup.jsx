import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Javscript",
    "TypeScript",
    "Redux",
    "HTML",
    "CSS",
    "Sass",
    "TailwindCSS",
    "Bootstrap",
    
   
  ];

  

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
  <p className="text-gray-300 mb-6">
    Passionate developer with expertise in building scalable web
    applications and creating innovative solutions.
  </p>

  {/* Remove grid and center the whole block */}
  <div className="flex justify-center">
    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all flex flex-col items-center text-center">
      <h3 className="text-xl font-bold mb-4">Front-End</h3>
      <div className="flex flex-wrap justify-center gap-2">
        {frontendSkills.map((tech, key) => (
          <span
            key={key}
            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
</div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
              <div className="text-gray-300 space-y-2">
  <p>
    <strong>Mastering Front-End <br /> (Feb 2024–Feb 2025)</strong> – Online course taught by Julien Azambourg
  </p>
  <p className="mt-2">
    Completed an intensive front-end development program focused on building modern, responsive web applications.
  </p>
  <p className="mt-2">Covered essential technologies including:</p>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li><strong>HTML & CSS</strong> – For semantic, accessible layouts</li>
    <li><strong>Sass</strong> – For advanced, modular styling</li>
    <li><strong>JavaScript</strong> – For dynamic functionality</li>
    <li><strong>React</strong> – For component-based architecture</li>
    <li><strong>Redux</strong> – For state management</li>
    <li><strong>TypeScript</strong> – For type-safe application development</li>
  </ul>
  <p className="mt-2">
    The course emphasized hands-on projects, performance optimization, and best practices in front-end engineering.
  </p>
</div>
</ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
////////////////////////////////////
                <div>
                  <h4 className="font-semibold">Fitness Trainer App (2025)</h4>
                  <p>
                    Developed a fully responsive workout application allowing users to build custom routines.
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    <strong>Tech stack:</strong> React, Redux Toolkit, Sass, Vite
                  </p>
                </div>
/////////////////////////////////////////////////////////////////////////////
                <div>
                  <h4 className="font-semibold">Arbre Bnb (2025)</h4>
                  <p>
                    Created a booking website for treehouse accommodations, featuring immersive UI, lightbox galleries, and live pricing.
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    <strong>Tech stack:</strong> React, React DatePicker, Sass, Lightbox, Vite
                  </p>
                </div>
//////////////////////////////////////////////////////////////////////////////
                <div>
                  <h4 className="font-semibold">Puzzle Connect (2025)</h4>
                  <p>
                    Built a word puzzle game with timed rounds, hint mechanics, and a 3-lives system.
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    <strong>Tech stack:</strong> React, Sass
                  </p>
                </div>
/////////////////////////////////////////////////////////////////////////
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};