import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <Link
        href="/"
        className="text-2xl font-bold"
      >
        StackSpend
      </Link>

      <div className="flex gap-4">
        <Link
          href="/audits"
          className="text-sm font-medium"
        >
          Audit History
        </Link>
      </div>
    </nav>
  );
}