import SpendForm from "@/components/spend-form";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero */}

      <section className="text-center py-20">
        <span className="inline-block rounded-full border px-4 py-2 text-sm mb-6">
          AI Cost Optimization Platform
        </span>

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Stop Overpaying For AI Tools
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Analyze your AI subscriptions, uncover hidden waste,
          and receive personalized recommendations to reduce
          software spend in under 30 seconds.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <a
            href="#audit-form"
            className="rounded-lg bg-black text-white px-6 py-3"
          >
            Start Free Audit
          </a>

          <a
            href="/audits"
            className="rounded-lg border px-6 py-3"
          >
            View Audit History
          </a>
        </div>
      </section>

      {/* Stats */}

      <section className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="rounded-xl border p-6 text-center">
          <h3 className="text-3xl font-bold">30s</h3>
          <p className="text-gray-600 mt-2">
            Average audit time
          </p>
        </div>

        <div className="rounded-xl border p-6 text-center">
          <h3 className="text-3xl font-bold">5+</h3>
          <p className="text-gray-600 mt-2">
            AI tools supported
          </p>
        </div>

        <div className="rounded-xl border p-6 text-center">
          <h3 className="text-3xl font-bold">$480+</h3>
          <p className="text-gray-600 mt-2">
            Typical annual savings
          </p>
        </div>
      </section>

      {/* Features */}

      <section className="grid md:grid-cols-4 gap-4 mb-16">
        <div className="rounded-xl border p-5">
          <h3 className="font-semibold mb-2">
            Instant Savings Analysis
          </h3>

          <p className="text-sm text-gray-600">
            Calculate monthly and annual savings opportunities.
          </p>
        </div>

        <div className="rounded-xl border p-5">
          <h3 className="font-semibold mb-2">
            AI Generated Insights
          </h3>

          <p className="text-sm text-gray-600">
            Receive personalized optimization recommendations.
          </p>
        </div>

        <div className="rounded-xl border p-5">
          <h3 className="font-semibold mb-2">
            Compare Alternatives
          </h3>

          <p className="text-sm text-gray-600">
            Identify lower-cost plans with similar value.
          </p>
        </div>

        <div className="rounded-xl border p-5">
          <h3 className="font-semibold mb-2">
            Shareable Reports
          </h3>

          <p className="text-sm text-gray-600">
            Generate unique URLs for audit reports.
          </p>
        </div>
      </section>

      {/* Form */}

      <section
        id="audit-form"
        className="rounded-2xl border p-8 bg-white"
      >
        <h2 className="text-3xl font-bold mb-2">
          Audit Your AI Stack
        </h2>

        <p className="text-gray-600 mb-8">
          Enter your current tools and subscriptions to
          receive personalized recommendations.
        </p>

        <SpendForm />
      </section>
    </main>
  );
}