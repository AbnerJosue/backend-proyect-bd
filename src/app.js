import express from "express";
import config from "./config";
import rrhh from "./routes/rrhh.routes";
import inventary from "./routes/inventary.routes";
const app = express(); 

app.set("port", config.port); 
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(rrhh);
app.use(inventary);

export default app; 