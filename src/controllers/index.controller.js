import { pool } from "../db.js";

export const ping = async (req, res) => {
	const [result] = await pool.query("select 'pong' as resultado");
	res.json(result[0]);
}