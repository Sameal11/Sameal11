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
    <div className="p-6 bg-black/50 rounded-xl border border-gray-700 text-center">
      <h3 className="text-xl font-semibold mb-3">Page Visits</h3>

      <p className="text-4xl font-bold text-green-400">
        {count ?? "Loading..."}
      </p>

      <p className="text-gray-400 mt-2 text-sm">
        Total visitors since launch
      </p>
    </div>
  );
}
