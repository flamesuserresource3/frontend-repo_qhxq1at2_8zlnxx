import { useState } from "react";
import { Link, Play } from "lucide-react";

export default function SpecInput({ onLoad }) {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  const handleLoad = () => {
    // This is a dummy UI: simply bubble the URL up and show a friendly message
    onLoad?.(value);
    setMessage("Loaded mock spec successfully. This is a demo view.");
  };

  return (
    <section className="mx-auto max-w-6xl px-4 pt-8">
      <div className="rounded-xl border border-zinc-200 bg-white p-4 sm:p-6 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex-1 flex items-center gap-2 rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 focus-within:ring-2 focus-within:ring-emerald-500">
            <Link size={18} className="text-zinc-500" />
            <input
              type="text"
              placeholder="Paste OpenAPI/Swagger JSON or YAML URL (demo)"
              className="w-full bg-transparent outline-none text-sm"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <button
            onClick={handleLoad}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-white text-sm font-medium hover:bg-emerald-700 transition-colors"
          >
            <Play size={16} /> Load
          </button>
        </div>
        {message && (
          <p className="mt-3 text-sm text-emerald-700">{message}</p>
        )}
      </div>
    </section>
  );
}
