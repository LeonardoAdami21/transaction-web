import React, { useState } from "react";
import type { Transaction } from "../../types";
import { Plus, RefreshCw } from "lucide-react";

interface TransactionFormProps {
  onSubmit: (transaction: Transaction) => Promise<void>;
  loading: boolean;
}

const TransactionForm: React.FC<TransactionFormProps> = ({
  onSubmit,
  loading,
}) => {
  const [amount, setAmount] = useState("");
  const [timestamp, setTimestamp] = useState("");

  const handleSubmit = async () => {
    if (!amount || !timestamp) return;

    await onSubmit({
      amount: parseFloat(amount),
      timestamp: new Date(timestamp).toISOString(),
    });

    setAmount("");
    setTimestamp("");
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toISOString().slice(0, 19);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <Plus className="w-5 h-5 mr-2 text-blue-600" />
        Nova Transação
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Valor (R$)
          </label>
          <input
            type="number"
            step="0.01"
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="0.00"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Data e Hora
          </label>
          <input
            type="datetime-local"
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
            max={getCurrentDateTime()}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading || !amount || !timestamp}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
      >
        {loading ? (
          <RefreshCw className="w-4 h-4 animate-spin mr-2" />
        ) : (
          <Plus className="w-4 h-4 mr-2" />
        )}
        {loading ? "Criando..." : "Criar Transação"}
      </button>
    </div>
  );
};

export default TransactionForm;
