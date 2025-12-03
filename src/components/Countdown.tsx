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
    <div className="flex gap-2 sm:gap-4 md:gap-6 justify-center flex-wrap px-2">
      {timeUnits.map((unit) => (
        <div
          key={unit.label}
          className="bg-card border-2 border-primary rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 min-w-[70px] sm:min-w-[85px] md:min-w-[100px] shadow-neon-cyan hover:scale-105 transition-transform flex-1 sm:flex-none max-w-[90px] sm:max-w-none"
        >
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2 drop-shadow-glow text-center">
            {String(unit.value).padStart(2, "0")}
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider font-semibold text-center">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
};
