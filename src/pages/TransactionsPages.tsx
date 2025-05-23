import React from "react";
import Header from "../components/layouts/Header";
import Alert from "../components/ui/Alert";
import { StatisticsGrid } from "../components/statistics/StatisticGrid";
import { useTransactions } from "../hooks/useTransactions";
import TransactionForm from "../components/forms/TransactionForm";
import ActionsPanel from "../components/actions/ActionsPanel";
import Footer from "../components/layouts/Footer";

const TransactionsPages: React.FC = () => {
  const {
    statistics,
    loading,
    createTransaction,
    fetchStatistics,
    deleteAllTransactions,
    error,
    success,
  } = useTransactions();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <Header />

        {/* Alert Messages */}
        {success && <Alert message={success} type="success" />}
        {error && <Alert message={error} type="error" />}

        {/* Statistics Cards */}
        <StatisticsGrid statistics={statistics} />

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Transaction Form */}
          <div className="lg:col-span-2">
            <TransactionForm onSubmit={createTransaction} loading={loading} />
          </div>

          {/* Actions Panel */}
          <ActionsPanel
            onRefresh={fetchStatistics}
            onDeleteAll={deleteAllTransactions}
            loading={loading}
          />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default TransactionsPages;
