import SpendForm from "@/components/spend-form";

export default function Home() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-6">
        StackSpend
      </h1>

      <p className="mb-8 text-gray-600">
        Find hidden waste in your AI tool stack.
      </p>

      <SpendForm />
    </main>
  );
}