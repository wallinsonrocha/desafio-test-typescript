import knex, { Knex } from "knex";
import knexConfig from "../config/knex";

let conn: Knex | undefined;

function conectar(): Knex<any, any[]> {
	if (conn) {
		return conn;
	}

	conn = knex(knexConfig);
	return conn;
}

export default conectar();
