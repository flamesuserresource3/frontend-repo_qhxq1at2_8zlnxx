import { useState } from "react";
import { ChevronDown, ChevronRight, Copy } from "lucide-react";

const methodColors = {
  get: "bg-emerald-100 text-emerald-700 border-emerald-200",
  post: "bg-blue-100 text-blue-700 border-blue-200",
  put: "bg-amber-100 text-amber-700 border-amber-200",
  delete: "bg-rose-100 text-rose-700 border-rose-200",
  patch: "bg-violet-100 text-violet-700 border-violet-200",
};

export default function EndpointItem({ endpoint }) {
  const [open, setOpen] = useState(false);

  const color = methodColors[endpoint.method.toLowerCase()] || "bg-zinc-100 text-zinc-700 border-zinc-200";

  const copyPath = async () => {
    try {
      await navigator.clipboard.writeText(endpoint.path);
    } catch (e) {
      // ignore
    }
  };

  return (
    <div className="rounded-lg border border-zinc-200 bg-white overflow-hidden">
      <button
        className="w-full flex items-center gap-3 p-4 text-left hover:bg-zinc-50"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <ChevronDown size={18} className="text-zinc-500" /> : <ChevronRight size={18} className="text-zinc-500" />}
        <span className={`inline-flex items-center gap-2 rounded-md border px-2 py-0.5 text-xs font-semibold ${color}`}>
          {endpoint.method.toUpperCase()}
        </span>
        <span className="font-mono text-sm text-zinc-800">{endpoint.path}</span>
        <span className="text-sm text-zinc-500">— {endpoint.summary}</span>
      </button>
      {open && (
        <div className="px-4 pb-4">
          <p className="text-sm text-zinc-700 mb-3">{endpoint.description}</p>
          {endpoint.parameters?.length ? (
            <div className="mb-3">
              <p className="text-xs font-medium text-zinc-500 mb-1">Parameters</p>
              <ul className="grid gap-1">
                {endpoint.parameters.map((p, idx) => (
                  <li key={idx} className="text-sm text-zinc-700">
                    <span className="font-mono text-xs rounded bg-zinc-100 px-1 py-0.5 mr-2">{p.in}</span>
                    <span className="font-semibold">{p.name}</span>
                    {p.required && <span className="ml-1 text-rose-600">(required)</span>} —
                    <span className="ml-1 text-zinc-600">{p.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-zinc-500">Response</p>
              <p className="text-sm text-zinc-700">{endpoint.response || "200 OK — application/json"}</p>
            </div>
            <button
              onClick={copyPath}
              className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700 hover:bg-zinc-50"
            >
              <Copy size={16} /> Copy path
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
