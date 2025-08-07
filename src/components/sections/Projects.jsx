import { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const [openImage, setOpenImage] = useState(null);
  
  const handleImageClick = (images, index) => {
    setOpenImage({ images, index });
  };

  const closeModal = () => setOpenImage(null);

  const showPrev = () => {
    if (openImage && openImage.index > 0) {
      setOpenImage((prev) => ({
        ...prev,
        index: prev.index - 1,
      }));
    }
  };

  const showNext = () => {
    if (openImage && openImage.index < openImage.images.length - 1) {
      setOpenImage((prev) => ({
        ...prev,
        index: prev.index + 1,
      }));
    }
  };

  const handleKeyDown = (e) => {
    if (!openImage) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") showPrev();
    if (e.key === "ArrowRight") showNext();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  const renderThumbnails = (images) => (
    <div className="flex gap-2 mt-2">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Screenshot ${index + 1}`}
          className="w-20 h-auto rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={() => handleImageClick(images, index)}
        />
      ))}
    </div>
  );

  const renderModal = () =>
    openImage && (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
        <div className="relative max-w-full max-h-full p-4 flex flex-col items-center">
          <button
            onClick={closeModal}
            className="absolute top-2 right-4 text-white text-2xl bg-black/50 rounded-full px-3 hover:bg-black"
            aria-label="Close"
          >
            ✕
          </button>

         
          <button
            onClick={showPrev}
            disabled={openImage.index === 0}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl px-2 bg-black/50 rounded hover:bg-black disabled:opacity-30"
            aria-label="Previous Image"
          >
            ←
          </button>
          <button
            onClick={showNext}
            disabled={openImage.index === openImage.images.length - 1}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl px-2 bg-black/50 rounded hover:bg-black disabled:opacity-30"
            aria-label="Next Image"
          >
            →
          </button>

          <img
            src={openImage.images[openImage.index]}
            alt="Full Preview"
            className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
          />
        </div>
      </div>
    );

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fitness Trainer */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow transition">
              <h3 className="text-xl font-bold mb-2">Fitness Trainer</h3>
              <p className="text-gray-400 mb-4">
                A responsive workout app with timers, reps, animated guidance, and audio cues.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Redux Toolkit", "Sass"].map((tech, i) => (
                  <span key={i} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://jero142.github.io/fitness-trainer/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-3 py-1 bg-blue-500 text-white font-medium rounded-full shadow-md hover:bg-blue-600 transition-colors"
              >
                View Project
              </a>
              {renderThumbnails([
                "images/fitness-trainer-screenshot-01.jpg",
                "images/fitness-trainer-screenshot-02.jpg",
                "images/fitness-trainer-screenshot-04.jpg",
              ])}
            </div>

            {/* Arbre BnB */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow transition">
              <h3 className="text-xl font-bold mb-2">Arbre BnB</h3>
              <p className="text-gray-400 mb-4">
                A calm, immersive booking site for treehouse accommodations built like a digital travel journal.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "React DatePicker", "Lightbox", "Sass"].map((tech, i) => (
                  <span key={i} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://jero142.github.io/arbre-bnb/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-3 py-1 bg-blue-500 text-white font-medium rounded-full shadow-md hover:bg-blue-600 transition-colors"
              >
                View Project
              </a>
              {renderThumbnails([
                "images/arbre-bnb-screenshot-01.jpg",
                "images/arbre-bnb-screenshot-02.jpg",
                "images/arbre-bnb-screenshot-04.jpg",
              ])}
            </div>

            {/* Puzzle Connect */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow transition">
              <h3 className="text-xl font-bold mb-2">Puzzle Connect</h3>
              <p className="text-gray-400 mb-4">
                A fast-paced word puzzle game with a countdown, hints, and a lives system.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Sass"].map((tech, i) => (
                  <span key={i} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://jero142.github.io/puzzle-connect/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-3 py-1 bg-blue-500 text-white font-medium rounded-full shadow-md hover:bg-blue-600 transition-colors"
              >
                View Project
              </a>
              {renderThumbnails([
                "images/puzzle-connect-screenshot-01.jpg",

              ])}
            </div>
          </div>
        </div>
        {renderModal()}
      </RevealOnScroll>
    </section>
  );
};