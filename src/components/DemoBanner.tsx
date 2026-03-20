export default function DemoBanner() {
  return (
    <div className="bg-emerald-900/30 border-b border-emerald-800/40 text-emerald-200 text-xs text-center py-2 px-4">
      <span className="font-semibold">[DEMO]</span> This is a fictional restaurant
      built as a portfolio piece by{" "}
      <a
        href="https://smve.cloud"
        className="underline hover:text-emerald-100 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        SMVE Web Dev
      </a>
      . No real reservations are taken here.
    </div>
  );
}
