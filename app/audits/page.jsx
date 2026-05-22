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
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Audit History
      </h1>

      {audits.map((audit) => (
        <div
          key={audit.id}
          className="border rounded-lg p-4 mb-4"
        >
          <p>
            Monthly Savings:
            ${audit.totalMonthlySavings}
          </p>

          <p>
            Annual Savings:
            ${audit.totalAnnualSavings}
          </p>

          <p>
            Tools: {audit.tools.length}
          </p>
        </div>
      ))}
    </div>
  );
}