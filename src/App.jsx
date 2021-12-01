import { RepositoryList } from './components/RepositoryList'
import './styles/global.scss'

/*Componente em React =  Dividir o app em varios pedaços
 é uma função *com a primeira letra do nome SEMPRE em maiusculo*
 um pcomponente sempre por arquivo
 que devolve um HTML*/ 
export function App() {
    return <RepositoryList/>
}