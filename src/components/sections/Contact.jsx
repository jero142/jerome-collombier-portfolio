import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";


export const Contact = () => {



  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
<RevealOnScroll>
  <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6 text-center">
    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent">
      Get In Touch
    </h2>
    <p className="text-gray-300 mb-6">
      Feel free to connect with me through the platforms below:
    </p>

    <div className="flex justify-center gap-6">
      {/* GitHub */}
      <a
        href="https://github.com/jero142"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform"
      >
        <img
          src="images/github-icon.png"
          alt="GitHub"
          className="w-30 h-30"
        />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/j%C3%A9r%C3%B4me-collombier-741ab549/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform"
      >
        <img
          src="images/LinkedIn_icon.png"
          alt="LinkedIn"
          className="w-30 h-30"
        />
      </a>
    </div>
  </div>
</RevealOnScroll>
    </section>
  );
};

