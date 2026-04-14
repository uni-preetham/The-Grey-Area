import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export default function About() {
  return (
    <div className="min-h-screen pt-24 md:pt-28 pb-20 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto space-y-32">
        {/* Agency Philosophy */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl mb-12">About</h1>
          <div className="space-y-6 text-lg md:text-xl opacity-90 leading-relaxed">
            <p>
              The Grey Area exists in the space between <strong>dance and film</strong>. Not one. Not the other. But the conversation in between.
            </p>
            <p>
              We believe art isn't meant to live in fixed boxes. Dance doesn't belong only on stage. Film isn't just about cameras and cuts. Art is fluid. It shifts with environments, platforms, audiences, and intention.
            </p>
            <p>
              The Grey Area was created to let movement take new shapes — on screen, in spaces, and in moments where dance and film naturally collide.
            </p>
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <h2 className="text-3xl md:text-5xl mb-12">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl">Choreography</h3>
              <p className="opacity-70 leading-relaxed">
                Movement crafted for screens, stages, and spaces — never generic, always intentional.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl">Creative Direction</h3>
              <p className="opacity-70 leading-relaxed">
                From concept to execution, we shape the full visual language so everything speaks the same story.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl">Dance-Based Films</h3>
              <p className="opacity-70 leading-relaxed">
                Narrative, performance, and visuals working together — made specifically for the lens.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl">Corporate & Creative Shows</h3>
              <p className="opacity-70 leading-relaxed">
                Polished, impactful performances that balance structure, creativity, and clarity.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Founders */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-5xl mb-16">Meet The Founders</h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[3/4] bg-muted overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1621973775729-b25321645ada?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Shraddha Gopinath"
                className="w-full h-full object-cover grayscale"
              />
              <div
                className="absolute inset-0 opacity-15 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-col justify-center space-y-6"
            >
              <div>
                <h3 className="text-3xl md:text-4xl mb-2">Shraddha Gopinath</h3>
                <p className="text-muted-foreground text-sm uppercase tracking-widest">
                  Creative Director & Choreographer
                </p>
              </div>

              <div className="space-y-4 text-base md:text-lg opacity-90 leading-relaxed">
                <p>
                  With over 7 years of experience, Shraddha approaches movement as more than dance — to her, everything in life is choreography.
                </p>
                <p>
                  From how a story unfolds to how a frame breathes, she designs movement with purpose, emotion, and clarity. Her work bridges instinct and intention, shaping performances that feel natural, cinematic, and deeply human.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[3/4] bg-muted overflow-hidden md:order-2"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1590086782792-42dd2350140d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Rishabh R"
                className="w-full h-full object-cover grayscale"
              />
              <div
                className="absolute inset-0 opacity-15 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-col justify-center space-y-6 md:order-1"
            >
              <div>
                <h3 className="text-3xl md:text-4xl mb-2">Rishabh R</h3>
                <p className="text-muted-foreground text-sm uppercase tracking-widest">
                  Ideation, Structure & Choreography
                </p>
              </div>

              <div className="space-y-4 text-base md:text-lg opacity-90 leading-relaxed">
                <p>
                  Trained in multiple western dance forms, Rishabh brings a sharp eye for ideation, rhythm, and structure.
                </p>
                <p>
                  He understands how movement translates across formats and platforms, ensuring ideas don't just look good — they work. His strength lies in shaping raw creativity into cohesive, impactful narratives.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
