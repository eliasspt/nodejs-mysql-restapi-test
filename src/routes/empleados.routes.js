import { Router } from "express";
import {
	obtenerEmpleados,
	obtenerEmpleado,
	crearEmpleado,
	actualizarEmpleado,
	borrarEmpleado,
} from "../controllers/empleados.controller.js";

const router = Router();

router.get("/empleados", obtenerEmpleados);

router.get("/empleados/:id", obtenerEmpleado);

router.post("/empleados", crearEmpleado);

router.patch("/empleados/:id", actualizarEmpleado);

router.delete("/empleados/:id", borrarEmpleado);

export default router;
