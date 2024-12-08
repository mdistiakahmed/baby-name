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
  const rotationRef = useRef(0); // Track the current rotation angle
  const animationIdRef = useRef<any>(null);
  const isSpinningRef = useRef(false);
  const soundTimeoutRef = useRef<any>(null);

  const [tickSound, setTickSound] = useState<any>(null);
  const [clapSound, setClapSound] = useState<any>(null);

  // Load tick sound

  // State for names list
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
    const radius = canvas.width / 2 - 10;

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
        ctx.fillStyle = colors[index % colors.length];
        ctx.fill();

        // Draw the text
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(startAngle + segmentAngle / 2);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#ffffff"; // Text color
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

      // Draw the triangle marker

      ctx.beginPath();
      ctx.moveTo(canvas.width, centerY); // Right middle border
      ctx.lineTo(canvas.width, centerY + 15);
      ctx.lineTo(canvas.width - 30, centerY);
      ctx.lineTo(canvas.width, centerY - 15);

      ctx.closePath();
      // Fill and stroke the triangle
      ctx.fillStyle = "white"; // Fill color
      ctx.fill();
      ctx.strokeStyle = "black"; // Border color
      ctx.stroke();

      // Apply shadow effect
      ctx.shadowColor = "rgba(0, 0, 0, 0.5)"; // Shadow color
      ctx.shadowBlur = 10; // Blur effect
      ctx.shadowOffsetX = 2; // Horizontal shadow offset
      ctx.shadowOffsetY = 2; // Vertical shadow offset
    };

    // Function to spin the wheel at a constant speed
    const constantSpin = () => {
      rotationRef.current += 0.005; // Increment rotation angle for constant speed
      drawWheel(rotationRef.current);
      animationIdRef.current = requestAnimationFrame(constantSpin); // Continue the animation
    };

    // Function to play tick sound with dynamic intervals
    const playTickSound = (interval: number) => {
      if (interval > 1000) return; // Stop sound at very slow intervals

      tickSound?.play();

      soundTimeoutRef.current = setTimeout(() => {
        playTickSound(interval * 1.1); // Gradually increase the interval
      }, interval);
    };

    // Function to stop the tick sound
    const stopTickSound = () => {
      clearTimeout(soundTimeoutRef.current);
    };

    // Function to spin the wheel
    const spinWheel = () => {
      if (isSpinningRef.current) return; // Prevent multiple spins
      playTickSound(1);

      isSpinningRef.current = true;
      cancelAnimationFrame(animationIdRef.current); // Stop the constant spin
      const totalRotations = Math.random() * 3 + 5; // Random rotations between 5 and 8
      let currentSpeed = 0.5; // Initial speed
      let deceleration = 0.98; // Deceleration factor

      const animateSpin = () => {
        currentSpeed *= deceleration;
        rotationRef.current += currentSpeed;

        // Stop spinning when speed is very low
        if (currentSpeed < 0.001) {
          isSpinningRef.current = false;
          stopTickSound(); // Stop the tick sound
          cancelAnimationFrame(animationIdRef.current);

          // Determine the selected name
          const finalAngle = rotationRef.current % (2 * Math.PI);
          const index = Math.floor(
            ((2 * Math.PI - finalAngle) % (2 * Math.PI)) / segmentAngle
          );

          clapSound?.play().catch((error: any) => {
            console.error("Failed to play clap sound:", error);
          });

          const confettiConfig = {
            particleCount: 100, // Number of confetti particles
            spread: 100, // Spread of confetti particles
            origin: { y: 0.7 }, // Origin point for confetti (adjust as needed)
            colors: ["#EBEAFF", "#9694FF", "#3D3BF3", "#FF2929"], // Confetti colors
          };
          confetti(confettiConfig);

          setTimeout(() => {
            confetti(confettiConfig);
          }, 3000);

          setWinner(names[index]); // Set the winner name
          setIsModalOpen(true);
          //alert(`The wheel stopped on: ${names[index]}`);
          return;
        }

        drawWheel(rotationRef.current);
        animationIdRef.current = requestAnimationFrame(animateSpin);
      };

      animateSpin();
    };

    // Start the constant spin
    constantSpin();

    // Add click event listener to spin the wheel
    canvas.addEventListener("click", spinWheel);

    // Cleanup on unmount
    return () => {
      canvas.removeEventListener("click", spinWheel);
      cancelAnimationFrame(animationIdRef.current);
      stopTickSound(); // Stop the tick sound if component unmounts
    };
  }, [names]);

  // Add name to the list
  const addName = () => {
    if (inputName.trim()) {
      setNames((prev) => [...prev, inputName.trim()]);
      setInputName("");
    }
  };

  // Function to delete a name
  const deleteName = (nameToDelete: string) => {
    setNames(names.filter((name) => name !== nameToDelete));
  };

  // Shuffle names
  const shuffleNames = () => {
    const shuffled = [...names].sort(() => Math.random() - 0.5);
    setNames(shuffled);
  };

  const removeNameAndClose = () => {
    setNames((prev) => prev.filter((name) => name !== winner)); // Remove winner
    setWinner(null);
    setIsModalOpen(false);
  };

  const closeModal = () => {
    setWinner(null);
    setIsModalOpen(false);
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-10">
      <canvas
        ref={canvasRef}
        className="w-full max-w-md aspect-square border border-gray-300"
      />

      <div>
        <TextField
          label="Add Name"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          variant="outlined"
          size="small"
          style={{ marginBottom: "1rem" }}
        />
        <IconButton
          onClick={addName}
          color="primary"
          style={{ marginLeft: "1rem" }}
        >
          <AddIcon />
          Add
        </IconButton>

        {/* List of names */}
        <List>
          {names.map((name, index) => (
            <ListItem
              key={index}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <ListItemText
                primary={name}
                style={{ textAlign: "right" }} // Right-align the text
              />
              <ListItemSecondaryAction>
                {/* Delete button for each name */}
                <IconButton
                  onClick={() => deleteName(name)}
                  edge="end"
                  color="error"
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>

        {/* Shuffle button */}
        <IconButton
          onClick={shuffleNames}
          color="secondary"
          style={{ marginTop: "1rem" }}
        >
          <ShuffleIcon />
          Shuffle
        </IconButton>
      </div>

      <Modal
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="winner-modal-title"
        aria-describedby="winner-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography
            id="winner-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
            gutterBottom
          >
            🎉 Winner: {winner} 🎉
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}>
            <Button
              variant="contained"
              color="error"
              onClick={removeNameAndClose}
            >
              Remove Name and Close
            </Button>
            <Button variant="outlined" onClick={closeModal}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default WheelOfNames;
