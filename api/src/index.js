import db from './db.js';
import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());


app.get('/produto', async (req, resp) => {
    try {
        let salas = await db.tb_produto.findAll();
        resp.send(produtos);
    } catch (e) {
        resp.send({ erro: 'Ops ocorreu um erro!'})
    }
})
app.post('/produto', async (req, resp) => {
    
    try { let salaParam = req.body;

        let s = await db.tb_produto.findOne({ where: { nm_produto: salaParam.nome } });
        if (s != null)
            return resp.send({ erro: 'Este produto já existe!' });

        let r = await db.tb_produto.create({
            nm_produto: salaParam.nome,
            bt_ativo: salaParam.ativo
        })
        resp.send(r);
    } catch (e) {
        resp.send({ erro: 'Ops ocorreu um erro!'})
    }
})


app.put('/produto/:id', async ( req, resp) => {

    let id = req.query.id;

    let nome = req.quert,nome;


    let r = await db.tb_produto.update( { nm_produto: nome}, { where: { id_produto: id } })

    resp.sendStatus(200);
} )


app.delete('/produto/:id', async (req, resp ) => {

    let id = req.query.id;

    let r = await db.tb_produto.destroy({where: { id_produto: id}  })
})