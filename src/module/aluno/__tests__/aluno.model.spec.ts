import request from "supertest";
import knex from "../../../service/knex";

describe("Aluno Suite", () => {
	describe("#GetAll Alunos", () => {
		it("Deve retornar a lista de alunos cadastrados", async () => {
			const response = await request(process.env.ROOT_URL!).get("/aluno");
			expect(response.status).toBe(200);
		});
	});

	describe("#Insert Alunos", () => {
		it("Deve inserir um novo aluno", async () => {
			const response = await request(process.env.ROOT_URL!)
				.post("/aluno")
				.send({ nome: "Nome", cpf: "23681123080" });

			try {
				const {
					data: [insertId],
				} = JSON.parse(response.text);

				expect(response.status).toBe(201);
				await knex("aluno").delete().where("id", insertId);
			} catch {}

			knex.destroy();
		});

		it("Ao informar um nome vazio deve retornar uma mensagem de erro", async () => {
			const response = await request(process.env.ROOT_URL!)
				.post("/aluno")
				.send({ nome: "", cpf: 18544894020 });

			expect(response.status).toBe(400);
			expect(response.text).toContain('"erro":');
		});

		it("Ao informar um nome com outros caracteres além de letras deve retornar uma mensagem de erro", async () => {
			const response = await request(process.env.ROOT_URL!)
				.post("/aluno")
				.send({ nome: "Nome1", cpf: 18544894020 });

			expect(response.status).toBe(400);
			expect(response.text).toContain('"erro":');
		});

		it("Ao informar um cpf vazio deve retornar uma mensagem de erro", async () => {
			const response = await request(process.env.ROOT_URL!)
				.post("/aluno")
				.send({ nome: "Nome", cpf: undefined });

			expect(response.status).toBe(400);
			expect(response.text).toContain('"erro":');
		});

		it("Ao informar um cpf que não tenha 11 digitos deve retornar uma mensagem de erro", async () => {
			const response = await request(process.env.ROOT_URL!)
				.post("/aluno")
				.send({ nome: "Nome", cpf: 123 });

			expect(response.status).toBe(400);
			expect(response.text).toContain('"erro":');
		});

		it("Ao informar um cpf com 11 digitos porém inválido deve retornar uma mensagem de erro", async () => {
			const response = await request(process.env.ROOT_URL!)
				.post("/aluno")
				.send({ nome: "Nome", cpf: 12345678901 });

			expect(response.status).toBe(400);
			expect(response.text).toContain('"erro":');
		});

		it("Ao informar um cpf que já está registrado no banco de dados deve retornar um erro", async () => {
			const firstInsert = await request(process.env.ROOT_URL!)
				.post("/aluno")
				.send({ nome: "Nome", cpf: "08439815042" });

			const response = await request(process.env.ROOT_URL!)
				.post("/aluno")
				.send({ nome: "Nome", cpf: "08439815042" });

			expect(response.status).toBe(400);
			expect(response.text).toContain('"erro":');

			try {
				const {
					data: [insertId],
				} = JSON.parse(firstInsert.text);
				await knex("aluno").delete().where("id", insertId);
			} catch {}

			knex.destroy();
		});
	});
});
