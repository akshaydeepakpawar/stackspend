import { prisma } from "@/lib/prisma";

export default async function ReportPage({ params }) {
  const audit = await prisma.audit.findUnique({
    where: {
      id: Number(params.id),
    },
    include: {
      tools: true,
    },
  });

  if (!audit) {
    return <div>Report not found</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">
        AI Spend Audit
      </h1>

      <p>
        Monthly Savings:
        ${audit.totalMonthlySavings}
      </p>

      <p>
        Annual Savings:
        ${audit.totalAnnualSavings}
      </p>
    </div>
  );
}