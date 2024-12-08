"use client";

import { useEffect, useRef } from "react";

const WheelOfNames = () => {
  const canvasRef = useRef<any>(null);
  const rotationRef = useRef(0); // Track the current rotation angle
  const animationIdRef = useRef<any>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const names = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
    const colors = ["#3369e8", "#009925", "#d50f25", "#EEB211", "#d50f25"];
    const radius = canvas.width / 2;

    // Set canvas dimensions
    canvas.width = 400;
    canvas.height = 400;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const segmentAngle = (2 * Math.PI) / names.length;

    // Function to draw the wheel
    const drawWheel = (rotation: any) => {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw each segment
      names.forEach((name, index) => {
        const startAngle = index * segmentAngle + rotation;
        const endAngle = startAngle + segmentAngle;

        // Draw the segment
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();

        // Fill with color
        ctx.fillStyle = colors[index];
        ctx.fill();

        // Draw the text
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(startAngle + segmentAngle / 2);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#ffffff"; // Text color
        ctx.font = "16px Arial";
        ctx.fillText(name, radius / 2, 0);
        ctx.restore();
      });

      // Draw the central circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius / 12, 0, 2 * Math.PI);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.closePath();
    };

    // Animation loop
    const animate = () => {
      rotationRef.current += 0.01; // Increment rotation angle for constant speed
      drawWheel(rotationRef.current);
      animationIdRef.current = requestAnimationFrame(animate); // Continue the animation
    };

    // Start the animation
    animate();

    return () => cancelAnimationFrame(animationIdRef.current); // Cleanup on unmount
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <canvas ref={canvasRef} style={{ border: "1px solid #ccc" }} />
    </div>
  );
};

export default WheelOfNames;
