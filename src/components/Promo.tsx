import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Icon from "@/components/ui/icon";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/1f083c7c-f654-4382-a892-eb663732d939/files/092eb572-a242-43d0-96ae-bab8c3efd486.jpg"
            alt="MigoMc Items"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-transparent to-black/50" />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-red-500 uppercase z-10 text-sm md:text-base lg:text-lg font-semibold" id="forum">
        Форум сервера
      </h3>

      <div className="relative z-10 px-6 max-w-4xl mx-auto text-center">
        <Icon name="MessageSquare" size={48} className="text-red-500 mx-auto mb-6" />
        <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed">
          Нужна помощь? На нашем форуме — <span className="text-red-400">поддержка</span>,{" "}
          <span className="text-red-300">репорты</span>,{" "}
          <span className="text-red-400">разбаны</span> и{" "}
          <span className="text-red-500">решение проблем</span> с покупками.
        </p>
      </div>

      <p className="absolute bottom-12 right-6 text-neutral-500 text-sm z-10 max-w-xs text-right">
        5 каналов поддержки · Репорты · Разбаны · Заявки на пост · Ошибки покупок
      </p>
    </div>
  );
}
