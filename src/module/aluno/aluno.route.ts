import express, { Request, Response } from "express";
import alunoModel from "./aluno.model";

const router = express.Router();

router.get("/", async (_, res: Response) => {
	const data = await alunoModel.getAll();
	return res.status(200).json({ data });
});

router.post("/", async (req: Request, res: Response) => {
	const { nome, cpf } = req.body;

	try {
		const data = await alunoModel.store({ nome: String(nome).trim(), cpf });
		return res.status(201).json({ data });
	} catch (err) {
		return res.status(400).json({ erro: String(err).replace("Error: ", "") });
	}
});

export default router;
