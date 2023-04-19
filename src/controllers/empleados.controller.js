import { pool } from "../db.js";

export const obtenerEmpleados = async (req, res) => {
	try {
		const [rows] = await pool.query("SELECT * FROM empleados");
		res.send(rows);
	} catch (error) {
		return res.status(500).json({ mensaje: error.toString() });
	}
};

export const obtenerEmpleado = async (req, res) => {
	try {
		const [rows] = await pool.query("SELECT * FROM empleados WHERE id = ?", [
			req.params.id,
		]);
		if (rows.length > 0) res.send(rows[0]);
		else return res.status(404).json({ mensaje: "Empleado no encontrado" });
	} catch (error) {
		return res.status(500).json({ mensaje: error.toString() });
	}
};

export const crearEmpleado = async (req, res) => {
	const { nombre, salario } = req.body;
	try {
		const [rows] = await pool.query(
			"INSERT INTO empleados (nombre, salario) VALUES (?, ?)",
			[nombre, salario]
		);
		res.send({
			id: rows.insertId,
			nombre,
			salario,
		});
	} catch (error) {
		return res.status(500).json({ mensaje: error.toString() });
	}
};

export const actualizarEmpleado = async (req, res) => {
	const { id } = req.params;
	const { nombre, salario } = req.body;
	try {
		const [result] = await pool.query(
			"UPDATE empleados SET nombre = IFNULL(?, nombre), salario = IFNULL(?, salario) WHERE id = ?",
			[nombre, salario, id]
		);
		if (result.affectedRows > 0) {
			const [rows] = await pool.query("SELECT * FROM empleados WHERE id = ?", [
				req.params.id,
			]);
			res.send(rows[0]);
		} else return res.status(404).json({ mensaje: "Empleado no encontrado" });
	} catch (error) {
		return res.status(500).json({ mensaje: error.toString() });
	}
};

export const borrarEmpleado = async (req, res) => {
	try {
		const [result] = await pool.query("DELETE FROM empleados WHERE id = ?", [
			req.params.id,
		]);
		if (result.affectedRows > 0) res.sendStatus(204);
		else return res.status(404).json({ mensaje: "Empleado no encontrado" });
	} catch (error) {
		return res.status(500).json({ mensaje: error.toString() });
	}
};
