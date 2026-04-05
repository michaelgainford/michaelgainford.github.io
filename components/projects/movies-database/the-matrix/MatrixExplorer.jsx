"use client";

import { useMemo, useState } from "react";

const tabMap = {
  trilogy: "Trilogy",
  cast: "Cast",
  quotes: "Quotes",
  scenes: "Scenes",
};

export default function MatrixExplorer({ trilogy, cast, quotes, scenes }) {
  const [activeTab, setActiveTab] = useState("trilogy");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = useMemo(() => {
    const dataByTab = { trilogy, cast, quotes, scenes };
    const activeData = dataByTab[activeTab] ?? [];
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return activeData;
    }

    return activeData.filter((item) => JSON.stringify(item).toLowerCase().includes(query));
  }, [activeTab, searchTerm, trilogy, cast, quotes, scenes]);

  return (
    <section className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 lg:p-6">
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h3 className="text-base uppercase tracking-[0.16em] text-slate-200 lg:text-lg">Matrix Explorer</h3>
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search current tab"
          className="w-full rounded-md border border-slate-800/80 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none transition-all focus:border-slate-500 md:w-[260px]"
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
              activeTab === key
                ? "border-slate-600 bg-slate-800/80 text-slate-100"
                : "border-slate-700 bg-slate-950/50 text-slate-300 hover:border-slate-500 hover:text-slate-100"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {filteredData.map((item, index) => {
          if (activeTab === "trilogy") {
            return (
              <article key={`${item.title}-${index}`} className="rounded-lg border border-slate-800/80 bg-slate-950/55 p-4">
                <p className="text-sm uppercase tracking-[0.12em] text-slate-100">{item.title}</p>
                <p className="mt-1 text-xs text-slate-300">{item.year} • {item.status}</p>
                <p className="mt-2 text-sm text-slate-200">{item.hook}</p>
              </article>
            );
          }

          if (activeTab === "cast") {
            return (
              <article key={`${item.name}-${index}`} className="rounded-lg border border-slate-800/80 bg-slate-950/55 p-4">
                <p className="text-sm uppercase tracking-[0.12em] text-slate-100">{item.name}</p>
                <p className="mt-1 text-xs text-slate-300">as {item.role}</p>
                <p className="mt-2 text-sm text-slate-200">{item.reason}</p>
              </article>
            );
          }

          if (activeTab === "quotes") {
            return (
              <article key={`${item.line}-${index}`} className="rounded-lg border border-slate-800/80 bg-slate-950/55 p-4">
                <q className="text-sm text-slate-100">{item.line}</q>
                <p className="mt-2 text-xs uppercase tracking-[0.12em] text-slate-300">{item.character}</p>
              </article>
            );
          }

          return (
            <article key={`${item.name}-${index}`} className="rounded-lg border border-slate-800/80 bg-slate-950/55 p-4">
              <p className="text-sm uppercase tracking-[0.12em] text-slate-100">{item.name}</p>
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
