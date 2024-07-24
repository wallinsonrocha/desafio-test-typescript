import dotenv from "dotenv";
import express, { Response } from "express";
import alunoRoute from "./module/aluno/aluno.route";

const app = express();
const port: number = Number(process.env.PORT) || 8080;

dotenv.config();
app.use(express.json());

app.use("/aluno", alunoRoute);

app.get("/", (_, res: Response) => {
	res.status(200).json({ status: "OK!" });
});

app.listen(port, () => {
	console.log("\nserver running!");
	console.log(`http://localhost:${port}`);
});
