const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Rota teste
app.get('/', (req, res) => {
  res.send('🚀 API Buskai rodando!');
});

// Rota de busca
app.get('/search', (req, res) => {
  const query = req.query.query || '';

  const produtos = [
    { nome: 'iPhone 15 Pro Max', preco: 7999, link: 'https://exemplo.com/produto1' },
    { nome: 'iPhone 15', preco: 6999, link: 'https://exemplo.com/produto2' },
    { nome: 'iPhone 15 Plus', preco: 7499, link: 'https://exemplo.com/produto3' }
  ];

  const resultados = produtos.filter(p => p.nome.toLowerCase().includes(query.toLowerCase()));
  res.json({ produtos: resultados.length ? resultados : produtos });
});

app.listen(port, () => {
  console.log(`🚀 API Buskai rodando na porta ${port}`);
});
