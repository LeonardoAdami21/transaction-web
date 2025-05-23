import type { Statistics, Transaction } from "../types";

export const transactionService = {
  async createTransaction(transaction: Transaction): Promise<void> {
    if (!transaction.timestamp) {
      transaction.timestamp = new Date().toISOString();
    }
    if (transaction.amount < 0) {
      throw new Error("O valor da transação deve ser maior que zero");
    }
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/transactions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transaction),
      },
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Erro ao criar transação");
    }
  },

  async deleteAllTransactions(): Promise<void> {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/transactions`,
      {
        method: "DELETE",
      },
    );

    if (!response.ok) {
      throw new Error("Erro ao deletar transações");
    }
  },

  async getStatistics(): Promise<Statistics> {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/statistics`,
    );

    if (!response.ok) {
      throw new Error("Erro ao buscar estatísticas");
    }

    return response.json();
  },
};
