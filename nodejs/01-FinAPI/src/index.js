import express from "express"
import { v4 } from "uuid"

const app = express()

app.use(express.json())

const customers = []

function verifyIfExistsAccountCPF(request, response, next) {

    const { cpf } = request.headers;

    const customer = customers.find((customer) => customer.cpf === cpf);

    if (!customer) {
        return response.status(404).json({ error: 'Customer not found!' })
    }

    request.customer = customer;

    return next();
}

function getBalance(statement) {
    return statement.reduce((acc, op) => (op.type === "credit") ? acc + op.amount : acc - op.amount, 0)
}

app.post('/account', (request, response) => {

    const { cpf, name } = request.body

    if (!cpf || !name) {
        return response.status(400).json({ error: '"cpf" and "name" data must be valid!' })
    }

    const customerAlreadyExists = customers.some((customer) => customer.cpf === cpf)

    if (customerAlreadyExists) {
        return response.status(400).json({ error: 'Customer already exists!' })
    }

    customers.push({
        id: v4(),
        cpf,
        name,
        statement: []
    })

    return response.status(201).send()
})

app.get('/account', verifyIfExistsAccountCPF, (request, response) => {
    return response.json(request.customer)
})

app.get('/account/balance', verifyIfExistsAccountCPF, (request, response) => {
    const { customer } = request

    return response.json({ balance: getBalance(customer.statement) })
})

app.put('/account', verifyIfExistsAccountCPF, (request, response) => {
    const { name } = request.body
    const { customer } = request;

    customer.name = name;

    return response.send()

})

app.delete('/account', verifyIfExistsAccountCPF, (request, response) => {
    const { customer } = request;

    customers.splice(customer, 1)

    return response.json(customers)
})

app.get('/statements', verifyIfExistsAccountCPF, (request, response) => {
    return response.json(request.customer.statement)
})

app.get('/statements/date', verifyIfExistsAccountCPF, (request, response) => {
    const { customer } = request;
    const { date } = request.query;

    const formatedDate = new Date(date + " 00:00");

    const filteredStatements = customer.statement.filter(operation => operation.created_at.toDateString() === formatedDate.toDateString())

    return response.json(filteredStatements);
})

app.post('/statements/deposit', verifyIfExistsAccountCPF, (request, response) => {

    const { description, amount } = request.body;
    const { customer } = request;

    const statementOperation = {
        description,
        amount,
        created_at: new Date(),
        type: 'credit'
    }

    customer.statement.push(statementOperation);

    return response.status(201).send();
})

app.post('/statements/withdraw', verifyIfExistsAccountCPF, (request, response) => {

    const { amount } = request.body;
    const { customer } = request;

    if (getBalance(customer.statement) < amount) {
        return response.status(404).json({ error: 'customer does not have enough balance!' })
    }

    const statementOperation = {
        description: "retirada",
        amount,
        created_at: new Date(),
        type: 'withdraw'
    }

    customer.statement.push(statementOperation);

    return response.status(201).send();
})

app.listen(3333)