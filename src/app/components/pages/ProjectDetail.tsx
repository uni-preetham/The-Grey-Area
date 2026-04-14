import { motion } from "motion/react";
import { useParams, Link } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowLeft } from "lucide-react";

const projectData: Record<string, any> = {
  "punarvi-temple-jewels": {
    title: "Punarvi Temple Jewellery",
    year: "2024",
    type: "TVC & Theatre Ad",
    heroImage: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    description: "Built around the idea of timeless elegance, the narrative reimagines a museum relic coming to life—transforming into a living embodiment of heritage through dance. Movement vocabulary was rooted in classical expression, highlighting the enduring beauty and cultural richness of temple jewellery. Through controlled framing, stylised performance, and a strong narrative arc, the film positions the jewellery as a symbol of legacy that transcends time.",
    credits: [
      { role: "Creative Direction & Choreography", name: "The Grey Area" },
      { role: "Production", name: "The Grey Area" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
  },
  "bol": {
    title: "Bol",
    year: "2024",
    type: "Creative Project",
    heroImage: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    description: "A conceptual film exploring the tension and harmony between two opposites. Structured as a visual symphony, the narrative unfolds through contrasting movement languages, rhythms, and spatial dynamics that gradually converge. The choreographic approach emphasised duality—control and release, stillness and intensity—crafting a layered performance that evolves into cohesion. Through precise framing, rhythmic progression, and a refined visual language, the film captures the beauty of contrast resolving into unity.",
    credits: [
      { role: "Creative Direction, Choreography & Production", name: "The Grey Area" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1562693017-1cedc3ff60cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
  },
  "aradhana": {
    title: "Aradhana",
    year: "2024",
    type: "Dance Documentary",
    heroImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    description: "A dance documentary that traces the journey of a Kathak Rangapravesha. Structured as an immersive, day-in-the-life narrative, the film captures the rituals, preparation, and performance that define this significant milestone. The approach blends observational storytelling with choreographed moments, using rhythm, detail, and controlled framing to document both the discipline and emotion embedded within the tradition. The result is an intimate and culturally rooted portrayal of a dancer's passage into performance.",
    credits: [
      { role: "Creative Direction, Choreography & Production", name: "The Grey Area" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1524835005923-56700046e4a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
  },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = id ? projectData[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen pt-24 md:pt-28 pb-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <h1 className="text-4xl mb-8">Project not found</h1>
          <Link to="/projects" className="text-sm uppercase tracking-widest hover:opacity-70">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div
            className="absolute inset-0 opacity-15 mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-[1400px] mx-auto w-full"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest mb-8 opacity-70 hover:opacity-100 transition-opacity"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6">{project.title}</h1>
            <div className="flex gap-6 text-sm uppercase tracking-widest opacity-70">
              <span>{project.year}</span>
              <span>•</span>
              <span>{project.type}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-12 gap-12 mb-32"
          >
            <div className="md:col-span-8 md:col-start-3">
              <p className="text-xl md:text-2xl leading-relaxed opacity-90" style={{ fontFamily: "var(--font-serif)" }}>
                {project.description}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-32"
          >
            <h3 className="text-2xl md:text-3xl mb-8 opacity-70">Credits</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {project.credits.map((credit: any, index: number) => (
                <div key={index} className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-widest opacity-50">
                    {credit.role}
                  </span>
                  <span className="text-lg">{credit.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl md:text-3xl mb-12 opacity-70">Stills</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {project.gallery.map((image: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="relative aspect-[4/5] bg-muted overflow-hidden"
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${project.title} still ${index + 1}`}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div
                    className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
