import { useEffect, useState } from "react";
import api from "../../services/api";
import { Container } from "./styles";

interface Transaction {
    id: string;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export function TransactionTable() {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions')
            .then(({ data }) => {
                setTransactions(data.transactions)
            })
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions && transactions.map(item => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td className={item.type}>R${item.amount}</td>
                            <td>{item.category}</td>
                            <td>{item.createdAt}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </Container>
    )
}