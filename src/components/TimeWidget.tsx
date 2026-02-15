import { useState, useEffect } from 'react';

export default function TimeWidget() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="h-full flex flex-col justify-between p-6 rounded-2xl border border-white/10 bg-black hover:border-white/20 transition-colors group">
            <div className="flex justify-between items-start">
                <span className="text-xs font-mono text-gray-500 tracking-wider">LOCAL TIME</span>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>

            <div className="mt-4">
                <div className="text-3xl font-bold font-mono tracking-tighter text-white">
                    {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
                <div className="text-xs text-gray-500 mt-1 font-mono">
                    India (IST)
                </div>
            </div>
        </div>
    );
}
