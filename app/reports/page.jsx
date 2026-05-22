export default function ReportPage({ params }) {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        Shared Audit Report
      </h1>

      <p className="mt-4">
        Report ID: {params.id}
      </p>
    </div>
  );
}