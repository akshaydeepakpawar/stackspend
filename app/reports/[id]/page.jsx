import { prisma } from "@/lib/prisma";
import ReportActions from "@/components/report-actions";
import Link from "next/link";

export default async function ReportPage({ params }) {
  const { id } = await params;

  const audit = await prisma.audit.findUnique({
    where: {
      publicId: id,
    },
    include: {
      tools: true,
    },
  });

  if (!audit) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="rounded-xl border p-8 text-center">
          <h1 className="text-2xl font-bold">Report Not Found</h1>

          <p className="mt-2 text-gray-600">
            This report may have been deleted or the link is invalid.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      {/* Header */}

      <section className="mb-10">
        <h1 className="text-4xl font-bold">AI Spend Audit Report</h1>

        <p className="text-gray-500 mt-2">
          Generated on {new Date(audit.createdAt).toLocaleDateString()}
        </p>
      </section>

      {/* Savings Cards */}

      <section className="grid gap-6 md:grid-cols-2 mb-10">
        <div className="rounded-xl bg-black text-white p-6">
          <p className="text-gray-300">Monthly Savings</p>

          <h2 className="text-5xl font-bold mt-2">
            ${audit.totalMonthlySavings}
          </h2>
        </div>

        <div className="rounded-xl border p-6">
          <p className="text-gray-500">Annual Savings</p>

          <h2 className="text-5xl font-bold mt-2">
            ${audit.totalAnnualSavings}
          </h2>
        </div>
        <div className="mb-8">
          {audit.totalMonthlySavings > 0 ? (
            <span className="rounded-full bg-green-100 text-green-700 px-4 py-2 text-sm font-medium">
              Savings Opportunity Found
            </span>
          ) : (
            <span className="rounded-full bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium">
              Stack Already Optimized
            </span>
          )}
        </div>
      </section>

      {/* AI Summary */}

      {audit.summary && (
        <section className="rounded-xl border p-6 mb-10">
          <h2 className="text-2xl font-bold mb-4">AI Summary</h2>

          <p className="leading-8 text-gray-700">{audit.summary}</p>
        </section>
      )}

      {/* Recommendations */}

      {audit.report?.recommendations?.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">
            Recommendations ({audit.report?.recommendations?.length || 0})
          </h2>

          <div className="space-y-4">
            {audit.report.recommendations.map((item, index) => (
              <div key={index} className="rounded-xl border p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg">{item.tool}</h3>

                  <span className="font-semibold text-green-600">
                    Save ${item.savings}/month
                  </span>
                </div>

                <p className="mt-3">
                  {item.currentPlan}
                  {" → "}
                  {item.recommendedPlan}
                </p>

                <p className="mt-3 text-gray-600">{item.reason}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Current Tool Stack */}

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Current Tool Stack</h2>

        <div className="grid gap-4 md:grid-cols-2">
          {audit.tools.map((tool) => (
            <div key={tool.id} className="rounded-xl border p-5">
              <h3 className="font-semibold text-lg">{tool.tool}</h3>

              <p className="text-gray-600 mt-2">Plan: {tool.plan}</p>

              <p className="text-gray-600">Seats: {tool.seats}</p>

              <p className="font-semibold mt-3">${tool.monthlySpend}/month</p>
            </div>
          ))}
        </div>
      </section>
      <ReportActions />
      <section className="mt-16 rounded-xl bg-black text-white p-8 text-center">
        <h2 className="text-2xl font-bold">Audit Another AI Stack</h2>

        <p className="mt-2 text-gray-300">
          Compare different tool combinations and discover additional savings
          opportunities.
        </p>

        <Link href="/" className="...">
          Start New Audit
        </Link>
      </section>
    </main>
  );
}
