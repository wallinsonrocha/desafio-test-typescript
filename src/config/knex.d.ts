export interface IKnexConfig {
	client: string;
	connection: IKnexConn;
}

interface IKnexConn {
	host: string;
	port: number;
	user: string;
	password: string;
	database: string;
}
