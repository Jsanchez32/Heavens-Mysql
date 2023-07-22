import express from "express";
import cors from "cors";
import municipioRouter from "./routes/municipio.routes.js";
import barrioRouter from "./routes/barrio.routes.js";
import comunaRouter from "./routes/comuna.routes.js";
import creyentesRouter from "./routes/creyentes.routes.js";
import departamentoRouter from "./routes/departamento.routes.js";

const app = express();

app.set('port',5000)


//Middelwares//
app.use(express.json());
const configCors = {
    methods:['GET','POST','PUT','DELETE']
}
app.use(cors(configCors));

app.use("/api/municipio",municipioRouter);
app.use("/api/barrio",barrioRouter);
app.use("/api/comuna",comunaRouter);
app.use("/api/creyente",creyentesRouter);
app.use("/api/departamento",departamentoRouter);


export default app;