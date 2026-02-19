import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-black py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between border-t border-red-900/30">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-red-500 text-xs sm:text-sm font-semibold">Меню</h3>
                <a
                  href="#donates"
                  className="text-neutral-300 hover:text-red-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Донаты
                </a>
                <a
                  href="#cases"
                  className="text-neutral-300 hover:text-red-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Кейсы
                </a>
                <a
                  href="#rules"
                  className="text-neutral-300 hover:text-red-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Правила
                </a>
                <a
                  href="https://t.me/migomc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-red-400 transition-colors duration-300 text-sm sm:text-base flex items-center gap-1"
                >
                  <Icon name="MessageCircle" size={14} />
                  Telegram
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-red-500 text-xs sm:text-sm font-semibold">Форум</h3>
                <span className="text-neutral-500 text-sm sm:text-base">Репорты</span>
                <span className="text-neutral-500 text-sm sm:text-base">Разбаны</span>
                <span className="text-neutral-500 text-sm sm:text-base">Заявки на пост</span>
                <span className="text-neutral-500 text-sm sm:text-base">Скам-жалобы</span>
                <span className="text-neutral-500 text-sm sm:text-base">Ошибки покупок</span>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-red-500 text-xs sm:text-sm font-semibold">Правила</h3>
                <span className="text-neutral-500 text-sm sm:text-base">Без мата и рекламы</span>
                <span className="text-neutral-500 text-sm sm:text-base">Честная торговля</span>
                <span className="text-neutral-500 text-sm sm:text-base">Уважение к игрокам</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 text-red-600 font-bold tracking-tight drop-shadow-[0_0_60px_rgba(239,68,68,0.2)]">
                MIGOMC
              </h1>
              <p className="text-neutral-600 text-sm sm:text-base">{new Date().getFullYear()} MigoMc</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
