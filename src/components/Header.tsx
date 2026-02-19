import Icon from "@/components/ui/icon";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-20 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-red-500 text-lg uppercase tracking-wide font-bold">MigoMc</div>
        <nav className="flex gap-4 md:gap-6 items-center">
          <a
            href="#donates"
            className="text-white hover:text-red-400 transition-colors duration-300 uppercase text-sm hidden sm:block"
          >
            Донаты
          </a>
          <a
            href="#cases"
            className="text-white hover:text-red-400 transition-colors duration-300 uppercase text-sm hidden sm:block"
          >
            Кейсы
          </a>
          <a
            href="#rules"
            className="text-white hover:text-red-400 transition-colors duration-300 uppercase text-sm hidden sm:block"
          >
            Правила
          </a>
          <a
            href="#forum"
            className="text-white hover:text-red-400 transition-colors duration-300 uppercase text-sm hidden sm:block"
          >
            Форум
          </a>
          <a
            href="https://t.me/migomc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm transition-all duration-300 uppercase tracking-wide"
          >
            <Icon name="MessageCircle" size={16} />
            Telegram
          </a>
        </nav>
      </div>
    </header>
  );
}
