import express from 'express';

const app = express();
app.use(express.json());

const livros = {
    aventura: [
        { id: 1, nome: 'Indianda Jones, vol: 1' },
        { id: 2, nome: 'Indianda Jones, vol: 2' },
    ],
    suspense: [
        { id: 1, nome: 'Livro do medo, vol: 1' },
        { id: 2, nome: 'Livro do medo, vol: 2' },
    ],
    romance: [
        { id: 1, nome: 'Como eu era antes de você' },
        { id: 2, nome: 'A culpa é das estrelas' },
    ],
    ficcao: [
        { id: 1, nome: 'Harry Potter e as Relíquias da morte, part: I' },
        { id: 2, nome: 'Harry Potter e as Relíquias da morte, part: II' },
    ]
}

app.get('/livros', (req, res) => {
    res.status(200).send({ livros })
});


app.listen(3000, () => console.log('Servidor rodando!'));