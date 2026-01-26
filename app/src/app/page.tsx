export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl font-semibold text-[var(--neutral-12)]">
          Welcome to Your Prototype
        </h1>
        <p className="text-lg text-[var(--neutral-11)]">
          This is a clean starting point for building your next prototype.
          The sidebar and shell are already set up for you.
        </p>
        <div className="bg-[var(--neutral-3)] rounded-lg p-6 text-left space-y-3">
          <h2 className="text-lg font-medium text-[var(--neutral-12)]">Getting Started</h2>
          <ul className="space-y-2 text-sm text-[var(--neutral-11)]">
            <li>• Edit <code className="bg-[var(--neutral-4)] px-1 rounded">src/components/shell/sidebar.tsx</code> to customize navigation</li>
            <li>• Create new pages in <code className="bg-[var(--neutral-4)] px-1 rounded">src/app/</code></li>
            <li>• Use components from <code className="bg-[var(--neutral-4)] px-1 rounded">@tennr/lasso</code></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
