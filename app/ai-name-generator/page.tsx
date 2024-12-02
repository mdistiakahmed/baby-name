'use client';

import { useState } from 'react';
import {
  Button,
  TextField,
  MenuItem,
  Card,
  CardContent,
  Typography,
  Container,
  Box,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from '@mui/material';

interface NameSuggestion {
  name: string;
  meaning: string;
  origin: string;
  religion: string;
}

export default function AINameGenerator() {
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [gender, setGender] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<NameSuggestion | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/generate-name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fatherName,
          motherName,
          gender,
        }),
      });

      const data = await response.json();
      setSuggestion(data);
    } catch (error) {
      console.error('Error generating name:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGenderChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        AI Baby Name Generator
      </Typography>
      
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <TextField
          fullWidth
          label="Father's Name"
          value={fatherName}
          onChange={(e) => setFatherName(e.target.value)}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Mother's Name"
          value={motherName}
          onChange={(e) => setMotherName(e.target.value)}
          margin="normal"
          required
        />

        <FormControl fullWidth margin="normal" required>
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select
            labelId="gender-label"
            value={gender}
            label="Gender"
            onChange={handleGenderChange}
          >
            <MenuItem value="boy">Boy</MenuItem>
            <MenuItem value="girl">Girl</MenuItem>
          </Select>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={loading}
          sx={{ mt: 3, mb: 2 }}
        >
          {loading ? 'Generating...' : 'Generate Name'}
        </Button>
      </Box>

      {suggestion && (
        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Typography variant="h4" component="h2" gutterBottom>
              {suggestion.name}
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Meaning:</strong> {suggestion.meaning}
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Origin:</strong> {suggestion.origin}
            </Typography>
            <Typography variant="body1">
              <strong>Religion:</strong> {suggestion.religion}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Container>
  );
}
