import ListasTarefas from "../model/ListaTarefas";
import Tarefa from "../model/Tarefa";
import TipoFiltro from "../model/TipoFiltro";



const tarefasIniciais: Tarefa[] = [
    Tarefa.criarAtiva(1, 'Estudar Next'),
    Tarefa.criarConcluida(2, 'Limpar Carro'),
    Tarefa.criarAtiva(3, 'Comprar Livros')
]

export default new ListasTarefas(tarefasIniciais, TipoFiltro.NENHUM)