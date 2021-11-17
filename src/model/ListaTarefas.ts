import Tarefa from "./Tarefa";
import TipoFiltro from "./TipoFiltro";

export default class ListasTarefas {
    #todas: Tarefa[]
    #filtroUtilizado: TipoFiltro

    constructor(todas: Tarefa[], filtroUtilizado = TipoFiltro.NENHUM) {
        this.#todas = todas
        this.#filtroUtilizado = filtroUtilizado ?? TipoFiltro.NENHUM
    }

    get itens() {
        return this.#todas
    }

    get quantidade() {
        return this.itens.length
    }

    get filtroUtilizado() {
        return this.#filtroUtilizado
    }

    exibindoTodas(): boolean {
        return this.#filtroUtilizado === TipoFiltro.NENHUM
    }

    exibindoSomenteAtivas(): boolean {
        return this.#filtroUtilizado === TipoFiltro.ATIVAS
    }

    exibindoSomenteConcluidas(): boolean {
        return this.#filtroUtilizado === TipoFiltro.CONCLUIDAS
    }
}