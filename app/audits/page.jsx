import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function AuditsPage() {
  const audits = await prisma.audit.findMany({
    include: {
      tools: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Audit History</h1>

        <p className="text-gray-600 mt-2">
          Review previously generated AI spend audits.
        </p>
      </div>

      {audits.length === 0 ? (
        <div className="rounded-xl border p-10 text-center">
          <h2 className="text-xl font-semibold">No audits yet</h2>

          <p className="text-gray-500 mt-2">
            Generate your first audit to see it here.
          </p>

          <Link
            href="/"
            className="inline-block mt-4 rounded-lg bg-black px-5 py-3 text-white"
          >
            Create Audit
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {audits.map((audit) => (
            <div
              key={audit.id}
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Audit #{audit.id}</h2>

                <span className="text-sm text-gray-500">
                  {new Date(audit.createdAt).toLocaleDateString()}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Monthly Savings</p>

                  <p className="text-2xl font-bold text-green-600">
                    ${audit.totalMonthlySavings}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Annual Savings</p>

                  <p className="text-2xl font-bold">
                    ${audit.totalAnnualSavings}
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <p className="text-sm text-gray-500">Tools Audited</p>

                <p className="font-medium">{audit.tools.length}</p>
              </div>

              <div className="mt-6 flex gap-3">
                <Link
                  href={`/reports/${audit.publicId}`}
                  className="rounded-lg bg-black px-4 py-2 text-white"
                >
                  View Report
                </Link>

                <Link href="/" className="rounded-lg border px-4 py-2">
                  New Audit
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
