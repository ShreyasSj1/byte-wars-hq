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
            // Hexagon - Neural network node
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
                  className="absolute inset-0 bg-gradient-neural"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                />
              </div>
            </div>
          ) : index % 3 === 1 ? (
            // Diamond - AI crystal
            <div
              className="animate-float"
              style={{
                width: shape.size,
                height: shape.size,
                transform: `rotate(45deg)`,
                background: "linear-gradient(135deg, hsl(250 85% 65%) 0%, hsl(320 85% 60%) 100%)",
                borderRadius: "4px",
              }}
            />
          ) : (
            // Circle with glow - Neural pulse
            <div
              className="animate-float rounded-full"
              style={{
                width: shape.size,
                height: shape.size,
                background: "linear-gradient(135deg, hsl(220 90% 60%) 0%, hsl(280 80% 65%) 100%)",
                boxShadow: "0 0 20px hsla(250, 85%, 65%, 0.3)",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};
