import Icon from "@/components/ui/icon";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide font-bold">MigoMc</div>
        <nav className="flex gap-6 md:gap-8 items-center">
          <a
            href="#donates"
            className="text-white hover:text-emerald-400 transition-colors duration-300 uppercase text-sm"
          >
            Донаты
          </a>
          <a
            href="#cases"
            className="text-white hover:text-emerald-400 transition-colors duration-300 uppercase text-sm"
          >
            Кейсы
          </a>
          <a
            href="https://t.me/migomc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 text-sm transition-all duration-300 uppercase tracking-wide"
          >
            <Icon name="MessageCircle" size={16} />
            Telegram
          </a>
        </nav>
      </div>
    </header>
  );
}
