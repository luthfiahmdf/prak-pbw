import express from "express";
const app = express();
app.use(express.json());
const port = 7000;

app.get("/", (req, res) => {
  res.send({
    nama: "Fahmi Sugiarto",
  });
});
app.get("/makanan", (req, res) => {
  res.send([
    {
      id: 1,
      nama: "Bakwan",
      rasa: "udang",
    },
    {
      id: 2,
      nama: "Tahu",
      rasa: "Bulat",
    },
    {
      id: 3,
      nama: "Baso",
      rasa: "Medan",
    },
    {
      id: 4,
      nama: "Nasi",
      rasa: "Padang",
    },
  ]);
});
app.get("/minuman", (req, res) => {
  res.send([
    {
      id: 1,
      nama: "Cimory",
      rasa: "Strawberry",
    },
    {
      id: 2,
      nama: "Pop Ice",
      rasa: "Taro",
    },
    {
      id: 3,
      nama: "Adem sari",
      rasa: "Chinku",
    },
    {
      id: 4,
      nama: "Teh",
      rasa: "Kotak",
    },
  ]);
});
app.post("/create", (req, res) => {
  res.send({
    nama: req.body,
  });
});

app.listen(port, () => {
  console.log(`Aplikasi Berjalan di port ${port}`);
});
