import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/1f083c7c-f654-4382-a892-eb663732d939/files/b7a56630-6f69-428f-a6f8-281e3ff8fa9a.jpg"
          alt="MigoMc Server"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-4 text-red-500 drop-shadow-[0_0_40px_rgba(239,68,68,0.3)]">
          MIGOMC
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90 mb-8 text-neutral-300">
          Лучший сервер Minecraft — донаты, кейсы и незабываемые приключения
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#donates"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-sm transition-all duration-300 uppercase tracking-wide font-semibold"
          >
            Купить донат
          </a>
          <a
            href="https://t.me/migomc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-8 py-3 text-sm transition-all duration-300 uppercase tracking-wide font-semibold"
          >
            Telegram канал
          </a>
        </div>
      </div>
    </div>
  );
}
