const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/search', async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: 'Faltou a palavra-chave.' });
  }

  // Aqui você coloca a lógica real para buscar produtos em marketplaces
  // Por enquanto, está simulando com produtos fixos

  const produtos = [
    { loja: 'Mercado Livre', nome: `Produto 1 de ${query}`, preco: 100, imagem: '', link: '#' },
    { loja: 'Amazon', nome: `Produto 2 de ${query}`, preco: 90, imagem: '', link: '#' },
    { loja: 'Shopee', nome: `Produto 3 de ${query}`, preco: 80, imagem: '', link: '#' },
  ];

  res.json(produtos);
});

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
