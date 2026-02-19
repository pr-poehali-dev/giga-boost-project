import Icon from "@/components/ui/icon";
import { useState } from "react";

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

type BuyItem = { name: string; price: number; amount?: string } | null;

function BuyModal({ item, onClose }: { item: BuyItem; onClose: () => void }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4" onClick={onClose}>
      <div
        className="bg-neutral-900 border border-red-900/50 p-6 sm:p-8 max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors">
          <Icon name="X" size={20} />
        </button>
        <div className="text-center">
          <Icon name="ShoppingCart" size={40} className="text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">
            {item.name}{item.amount ? ` — ${item.amount}` : ""}
          </h3>
          <p className="text-red-400 text-3xl font-bold mb-6">{item.price} ₽</p>
          <a
            href="https://t.me/migomc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-sm transition-all duration-300 uppercase tracking-wide font-semibold w-full text-center"
          >
            Купить в Telegram
          </a>
          <p className="text-neutral-500 text-xs mt-4">Для покупки напишите нам в Telegram</p>
        </div>
      </div>
    </div>
  );
}

export default function Featured() {
  const [buyItem, setBuyItem] = useState<BuyItem>(null);

  return (
    <>
      <div id="donates" className="bg-black text-white px-6 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <h3 className="uppercase mb-2 text-sm tracking-wide text-red-500">Прокачай свой аккаунт</h3>
          <h2 className="text-3xl lg:text-5xl font-bold mb-12 tracking-tight">Донаты</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
            {donates.map((d) => (
              <div
                key={d.name}
                className="bg-neutral-950 border border-neutral-800 p-5 flex flex-col items-center gap-3 hover:border-red-500/50 transition-all duration-300 group"
              >
                <Icon name="Shield" size={28} className="text-red-500 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-base">{d.name}</span>
                <span className="text-red-400 font-bold text-lg">{d.price} ₽</span>
                <button
                  onClick={() => setBuyItem(d)}
                  className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 text-xs uppercase tracking-wide font-semibold transition-all duration-300 w-full"
                >
                  Купить
                </button>
              </div>
            ))}
          </div>

          <div id="cases" className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="uppercase mb-2 text-sm tracking-wide text-red-400">Испытай удачу</h3>
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 tracking-tight">Кейсы с донатом</h2>
              <div className="flex flex-col gap-3">
                {donateCases.map((c) => (
                  <div
                    key={c.price}
                    className="bg-neutral-950 border border-neutral-800 p-4 flex justify-between items-center hover:border-red-500/50 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <Icon name="Box" size={20} className="text-red-400" />
                      <span>{c.name} — <span className="text-neutral-400">{c.amount}</span></span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-red-400 font-bold">{c.price} ₽</span>
                      <button
                        onClick={() => setBuyItem(c)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 text-xs uppercase tracking-wide font-semibold transition-all duration-300"
                      >
                        Купить
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="uppercase mb-2 text-sm tracking-wide text-red-400">Выделись среди всех</h3>
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 tracking-tight">Кейсы с префиксом</h2>
              <div className="flex flex-col gap-3">
                {prefixCases.map((c) => (
                  <div
                    key={c.price}
                    className="bg-neutral-950 border border-neutral-800 p-4 flex justify-between items-center hover:border-red-500/50 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <Icon name="Tag" size={20} className="text-red-400" />
                      <span>{c.name} — <span className="text-neutral-400">{c.amount}</span></span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-red-400 font-bold">{c.price} ₽</span>
                      <button
                        onClick={() => setBuyItem(c)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 text-xs uppercase tracking-wide font-semibold transition-all duration-300"
                      >
                        Купить
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <BuyModal item={buyItem} onClose={() => setBuyItem(null)} />
    </>
  );
}
