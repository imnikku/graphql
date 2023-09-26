import express from 'express';
import { expressMiddleware } from '@apollo/server/express4';
import CreateGraphqlServer from './graphql';
const app = express();
const PORT = Number(process.env.PORT) || 8000;


// create Graphql Server .....
async function init() {
    app.use(express.json())


    app.get("/", (req, res) => {
        res.send("Server start")
    })

    app.use('/graphql', expressMiddleware(await CreateGraphqlServer()))

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}


init()