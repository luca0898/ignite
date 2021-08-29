import { Counter } from './Components/Counter'
import { RepositoryList } from './Components/RepositoryList'
import './styles/global.scss'

export function App() {
    return (
        <>
            <RepositoryList />
            <Counter />
        </>
    )
}