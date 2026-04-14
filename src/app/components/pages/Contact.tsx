import { motion } from "motion/react";
import { Mail, Instagram, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 md:pt-28 pb-20 px-6 md:px-12 flex items-center">
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-2 gap-20"
        >
          <div>
            <h1 className="text-5xl md:text-7xl mb-12">Let's Connect</h1>
            <div className="space-y-8 text-base md:text-lg opacity-90">
              <p>
                For collaborations, commissions, screening inquiries, or workshop
                opportunities, please reach out.
              </p>
              <p className="text-sm opacity-60">
                Based in Mumbai & Bangalore, India
                <br />
                Available for international projects
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h3 className="text-sm uppercase tracking-widest opacity-50 mb-6">
                Contact
              </h3>
              <a
                href="mailto:hello@thegreyarea.studio"
                className="flex items-center gap-4 text-xl hover:opacity-70 transition-opacity duration-300"
              >
                <Mail className="w-5 h-5" />
                <span style={{ fontFamily: "var(--font-serif)" }}>
                  hello@thegreyarea.studio
                </span>
              </a>
            </div>

            <div className="space-y-6">
              <h3 className="text-sm uppercase tracking-widest opacity-50 mb-6">
                Follow
              </h3>
              <div className="flex flex-col gap-4">
                <a
                  href="https://www.instagram.com/thegreyarea.project/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-base hover:opacity-70 transition-opacity duration-300"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/thegreyarea.project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-base hover:opacity-70 transition-opacity duration-300"
                >
                  <Facebook className="w-5 h-5" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            <div className="pt-12 border-t border-border">
              <p className="text-sm opacity-50">
                © {new Date().getFullYear()} The Grey Area
                <br />
                All rights reserved
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
