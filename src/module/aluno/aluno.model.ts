import { cpf as cpfValidator } from "cpf-cnpj-validator";
import knex from "../../service/knex";
import { IAlunoModel } from "./aluno.model.d";

export class alunoModel {
	private static tableName: string = "aluno";

	private static async validateParams(params: IAlunoModel): Promise<void> {
		if (!params.nome || params.nome.length === 0)
			throw new Error("O campo NOME é obrigatório!");

		if (!params.nome.match(/^[A-zÀ-ú '´]+$/))
			throw new Error("O campo NOME deve conter apenas letras!");

		if (!params.cpf) throw new Error("O campo CPF é obrigatório!");

		if (params.cpf.length !== 11)
			throw new Error("O campo CPF deve conter 11 digitos!");

		if (!cpfValidator.isValid(params.cpf))
			throw new Error("O número do CPF informado é inválido!");

		const alunos = await knex(this.tableName).select().where("cpf", params.cpf);

		if (alunos.length > 0)
			throw new Error("O número do CPF informado já está em uso!");
	}

	static getAll = async (): Promise<IAlunoModel[]> => {
		return (await knex(this.tableName).select()) as IAlunoModel[];
	};

	static store = async (params: IAlunoModel) => {
		await this.validateParams(params);
		return await knex(this.tableName).insert(params);
	};
}

export default alunoModel;
