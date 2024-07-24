import { IKnexConfig } from "./knex.d";

const knexConfig: IKnexConfig = {
	client: "mysql2",
	connection: {
		// host: "testednc",
		// port: 3306,
		// user: "user",
		// password: "password",
		// database: "testednc",
		host: "localhost",
		port: 3306,
		user: "root",
		password: "admin",
		database: "testednc",
	},
};

export default knexConfig;
