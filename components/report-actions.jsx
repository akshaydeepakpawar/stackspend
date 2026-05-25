"use client";

import { toast } from "sonner";

export default function ReportActions() {
  return (
    <section className="print:hidden flex flex-wrap gap-3 border-t pt-6 mb-10">
      <button
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          toast.success("Share link copied");
        }}
        className="rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800"
      >
        Copy Share Link
      </button>

      <button
        onClick={() => window.print()}
        className="rounded-lg border px-4 py-2 hover:bg-gray-50"
      >
        Print / Save PDF
      </button>
    </section>
  );
}
