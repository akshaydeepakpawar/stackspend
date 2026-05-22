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
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Audit History
      </h1>

      {audits.map((audit) => (
        <div
          key={audit.id}
          className="border rounded-lg p-4 mb-4"
        >
          <h2>{audit.recommendation}</h2>

          <p>Savings: ${audit.savings}</p>

          <div>
            {audit.tools.map((tool) => (
              <div key={tool.id}>
                {tool.tool} - {tool.plan}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}