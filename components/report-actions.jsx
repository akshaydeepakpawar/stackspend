"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function ReportActions() {
  const router = useRouter();

  return (
    <section className="flex flex-wrap gap-3 border-t pt-6 mb-10">
      <button
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          toast.success("Share link copied");
        }}
        className="rounded-lg border px-4 py-2 hover:bg-gray-50"
      >
        Copy Share Link
      </button>

      <button
        onClick={() => window.print()}
        className="rounded-lg border px-4 py-2 hover:bg-gray-50"
      >
        Export PDF
      </button>

      <button
        onClick={() => router.push("/")}
        className="rounded-lg bg-black text-white px-4 py-2"
      >
        Generate New Audit
      </button>
    </section>
  );
}