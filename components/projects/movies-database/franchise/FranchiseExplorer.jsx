"use client";

import { useMemo, useState } from "react";

const tabMap = {
  films: "Films",
  cast: "Cast",
  quotes: "Quotes",
  scenes: "Scenes",
};

const themeClasses = {
  batman: {
    border: "border-slate-800/80",
    bg: "bg-slate-950/60",
    heading: "text-slate-200",
    inputBorder: "focus:border-slate-500",
    activeTab: "border-slate-600 bg-slate-800/80 text-slate-100",
    inactiveTab: "border-slate-700 bg-slate-950/50 text-slate-300 hover:border-slate-500 hover:text-slate-100",
    cardBorder: "border-slate-800/80",
    cardHeading: "text-slate-100",
    accentText: "text-slate-300",
  },
  "iron-man": {
    border: "border-slate-800/80",
    bg: "bg-slate-950/60",
    heading: "text-slate-200",
    inputBorder: "focus:border-slate-500",
    activeTab: "border-slate-600 bg-slate-800/80 text-slate-100",
    inactiveTab: "border-slate-700 bg-slate-950/50 text-slate-300 hover:border-slate-500 hover:text-slate-100",
    cardBorder: "border-slate-800/80",
    cardHeading: "text-slate-100",
    accentText: "text-slate-300",
  },
  deadpool: {
    border: "border-slate-800/80",
    bg: "bg-slate-950/60",
    heading: "text-slate-200",
    inputBorder: "focus:border-slate-500",
    activeTab: "border-slate-600 bg-slate-800/80 text-slate-100",
    inactiveTab: "border-slate-700 bg-slate-950/50 text-slate-300 hover:border-slate-500 hover:text-slate-100",
    cardBorder: "border-slate-800/80",
    cardHeading: "text-slate-100",
    accentText: "text-slate-300",
  },
};

export default function FranchiseExplorer({ films, cast, quotes, scenes, theme }) {
  const [activeTab, setActiveTab] = useState("films");
  const [searchTerm, setSearchTerm] = useState("");
  const styles = themeClasses[theme] || themeClasses.batman;

  const filteredData = useMemo(() => {
    const dataByTab = { films, cast, quotes, scenes };
    const activeData = dataByTab[activeTab] ?? [];
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return activeData;
    }

    return activeData.filter((item) => JSON.stringify(item).toLowerCase().includes(query));
  }, [activeTab, searchTerm, films, cast, quotes, scenes]);

  return (
    <section className={`rounded-2xl border ${styles.border} ${styles.bg} p-4 lg:p-6`}>
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h3 className={`text-base uppercase tracking-[0.16em] lg:text-lg ${styles.heading}`}>Franchise Explorer</h3>
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search current tab"
          className={`w-full rounded-md border border-slate-800/80 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none transition-all md:w-[260px] ${styles.inputBorder}`}
        />
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {Object.entries(tabMap).map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => {
              setActiveTab(key);
              setSearchTerm("");
            }}
            className={`rounded-full border px-4 py-2 text-xxs uppercase tracking-[0.14em] transition-all ${
              activeTab === key ? styles.activeTab : styles.inactiveTab
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {filteredData.map((item, index) => {
          if (activeTab === "films") {
            return (
              <article key={`${item.title}-${index}`} className={`rounded-lg border ${styles.cardBorder} bg-slate-950/55 p-4`}>
                <p className={`text-sm uppercase tracking-[0.12em] ${styles.cardHeading}`}>{item.title}</p>
                <p className="mt-1 text-xs text-slate-300">{item.year} • {item.status}</p>
                <p className="mt-2 text-sm text-slate-200">{item.hook}</p>
              </article>
            );
          }

          if (activeTab === "cast") {
            return (
              <article key={`${item.name}-${index}`} className={`rounded-lg border ${styles.cardBorder} bg-slate-950/55 p-4`}>
                <p className={`text-sm uppercase tracking-[0.12em] ${styles.cardHeading}`}>{item.name}</p>
                <p className={`mt-1 text-xs ${styles.accentText}`}>as {item.role}</p>
                <p className="mt-2 text-sm text-slate-200">{item.reason}</p>
              </article>
            );
          }

          if (activeTab === "quotes") {
            return (
              <article key={`${item.line}-${index}`} className={`rounded-lg border ${styles.cardBorder} bg-slate-950/55 p-4`}>
                <q className="text-sm text-slate-100">{item.line}</q>
                <p className={`mt-2 text-xs uppercase tracking-[0.12em] ${styles.accentText}`}>{item.character}</p>
              </article>
            );
          }

          return (
            <article key={`${item.name}-${index}`} className={`rounded-lg border ${styles.cardBorder} bg-slate-950/55 p-4`}>
              <p className={`text-sm uppercase tracking-[0.12em] ${styles.cardHeading}`}>{item.name}</p>
              <p className="mt-2 text-sm text-slate-200">{item.impact}</p>
            </article>
          );
        })}
      </div>

      {filteredData.length === 0 && (
        <div className="mt-4 rounded-md border border-slate-800/80 bg-slate-900/60 p-4 text-sm text-slate-200">
          No results in this section for that search.
        </div>
      )}
    </section>
  );
}
