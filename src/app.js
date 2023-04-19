import express from "express";
import indexRoutes from "./routes/index.routes.js";
import empleadosRoutes from "./routes/empleados.routes.js";

const app = express();

app.use(express.json());
app.use(indexRoutes);
app.use("/api", empleadosRoutes);

app.use((req, res, next) => {
	res.status(404).json({
		mensaje: "Punto final no encontrado",
	});
});

export default app;