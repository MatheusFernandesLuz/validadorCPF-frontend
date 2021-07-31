import { api } from "./api";
import { CPF } from "../interfaces/CPF";

async function findAllCPF(): Promise<CPF[]> {
  try {
    const result = await api.get<CPF[]>("/cpf");
    return result.data;
  } catch (error) {
    throw error;
  }
}

async function createCPF(cpf: string): Promise<void> {
  try {
    await api.post("/cpf", { cpf: cpf });
  } catch (error) {
    alert(error.response.data.message);
  }
}

async function deleteCPF(cpf: string) {
  try {
    await api.delete(`/cpf/${cpf}`);
  } catch (error) {
    alert(error.response.data.message);
  }
}

export { findAllCPF, createCPF, deleteCPF };
