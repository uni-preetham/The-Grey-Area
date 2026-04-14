import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useState } from "react";

const projectCategories = {
  all: "All Work",
  brandFilms: "Brand Films",
  creative: "Creative Projects",
  musicVideos: "Music Videos",
  photoSeries: "Photo Series",
  stage: "Stage Choreographies",
  documentary: "Documentary",
};

const projects = [
  // Brand Films
  {
    id: "punarvi-temple-jewels",
    title: "Punarvi Temple Jewellery",
    category: "brandFilms",
    type: "TVC & Theatre Ad",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    description: "Timeless elegance reimagined — a museum relic transforms into a living embodiment of heritage through classical dance, celebrating the enduring beauty of temple jewellery.",
  },
  {
    id: "punarvi-gemstones",
    title: "Punarvi Gemstones",
    category: "brandFilms",
    type: "TVC & Theatre Ad",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    description: "Drawing from Navarasa and the nine gemstones, the film translates emotion into movement — each rasa expressed through distinct performance language, colour, and rhythm.",
  },
  {
    id: "paraiba-silver",
    title: "Paraiba Jewels",
    category: "brandFilms",
    type: "TVC & Theatre Ad",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    description: "A modern-day Cinderella story centred on effortless transformation — highlighting how silver jewellery elevates the everyday with brightness and elegance.",
  },
  {
    id: "paraiba-gemstones",
    title: "Paraiba Gemstones",
    category: "brandFilms",
    type: "TVC & Theatre Ad",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    description: "A visually immersive experience exploring gemstones through vibrant colour, stylised mudras, and abstract movement — a bold contemporary interpretation.",
  },
  {
    id: "vidyarthi-bhavan",
    title: "Vidyarthi Bhavan",
    category: "brandFilms",
    type: "Karnataka Rajyotsava Film",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    description: "Translating cultural cues into clean movement vocabulary — crafting rhythm, controlled framing, and performer blocking to create an authentic cultural narrative.",
  },
  {
    id: "simply-cheese",
    title: "Simply Cheese",
    category: "brandFilms",
    type: "TVC",
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    description: "Dynamic movement designed to translate product personality — intentional blocking, pace, and spatial interactions that enhance product engagement and narrative clarity.",
  },
  {
    id: "hopscotch",
    title: "Hopscotch",
    category: "brandFilms",
    type: "Promo Launch Video",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    description: "A high-energy musical-style piece with child performers — dynamic formations and expressive gestures creating spontaneity within a controlled visual framework.",
  },

  // Creative Projects
  {
    id: "bol",
    title: "Bol",
    category: "creative",
    type: "Creative Project",
    image: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    description: "A visual symphony exploring the tension and harmony between opposites — contrasting movement languages converge into cohesion, capturing the beauty of duality resolving into unity.",
  },
  {
    id: "centre",
    title: "Centre",
    category: "creative",
    type: "Creative Project",
    image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    description: "Exploring how love anchors and recentres the self through movement — fluid transitions and spatial harmony reflect emotional equilibrium, balance, and bliss.",
  },

  // Music Videos
  {
    id: "family-drama",
    title: "Family Drama",
    category: "musicVideos",
    type: "Promo Song",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    description: "Motif-driven movement language translating narrative energy into structured performance — dynamic transitions complement the song's emotional contours.",
  },
  {
    id: "podu-mike",
    title: "Podu Mike",
    category: "musicVideos",
    type: "Music Video",
    image: "https://images.unsplash.com/photo-1524835005923-56700046e4a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    description: "Signature hook steps and performance language for this energetic hip-hop anthem — camera-aware movement amplifies the beat's energy and creates trend-ready dance identity.",
  },
  {
    id: "thewaddup",
    title: "TheWaddup",
    category: "musicVideos",
    type: "Music Video",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    description: "High-energy desi hip-hop movement blending raw street-inspired vocabulary with structured performance — dynamic blocking and stylised gestures amplify the track's intensity.",
  },
  {
    id: "hey-lovely-daali",
    title: "Hey Lovely Daali",
    category: "musicVideos",
    type: "Vidyapati Promo Song",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    description: "Structured movement language designed to translate the track's emotional tone — spatial formations and performer interactions accentuate narrative intent.",
  },

  // Photo Series
  {
    id: "forbidden-kitchen",
    title: "The Forbidden Kitchen",
    category: "photoSeries",
    type: "Creative Photo Series",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    description: "A conceptual folktale — two classical dancers enter a forbidden kitchen, discovering diverse dance forms beyond traditional boundaries through evolving movement and stylised staging.",
  },
  {
    id: "posters-from-around",
    title: "Posters From Around",
    category: "photoSeries",
    type: "Creative Photo Series",
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    description: "Reimagining vintage Bollywood poster culture — character-driven movement and expressive poses create a playful yet cinematic homage to a bygone era.",
  },

  // Stage
  {
    id: "stage-showreel",
    title: "Choreography Practice & Exploration",
    category: "stage",
    type: "Show Reel",
    image: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    description: "Diverse movement vocabularies spanning Indian and Western forms — thoughtful blocking, expressive detailing, and emphasis on visual composition across varying stages and contexts.",
  },

  // Documentary
  {
    id: "aradhana",
    title: "Aradhana",
    category: "documentary",
    type: "Dance Documentary",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    description: "Tracing the journey of a Kathak Rangapravesha — immersive day-in-the-life narrative capturing rituals, preparation, and performance documenting a dancer's passage into performance.",
  },
  {
    id: "etram",
    title: "Etram",
    category: "documentary",
    type: "Bharatanatyam Show Film",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    description: "Capturing Bharatanatyam through a refined lens — thoughtful framing and rhythm-driven edits translate stage choreography into an immersive cinematic experience.",
  },
  {
    id: "rehearsal",
    title: "A Costume Rehearsal",
    category: "documentary",
    type: "Creative Project",
    image: "https://images.unsplash.com/photo-1534329539061-64caeb388c42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    description: "Exploring the transition from practice to performance — the introduction of costume transforms movement, energy, and presence, depicting where preparation gives way to character.",
  },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof projectCategories>("all");

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl mb-8">Selected Works</h1>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {(Object.keys(projectCategories) as Array<keyof typeof projectCategories>).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-4 py-2 text-xs uppercase tracking-widest transition-all duration-300 border ${
                  selectedCategory === key
                    ? "border-foreground bg-foreground text-background"
                    : "border-foreground/20 hover:border-foreground/50"
                }`}
              >
                {projectCategories[key]}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="space-y-24">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: Math.min(index * 0.1, 0.5) }}
            >
              <Link
                to={`/projects/${project.id}`}
                className="group block"
              >
                <div className="grid md:grid-cols-12 gap-8 items-center">
                  <div
                    className={`md:col-span-7 ${
                      index % 2 === 0 ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <div className="relative aspect-[16/10] bg-muted overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                      <div
                        className="absolute inset-0 opacity-10 mix-blend-overlay"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        }}
                      />
                    </div>
                  </div>

                  <div
                    className={`md:col-span-5 ${
                      index % 2 === 0 ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-baseline gap-4">
                        <span className="text-xs uppercase tracking-widest opacity-50">
                          {project.type}
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl group-hover:opacity-70 transition-opacity duration-300">
                        {project.title}
                      </h2>
                      <p className="text-base md:text-lg opacity-70 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="pt-4">
                        <span className="inline-flex items-center gap-2 text-sm uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                          View Project
                          <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
