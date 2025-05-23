import React from "react";
import { RefreshCw, Trash2 } from "lucide-react";

interface ActionsPanelProps {
  onRefresh: () => void;
  onDeleteAll: () => void;
  loading: boolean;
}

const ActionsPanel: React.FC<ActionsPanelProps> = ({
  onRefresh,
  onDeleteAll,
  loading,
}) => (
  <div className="space-y-4">
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Ações</h3>

      <div className="space-y-3">
        <button
          onClick={onRefresh}
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
        >
          <RefreshCw
            className={`w-4 h-4 mr-2 ${loading ? "animate-spin" : ""}`}
          />
          Atualizar Estatísticas
        </button>

        <button
          onClick={onDeleteAll}
          disabled={loading}
          className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Deletar Todas
        </button>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações</h3>

      <div className="space-y-2 text-sm text-gray-600">
        <p>• Estatísticas dos últimos 60 segundos</p>
        <p>• Atualização automática a cada 5s</p>
        <p>• Valores em Reais (BRL)</p>
        <p>• Transações futuras não permitidas</p>
      </div>
    </div>
  </div>
);

export default ActionsPanel;
