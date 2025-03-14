import { useEffect, useState } from "react";

const Sparks = () => {
  const [sparks, setSparks] = useState<{ left: string; top: string; size: string; delay: string }[]>([]);

  useEffect(() => {
    // Generate 20 random sparks
    const newSparks = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 4 + 2}px`, // Random size between 2px - 6px
      delay: `${Math.random() * 2}s`,
    }));
    setSparks(newSparks);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparks.map((spark, i) => (
        <div
          key={i}
          className="absolute bg-yellow-400 rounded-full animate-spark"
          style={{
            left: spark.left,
            top: spark.top,
            width: spark.size,
            height: spark.size,
            animationDelay: spark.delay,
          }}
        />
      ))}
    </div>
  );
};

export default Sparks;
