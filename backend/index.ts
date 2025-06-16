import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/signup', (req, res) => {
  const { name, password } = req.body;
  res.status(201).json({msg: `User ${name} signup suceffuly`})
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})