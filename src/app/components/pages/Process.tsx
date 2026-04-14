import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export default function Process() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-7xl mb-8">Philosophy</h1>
        </motion.div>

        <div className="space-y-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-12 gap-12 items-center"
          >
            <div className="md:col-span-5">
              <div className="relative aspect-square bg-muted overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1602800805330-6bab9656ea47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Process imagery"
                  className="w-full h-full object-cover grayscale"
                />
                <div
                  className="absolute inset-0 opacity-15 mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                />
              </div>
            </div>

            <div className="md:col-span-7">
              <h2 className="text-3xl md:text-5xl mb-8">The Space Between</h2>
              <div className="space-y-6 text-base md:text-lg opacity-90 leading-relaxed">
                <p>
                  The Grey Area is not a place of compromise but of possibility. It is
                  where dualities collapse — where classical training meets contemporary
                  impulse, where Indian aesthetics converse with global modernism, where
                  stillness speaks as loudly as motion.
                </p>
                <p>
                  Our process begins in silence. We listen to what the body already
                  knows before imposing choreography. We work with improvisation not as
                  freedom from structure, but as a rigorous practice of attention.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-12 gap-12 items-center"
          >
            <div className="md:col-span-7 md:order-2">
              <div className="relative aspect-[3/2] bg-muted overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1669462126732-95d06d81e066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Movement exploration"
                  className="w-full h-full object-cover grayscale"
                />
                <div
                  className="absolute inset-0 opacity-15 mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                />
              </div>
            </div>

            <div className="md:col-span-5 md:order-1">
              <h2 className="text-3xl md:text-5xl mb-8">Body as Archive</h2>
              <div className="space-y-6 text-base md:text-lg opacity-90 leading-relaxed">
                <p>
                  The body remembers what the mind forgets. It carries gestures,
                  traumas, joys, and histories that pre-date language. Our work
                  excavates these bodily archives, making visible the invisible layers
                  of experience.
                </p>
                <p>
                  We are interested in what happens when classical forms are stripped of
                  their narrative context and reassembled according to emotional logic
                  rather than mythological story.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-12 gap-12 items-center"
          >
            <div className="md:col-span-5">
              <div className="relative aspect-[2/3] bg-muted overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1575140009830-de009da7e0f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Cinematic approach"
                  className="w-full h-full object-cover grayscale"
                />
                <div
                  className="absolute inset-0 opacity-15 mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                />
              </div>
            </div>

            <div className="md:col-span-7">
              <h2 className="text-3xl md:text-5xl mb-8">Cinema & Movement</h2>
              <div className="space-y-6 text-base md:text-lg opacity-90 leading-relaxed">
                <p>
                  Film allows us to choreograph time itself. The camera becomes another
                  dancer, creating intimacy through close-ups, isolation through wide
                  shots, rhythm through editing.
                </p>
                <p>
                  We approach dance films not as documentation but as a distinct art
                  form where movement and cinematography are inseparable. The frame is
                  the proscenium, light is the collaborator, editing is the final
                  choreography.
                </p>
                <p className="italic opacity-70" style={{ fontFamily: "var(--font-serif)" }}>
                  "We create not to entertain, but to witness. Not to explain, but to
                  evoke. Not to settle, but to unsettle."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
