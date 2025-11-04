import { BookOpen, FileJson } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-emerald-600 text-white grid place-items-center shadow-sm">
            <BookOpen size={20} />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight">Swagger UI — Demo</p>
            <p className="text-xs text-zinc-500">A clean, dummy preview of API docs</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-sm">
          <span className="inline-flex items-center gap-2 rounded-md border border-zinc-200 px-3 py-1.5 text-zinc-700 bg-white">
            <FileJson size={16} className="text-emerald-600" />
            OpenAPI 3.0
          </span>
        </div>
      </div>
    </header>
  );
}
