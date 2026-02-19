import Icon from "@/components/ui/icon";
import { useState } from "react";

const rules = [
  {
    title: "5. Общение, присвоение имен",
    items: [
      "Запрещено использование нецензурных выражений в игре и на форуме",
      "Запрещено давать любую рекламу на форуме и в игре",
      "Запрещено давать имена, связанные с Администрацией сервера",
      "Администрация не меняет первоначальных имен аккаунтов",
    ],
  },
  {
    title: "6. Ведение торговли",
    items: [
      "Запрещена покупка/продажа игровых благ за реальные деньги",
      "Запрещено вымогательство для получения доступа к чужому аккаунту",
    ],
  },
  {
    title: "7. Правила для администраторов",
    items: [
      "Запрещено искусственное повышение уровня и любых параметров",
      "Запрещено нарушать игровой процесс и передавать вещи",
      "Запрещено запугивание и унижение игроков",
      "Запрещено использование прав в своих интересах",
      "Запрещены действия с игроком без запроса на помощь",
      "Запрещено передавать деньги, вещи и предметы игрокам",
      "Запрещено спрашивать реквизиты от аккаунтов",
    ],
  },
  {
    title: "8. Рекомендации",
    items: [
      "Будьте корректны в взаимодействии с игроками и администраторами",
      "Сообщайте о найденных багах на форуме",
      "При запросе помощи следуйте командам администратора",
      "Читайте новости на форуме — там публикуется полезная информация",
    ],
  },
];

export default function Rules() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div id="rules" className="bg-neutral-950 text-white px-6 py-16 lg:py-24 border-t border-red-900/20">
      <div className="max-w-4xl mx-auto">
        <h3 className="uppercase mb-2 text-sm tracking-wide text-red-500">Играй честно</h3>
        <h2 className="text-3xl lg:text-5xl font-bold mb-12 tracking-tight">Правила сервера</h2>

        <div className="flex flex-col gap-2">
          {rules.map((rule, i) => (
            <div key={i} className="border border-neutral-800 hover:border-red-900/50 transition-colors">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className="font-semibold text-sm sm:text-base">{rule.title}</span>
                <Icon
                  name={openIndex === i ? "ChevronUp" : "ChevronDown"}
                  size={18}
                  className="text-red-500 shrink-0 ml-4"
                />
              </button>
              {openIndex === i && (
                <div className="px-4 pb-4">
                  <ul className="flex flex-col gap-2">
                    {rule.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-neutral-400 text-sm">
                        <span className="text-red-500 mt-0.5 shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-neutral-600 text-xs mt-8 leading-relaxed">
          Правила могут изменяться без предупреждения. Регистрируясь в игре/сайте, вы принимаете правила пользования ресурсом.
          За серьёзные нарушения Администрация оставляет за собой право удаления аккаунта.
        </p>
      </div>
    </div>
  );
}
