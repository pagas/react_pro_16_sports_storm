import {Request, Response, NextFunction} from "express";
import express from "express";
import jsonServer from 'json-server';
import chokidar from 'chokidar';
import cors from 'cors';
import {buildSchema} from 'graphql';
import graphqlHTTP from "express-graphql";
import * as serverQueriesResolver from './graphql/serverQueriesResolver';
import * as serverMutationsResolver from './graphql/serverMutationsResolver';
import fs from 'fs';

const fileName = process.argv[2] || "./data.ts";
const port = process.argv[3] || 3500;
let router:any = undefined;
let graph:any = undefined;

const app = express();
const createServer = () => {
    delete require.cache[require.resolve(fileName)];
    setTimeout(() => {
        router = jsonServer.router(fileName.endsWith(".ts") ? require(fileName).default() : fileName)
        let schema = fs.readFileSync('./server/graphql/serverQueriesSchema.graphql', 'utf-8') +
            fs.readFileSync('./server/graphql/serverMutationsSchema.graphql', 'utf-8');

        let resolvers = {...serverQueriesResolver, ...serverMutationsResolver};
        graph = graphqlHTTP({
            schema: buildSchema(schema),
            rootValue: resolvers,
            graphiql: true,
            context: {db: router.db}
        })
    }, 100);
};

app.use(cors());
app.use(jsonServer.bodyParser);
app.use("/api", (req:Request, resp: Response, next: NextFunction) => router(req, resp, next));
app.use("/graphql", (req:Request, resp:Response, next: NextFunction) => graph(req, resp, next));

chokidar.watch(fileName).on("change", () => {
   console.log("Reloading web service data...");
   createServer();
   console.log("Reloading web service data complete.");
});

app.listen(port, () => {
   console.log(`Web server is running port ${port}`);
});

createServer();
