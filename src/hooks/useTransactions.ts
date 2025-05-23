import { useEffect, useState } from "react";
import type { Statistics, Transaction } from "../types";
import { transactionService } from "../services/api";

export const useTransactions = () => {
  const [statistics, setStatistics] = useState<Statistics>({
    count: 0,
    sum: 0,
    avg: 0,
    min: 0,
    max: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const clearMessages = () => {
    setError(null);
    setSuccess(null);
  };

  const fetchStatistics = async () => {
    try {
      const stats = await transactionService.getStatistics();
      setStatistics(stats);
    } catch (err) {
      console.error("Erro ao buscar estatísticas:", err);
    }
  };

  const createTransaction = async (transaction: Transaction) => {
    setLoading(true);
    clearMessages();

    try {
      await transactionService.createTransaction(transaction);
      setSuccess("Transação criada com sucesso!");
      fetchStatistics();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  const deleteAllTransactions = async () => {
    if (!confirm("Tem certeza que deseja deletar todas as transações?")) {
      return;
    }

    setLoading(true);
    clearMessages();

    try {
      await transactionService.deleteAllTransactions();
      setSuccess("Todas as transações foram deletadas!");
      fetchStatistics();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatistics();

    // Auto-refresh statistics every 5 seconds
    const interval = setInterval(fetchStatistics, 5000);

    return () => clearInterval(interval);
  }, []);

  // Clear messages after 5 seconds
  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(clearMessages, 5000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  return {
    statistics,
    loading,
    error,
    success,
    createTransaction,
    deleteAllTransactions,
    fetchStatistics,
  };
};
