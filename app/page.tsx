import SpendForm from "@/components/spend-form";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-6">
          Stop Overpaying For AI Tools
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Analyze your AI subscriptions, discover hidden waste, and receive
          personalized savings recommendations in seconds.
        </p>
      </section>

      <section className="grid md:grid-cols-4 gap-4 mb-12">
        <div className="border rounded-lg p-4">Instant Savings Analysis</div>

        <div className="border rounded-lg p-4">AI Generated Insights</div>

        <div className="border rounded-lg p-4">Compare Alternatives</div>

        <div className="border rounded-lg p-4">Shareable Reports</div>
      </section>

      <SpendForm />
    </main>
  );
}
