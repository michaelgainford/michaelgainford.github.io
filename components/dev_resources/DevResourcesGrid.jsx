"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import DevResourcesDataJSON from "@/data/data_for__devresources.json";

const resourcesData = DevResourcesDataJSON.DevResources;
const allTags = Array.from(new Set(resourcesData.flatMap((resource) => resource.tags))).sort((a, b) =>
  a.localeCompare(b)
);

const sortOptions = [
  { label: "A-Z", value: "alpha-asc" },
  { label: "Z-A", value: "alpha-desc" },
  { label: "Featured First", value: "featured" },
];

export default function Component_DevResourcesGrid() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTag, setActiveTag] = useState("all");
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("featured");

  const quickFeaturedResources = useMemo(() => {
    return [...resourcesData]
      .filter((resource) => resource.featured)
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 4);
  }, []);

  const featuredCount = useMemo(
    () => resourcesData.filter((resource) => resource.featured).length,
    []
  );

  const filteredResources = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    let resources = [...resourcesData];

    if (query) {
      resources = resources.filter((resource) => {
        return (
          resource.name.toLowerCase().includes(query) ||
          resource.description.toLowerCase().includes(query) ||
          resource.tags.some((tag) => tag.toLowerCase().includes(query))
        );
      });
    }

    if (activeTag !== "all") {
      resources = resources.filter((resource) => resource.tags.includes(activeTag));
    }

    if (featuredOnly) {
      resources = resources.filter((resource) => resource.featured);
    }

    if (sortBy === "alpha-asc") {
      resources.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortBy === "alpha-desc") {
      resources.sort((a, b) => b.name.localeCompare(a.name));
    }

    if (sortBy === "featured") {
      resources.sort((a, b) => {
        if (a.featured === b.featured) {
          return a.name.localeCompare(b.name);
        }

        return a.featured ? -1 : 1;
      });
    }

    return resources;
  }, [searchTerm, activeTag, featuredOnly, sortBy]);

  return (
    <div className="w-full space-y-8 pt-4 md:pt-6 lg:pt-10">
      <section className="rounded-2xl border border-teal-400/20 bg-black/55 p-4 lg:p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h2 className="text-sm uppercase tracking-[0.16em] text-teal-200 lg:text-base">Quick Launch</h2>
          <span className="rounded-full border border-teal-400/30 bg-teal-500/10 px-3 py-1 text-xxs uppercase tracking-[0.14em] text-teal-200/90">
            Featured Picks
          </span>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {quickFeaturedResources.map((resource) => (
            <a
              key={`quick-${resource.slug}-${resource.name}`}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-teal-400/25 bg-teal-900/20 px-3 py-3 text-sm text-slate-100 transition-all hover:border-teal-300/45 hover:bg-teal-800/30"
            >
              <p className="font-medium">{resource.name}</p>
              <p className="mt-1 text-xxs uppercase tracking-[0.12em] text-teal-200/80">Open Resource</p>
            </a>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-teal-400/20 bg-linear-to-br from-teal-950/80 to-black/85 p-5 shadow-xl shadow-black/35 lg:p-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xxs uppercase tracking-[0.18em] text-teal-200/80">Resource Explorer</p>
            <button
              type="button"
              onClick={() => setFeaturedOnly((state) => !state)}
              className={`rounded-full border px-4 py-2 text-xxs uppercase tracking-[0.14em] transition-all ${
                featuredOnly
                  ? "border-amber-300/50 bg-amber-500/15 text-amber-200"
                  : "border-teal-400/30 bg-black/50 text-teal-200 hover:border-teal-300/50"
              }`}
            >
              {featuredOnly ? "Featured Only: On" : "Featured Only: Off"}
            </button>
          </div>

          <div className="grid gap-3 md:grid-cols-[1fr_auto]">
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by name, description, or tag"
              className="w-full rounded-md border border-teal-400/25 bg-black/60 px-3 py-2 text-sm text-slate-100 outline-none transition-all focus:border-teal-300"
            />
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="rounded-md border border-teal-400/25 bg-black/60 px-3 py-2 text-sm text-slate-100 outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveTag("all")}
              className={`rounded-full border px-3 py-1 text-xxs uppercase tracking-[0.12em] transition-all ${
                activeTag === "all"
                  ? "border-teal-300/60 bg-teal-500/15 text-teal-100"
                  : "border-teal-500/25 bg-black/40 text-teal-200/70 hover:border-teal-300/40"
              }`}
            >
              all
            </button>
            {allTags.map((tag) => (
              <button
                type="button"
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`rounded-full border px-3 py-1 text-xxs uppercase tracking-[0.12em] transition-all ${
                  activeTag === tag
                    ? "border-teal-300/60 bg-teal-500/15 text-teal-100"
                    : "border-teal-500/25 bg-black/40 text-teal-200/70 hover:border-teal-300/40"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-teal-400/20 bg-black/60 p-5 shadow-xl shadow-black/35 lg:p-6">
          <p className="text-xxs uppercase tracking-[0.18em] text-teal-200/80">At a Glance</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-md border border-teal-400/20 bg-black/50 p-3 text-center">
              <p className="text-xxs uppercase tracking-[0.14em] text-slate-400">Visible</p>
              <p className="mt-1 text-lg font-semibold text-teal-200">{filteredResources.length}</p>
            </div>
            <div className="rounded-md border border-teal-400/20 bg-black/50 p-3 text-center">
              <p className="text-xxs uppercase tracking-[0.14em] text-slate-400">Total</p>
              <p className="mt-1 text-lg font-semibold text-teal-200">{resourcesData.length}</p>
            </div>
            <div className="rounded-md border border-teal-400/20 bg-black/50 p-3 text-center">
              <p className="text-xxs uppercase tracking-[0.14em] text-slate-400">Featured</p>
              <p className="mt-1 text-lg font-semibold text-amber-200">{featuredCount}</p>
            </div>
            <div className="rounded-md border border-teal-400/20 bg-black/50 p-3 text-center">
              <p className="text-xxs uppercase tracking-[0.14em] text-slate-400">Tags</p>
              <p className="mt-1 text-lg font-semibold text-teal-200">{allTags.length}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid w-full auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {filteredResources.map((resource, index) => (
          <article
            key={`${resource.slug}-${resource.name}-${index}`}
            className="group flex h-full flex-col overflow-hidden rounded-xl border border-teal-500/20 bg-black/45 p-4 shadow-lg shadow-black/25 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300/40"
          >
            <div className="mb-3 flex min-h-[2.25rem] items-center justify-between gap-3">
              <h3 className="text-base font-semibold text-slate-100">{resource.name}</h3>
              {resource.featured && (
                <span className="rounded-full border border-amber-300/40 bg-amber-500/10 px-2 py-1 text-xxs uppercase tracking-[0.1em] text-amber-200">
                  featured
                </span>
              )}
            </div>

            <div className="relative overflow-hidden rounded-lg border border-teal-400/15 bg-black/60">
              <Image
                src={resource.screenshot}
                alt={resource.name}
                className="aspect-4/3 h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                height={320}
                width={600}
                priority={index < 4}
              />
            </div>

            <div className="mt-4 flex flex-1 flex-col">
              <p className="text-sm leading-6 text-slate-300">{resource.description}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {resource.tags.map((tag) => (
                  <span
                    className="rounded-full border border-teal-500/25 bg-teal-500/10 px-2 py-1 text-xxs uppercase tracking-[0.1em] text-teal-200/85"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block w-full rounded-md border border-teal-400/30 bg-teal-700/70 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-teal-600"
            >
              Visit Resource
            </a>
          </article>
        ))}
      </section>

      {filteredResources.length === 0 && (
        <div className="rounded-lg border border-teal-400/25 bg-teal-500/10 p-6 text-center text-sm text-teal-100">
          No resources match those filters. Try clearing search or selecting a different tag.
        </div>
      )}
    </div>
  );
}
