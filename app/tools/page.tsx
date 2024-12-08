"use client";

import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import {
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Modal,
  Box,
  Typography,
  Button,
} from "@mui/material";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const WheelOfNames = () => {
  const canvasRef = useRef<any>(null);
  const rotationRef = useRef(0);
  const animationIdRef = useRef<any>(null);
  const isSpinningRef = useRef(false);
  const soundTimeoutRef = useRef<any>(null);

  const [tickSound, setTickSound] = useState<any>(null);
  const [clapSound, setClapSound] = useState<any>(null);

  const [names, setNames] = useState([
    "Alice",
    "Bob",
    "Charlie",
    "Diana",
    "Jordan",
  ]);
  const [inputName, setInputName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [winner, setWinner] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const tickSound = new Audio("/audio.mp3");
      const clapSound = new Audio("/clap.wav");
      setTickSound(tickSound);
      setClapSound(clapSound);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const colors = ["#3369e8", "#009925", "#d50f25", "#EEB211", "#d50f25"];

    canvas.width = 400;
    canvas.height = 400;
    canvas.style.cursor = "pointer";

    const radius = canvas.width / 2 - 10;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const segmentAngle = (2 * Math.PI) / names.length;

    const drawWheel = (rotation: any) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw wheel segments
      names.forEach((name, index) => {
        const startAngle = index * segmentAngle + rotation;
        const endAngle = startAngle + segmentAngle;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();

        ctx.fillStyle = colors[index % colors.length];
        ctx.fill();

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(startAngle + segmentAngle / 2);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#ffffff";
        ctx.font = "24px Arial";
        ctx.fillText(name, radius / 2, 0);
        ctx.restore();
      });

      // Draw the central circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius / 12, 0, 2 * Math.PI);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.closePath();

      // Draw curved "Click to Spin!" text on the upper arc
      if (!isSpinningRef.current) {
        ctx.save();
        ctx.translate(centerX, centerY);
        
        // Set up text properties
        ctx.font = "bold 28px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        
        // Add shadow effect
        ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
        ctx.shadowBlur = 4;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;

        // Draw curved text
        const text = "Click to Spin!";
        const arcRadius = radius * 0.85; // Slightly inside the wheel's edge
        const startAngle = -Math.PI / 2 - 0.6; // Start from top, slightly to the left
        const endAngle = -Math.PI / 2 + 0.6; // End at top, slightly to the right
        const angleStep = (endAngle - startAngle) / text.length;

        for (let i = 0; i < text.length; i++) {
          const angle = startAngle + (i * angleStep);
          ctx.save();
          ctx.rotate(angle);
          ctx.fillStyle = "#FFFFFF";
          ctx.fillText(text[i], 0, -arcRadius);
          ctx.restore();
        }
        
        ctx.restore();
      }

      // Draw the triangle marker
      ctx.beginPath();
      ctx.moveTo(canvas.width, centerY);
      ctx.lineTo(canvas.width, centerY + 15);
      ctx.lineTo(canvas.width - 30, centerY);
      ctx.lineTo(canvas.width, centerY - 15);
      ctx.closePath();
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.strokeStyle = "black";
      ctx.stroke();

      ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
    };

    const constantSpin = () => {
      rotationRef.current += 0.005;
      drawWheel(rotationRef.current);
      animationIdRef.current = requestAnimationFrame(constantSpin);
    };

    const playTickSound = (interval: number) => {
      if (interval > 1000) return;
      tickSound?.play();
      soundTimeoutRef.current = setTimeout(() => {
        playTickSound(interval * 1.1);
      }, interval);
    };

    const stopTickSound = () => {
      clearTimeout(soundTimeoutRef.current);
    };

    const spinWheel = () => {
      if (isSpinningRef.current) return;
      playTickSound(1);

      isSpinningRef.current = true;
      cancelAnimationFrame(animationIdRef.current);
      const totalRotations = Math.random() * 3 + 5;
      let currentSpeed = 0.5;
      let deceleration = 0.98;

      const animateSpin = () => {
        currentSpeed *= deceleration;
        rotationRef.current += currentSpeed;

        if (currentSpeed < 0.001) {
          isSpinningRef.current = false;
          stopTickSound();
          cancelAnimationFrame(animationIdRef.current);

          const finalAngle = rotationRef.current % (2 * Math.PI);
          const index = Math.floor(
            ((2 * Math.PI - finalAngle) % (2 * Math.PI)) / segmentAngle
          );

          clapSound?.play().catch((error: any) => {
            console.error("Failed to play clap sound:", error);
          });

          const confettiConfig = {
            particleCount: 100,
            spread: 100,
            origin: { y: 0.7 },
            colors: ["#EBEAFF", "#9694FF", "#3D3BF3", "#FF2929"],
          };
          confetti(confettiConfig);

          setTimeout(() => {
            confetti(confettiConfig);
          }, 3000);

          setWinner(names[index]);
          setIsModalOpen(true);
          return;
        }

        drawWheel(rotationRef.current);
        animationIdRef.current = requestAnimationFrame(animateSpin);
      };

      animateSpin();
    };

    constantSpin();
    canvas.addEventListener("click", spinWheel);

    return () => {
      canvas.removeEventListener("click", spinWheel);
      cancelAnimationFrame(animationIdRef.current);
    };
  }, [names, tickSound, clapSound]);

  const handleAddName = () => {
    if (inputName.trim()) {
      setNames([...names, inputName.trim()]);
      setInputName("");
    }
  };

  const handleDeleteName = (index: number) => {
    const newNames = names.filter((_, i) => i !== index);
    setNames(newNames);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleAddName();
    }
  };

  const removeNameAndClose = () => {
    if (winner) {
      const newNames = names.filter(name => name !== winner);
      setNames(newNames);
      setIsModalOpen(false);
      setWinner(null);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center min-h-screen bg-gray-100 p-4">
      <div className="mb-8">
        <canvas
          ref={canvasRef}
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "50%",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>

      <div className="mt-5 md:ml-14">
        <div className="flex gap-2 mb-4">
          <TextField
            fullWidth
            variant="outlined"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter a name"
            size="small"
          />
          <IconButton
            color="primary"
            onClick={handleAddName}
            disabled={!inputName.trim()}
          >
            <AddIcon />
          </IconButton>
        </div>


<div className="h-72 overflow-y-scroll">


        <List className="bg-white rounded-lg shadow">
          {names.map((name, index) => (
            <ListItem key={index}>
              <ListItemText primary={name} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDeleteName(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        </div>
      </div>

      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="winner-modal"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            🎉 The Winner is...
          </Typography>
          <Typography variant="h4" component="h3" gutterBottom>
            {winner}
          </Typography>
          <div className="flex gap-4 whitespace-nowrap">
            <Button
              variant="contained"
              color="error"
              onClick={removeNameAndClose}
            >
              Remove Name and Close
            </Button>
            <Button variant="outlined" onClick={() => setIsModalOpen(false)}>
              Close
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default WheelOfNames;
