import { useMemo, useState } from "react";
import { Search, Server } from "lucide-react";
import EndpointItem from "./EndpointItem";

export default function EndpointList({ endpoints }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query) return endpoints;
    const q = query.toLowerCase();
    return endpoints.filter(
      (e) =>
        e.path.toLowerCase().includes(q) ||
        e.method.toLowerCase().includes(q) ||
        e.summary.toLowerCase().includes(q)
    );
  }, [endpoints, query]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-zinc-700">
          <Server size={18} className="text-emerald-600" />
          <h2 className="text-base font-semibold">Endpoints</h2>
          <span className="ml-2 rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600">
            {filtered.length} shown
          </span>
        </div>
        <div className="flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-2">
          <Search size={16} className="text-zinc-500" />
          <input
            className="w-56 bg-transparent text-sm outline-none"
            placeholder="Search endpoints"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-3">
        {filtered.map((e) => (
          <EndpointItem key={`${e.method}-${e.path}`} endpoint={e} />
        ))}
        {!filtered.length && (
          <p className="text-sm text-zinc-500">No endpoints match your search.</p>
        )}
      </div>
    </section>
  );
}
