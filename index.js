import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.send(`
    <h1>Hello from Express on EC2 via Docker!!</h1>
    <p>Time: ${new Date().toISOString()}</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
