import app from "./app";
import "./database/conexion"
app.listen(app.get('port'));
console.log(`listen in the port ${app.get("port")}` )