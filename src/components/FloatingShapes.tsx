export const FloatingShapes = () => {
  const shapes = [
    { delay: 0, duration: 6, size: 60, left: "10%", top: "20%", rotation: 45 },
    { delay: 1, duration: 8, size: 40, left: "85%", top: "15%", rotation: 120 },
    { delay: 2, duration: 7, size: 80, left: "20%", top: "70%", rotation: 90 },
    { delay: 0.5, duration: 9, size: 50, left: "75%", top: "65%", rotation: 180 },
    { delay: 1.5, duration: 6.5, size: 35, left: "45%", top: "10%", rotation: 270 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <div
          key={index}
          className="absolute opacity-10"
          style={{
            left: shape.left,
            top: shape.top,
            animationDelay: `${shape.delay}s`,
            animationDuration: `${shape.duration}s`,
          }}
        >
          {index % 3 === 0 ? (
            // Hexagon
            <div
              className="animate-float"
              style={{
                width: shape.size,
                height: shape.size,
                transform: `rotate(${shape.rotation}deg)`,
              }}
            >
              <div
                className="relative"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <div
                  className="absolute inset-0 bg-gradient-vibrant"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                />
              </div>
            </div>
          ) : index % 3 === 1 ? (
            // Triangle
            <div
              className="animate-float border-gradient-accent"
              style={{
                width: 0,
                height: 0,
                borderLeft: `${shape.size / 2}px solid transparent`,
                borderRight: `${shape.size / 2}px solid transparent`,
                borderBottom: `${shape.size}px solid`,
                borderBottomColor: "hsl(var(--neon-cyan))",
                transform: `rotate(${shape.rotation}deg)`,
              }}
            />
          ) : (
            // Circle
            <div
              className="animate-float rounded-full bg-gradient-accent"
              style={{
                width: shape.size,
                height: shape.size,
                transform: `rotate(${shape.rotation}deg)`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};
