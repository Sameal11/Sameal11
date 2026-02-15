import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/visitor")
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(null));
  }, []);

  return (
    <div className="h-full flex flex-col justify-between p-6 rounded-2xl border border-white/10 bg-black hover:border-white/20 transition-colors">
      <div className="flex justify-between items-start">
        <span className="text-xs font-mono text-gray-500 tracking-wider">VISITORS</span>
        <span className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-gray-400">Total</span>
      </div>

      <div className="mt-4">
        <p className="text-4xl font-bold text-white tracking-tighter font-mono">
          {count?.toLocaleString() ?? "-"}
        </p>
        <p className="text-xs text-gray-500 mt-1 font-mono">
          Unique views
        </p>
      </div>
    </div>
  );
}
