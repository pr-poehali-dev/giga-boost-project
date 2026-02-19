import Icon from "@/components/ui/icon";

const donates = [
  { name: "Magister", price: 23 },
  { name: "Gladiator", price: 45 },
  { name: "Grom", price: 67 },
  { name: "Lucifer", price: 159 },
  { name: "Storm", price: 278 },
  { name: "Magma", price: 567 },
  { name: "Prince", price: 1938 },
];

const donateCases = [
  { name: "Кейс с донатом", amount: "1 шт", price: 89 },
  { name: "Кейс с донатом", amount: "3 шт", price: 159 },
  { name: "Кейс с донатом", amount: "5 шт", price: 256 },
];

const prefixCases = [
  { name: "Кейс с префиксом", amount: "1 шт", price: 22 },
  { name: "Кейс с префиксом", amount: "3 шт", price: 35 },
  { name: "Кейс с префиксом", amount: "5 шт", price: 45 },
];

export default function Featured() {
  return (
    <div id="donates" className="bg-neutral-950 text-white px-6 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto">
        <h3 className="uppercase mb-2 text-sm tracking-wide text-emerald-400">Прокачай свой аккаунт</h3>
        <h2 className="text-3xl lg:text-5xl font-bold mb-12 tracking-tight">Донаты</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {donates.map((d) => (
            <div
              key={d.name}
              className="bg-neutral-900 border border-neutral-800 p-5 flex flex-col items-center gap-3 hover:border-emerald-500/50 transition-colors duration-300"
            >
              <Icon name="Shield" size={28} className="text-emerald-400" />
              <span className="font-semibold text-base">{d.name}</span>
              <span className="text-emerald-400 font-bold text-lg">{d.price} ₽</span>
            </div>
          ))}
        </div>

        <div id="cases" className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="uppercase mb-2 text-sm tracking-wide text-purple-400">Испытай удачу</h3>
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 tracking-tight">Кейсы с донатом</h2>
            <div className="flex flex-col gap-3">
              {donateCases.map((c) => (
                <div
                  key={c.price}
                  className="bg-neutral-900 border border-neutral-800 p-4 flex justify-between items-center hover:border-purple-500/50 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3">
                    <Icon name="Box" size={20} className="text-purple-400" />
                    <span>{c.name} — <span className="text-neutral-400">{c.amount}</span></span>
                  </div>
                  <span className="text-purple-400 font-bold">{c.price} ₽</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="uppercase mb-2 text-sm tracking-wide text-amber-400">Выделись среди всех</h3>
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 tracking-tight">Кейсы с префиксом</h2>
            <div className="flex flex-col gap-3">
              {prefixCases.map((c) => (
                <div
                  key={c.price}
                  className="bg-neutral-900 border border-neutral-800 p-4 flex justify-between items-center hover:border-amber-500/50 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3">
                    <Icon name="Tag" size={20} className="text-amber-400" />
                    <span>{c.name} — <span className="text-neutral-400">{c.amount}</span></span>
                  </div>
                  <span className="text-amber-400 font-bold">{c.price} ₽</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
