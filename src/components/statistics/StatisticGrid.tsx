import React from "react";
import { Hash, DollarSign, BarChart3, TrendingUp } from "lucide-react";
import type { Statistics } from "../../types";
import StaticCard from "../ui/StaticCard";

interface StatisticsGridProps {
  statistics: Statistics;
}

export const StatisticsGrid: React.FC<StatisticsGridProps> = ({
  statistics,
}) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
      <StaticCard
        title="Total de Transações"
        value={statistics.count.toString()}
        icon={<Hash className="w-6 h-6" />}
        color="border-l-blue-500"
      />

      <StaticCard
        title="Soma Total"
        value={formatCurrency(statistics.sum)}
        icon={<DollarSign className="w-6 h-6" />}
        color="border-l-green-500"
      />

      <StaticCard
        title="Média"
        value={formatCurrency(statistics.avg)}
        icon={<BarChart3 className="w-6 h-6" />}
        color="border-l-purple-500"
      />

      <StaticCard
        title="Menor Valor"
        value={formatCurrency(statistics.min)}
        icon={<TrendingUp className="w-6 h-6 rotate-180" />}
        color="border-l-orange-500"
      />

      <StaticCard
        title="Maior Valor"
        value={formatCurrency(statistics.max)}
        icon={<TrendingUp className="w-6 h-6" />}
        color="border-l-red-500"
      />
    </div>
  );
};
