import { motion } from "motion/react";
import { ExternalLink, LineChart } from "lucide-react";
import { codingProfiles } from "../data";

function thumioPreview(pageUrl: string) {
  return `https://image.thum.io/get/width/1400/crop/900/noanimate/${encodeURIComponent(pageUrl)}`;
}

export function CodingProfiles() {
  return (
    <section id="coding-profiles" className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">Practice</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-4 text-[#F5F5F5]">Coding Profiles</h2>
          <p className="text-sm text-gray-500 max-w-2xl leading-relaxed">
            LeetCode stats and heatmap load live via{" "}
            <span className="text-gray-400">LeetCard</span>. takeUforward uses your{" "}
            <span className="text-gray-400">tuf-profile.png</span> asset for a crisp, consistent preview.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {codingProfiles.map((profile, index) => {
            const primarySrc = profile.previewSrc ?? thumioPreview(profile.profileUrl);
            return (
              <motion.article
                key={profile.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col bg-[#151515] border border-white/10 rounded-sm overflow-hidden hover:border-[#3B82F6]/40 transition-colors duration-300 group"
              >
                <a
                  href={profile.profileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0 z-20 cursor-none"
                  aria-label={`Open ${profile.title} — ${profile.username}`}
                />

                <div className="relative z-10 flex items-start justify-between gap-4 p-6 pb-4 pointer-events-none border-b border-white/5">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="text-[#D4FF00] shrink-0">
                      <LineChart className="w-6 h-6" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold uppercase tracking-tight text-[#F5F5F5] group-hover:text-[#D4FF00] transition-colors">
                        {profile.title}
                      </h3>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mt-1">
                        @{profile.username}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-[#D4FF00] transition-colors shrink-0" aria-hidden />
                </div>

                <p className="relative z-10 px-6 text-xs text-gray-500 pointer-events-none">{profile.subtitle}</p>

                <div className="relative z-10 mt-4 mx-6 mb-6 rounded-sm overflow-hidden border border-white/10 bg-[#0A0A0A] pointer-events-none">
                  <img
                    src={primarySrc}
                    alt={`${profile.title} profile preview`}
                    className="w-full h-auto object-top object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement;
                      if (profile.previewSrc && el.src !== thumioPreview(profile.profileUrl)) {
                        el.src = thumioPreview(profile.profileUrl);
                      } else {
                        el.style.display = "none";
                      }
                    }}
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
