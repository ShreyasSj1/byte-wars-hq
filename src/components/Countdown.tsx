import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  function calculateTimeLeft(): TimeLeft {
    const difference = +new Date(targetDate) - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-6 justify-center flex-wrap">
      {timeUnits.map((unit) => (
        <div
          key={unit.label}
          className="bg-card border-2 border-primary rounded-xl p-6 min-w-[100px] shadow-neon-cyan hover:scale-105 transition-transform"
        >
          <div className="text-4xl font-bold text-primary mb-2 drop-shadow-glow">
            {String(unit.value).padStart(2, "0")}
          </div>
          <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
};
