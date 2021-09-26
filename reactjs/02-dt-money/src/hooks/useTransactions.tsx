import React, { createContext, useContext, useEffect, useState } from "react"
import api from "../services/api";

interface Transaction {
    id: string;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
    children: React.ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions')
            .then(({ data }) => {
                setTransactions(data.transactions)
            })
    }, [])

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post('/transactions', {...transactionInput, createdAt: new Date()})

        const { transaction } = response.data;

        setTransactions([
            ...transactions,
            transaction
        ])
    }

    return (
        <TransactionContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionContext)

    return context;
}