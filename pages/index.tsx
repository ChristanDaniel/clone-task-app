import type { NextPage } from 'next'
import tarefasIniciais from '../src/data/mock'
import Tarefa from '../src/model/Tarefa'


const Home: NextPage = () => {

  let tarefas = tarefasIniciais

  return (
    <>
      {tarefas.itens.map((taref) => {
        return (
          <div key={taref.id}>
            <span>{taref.id}</span>
            <span>{taref.descricao}</span>
            <span>{taref.concluida ? 'Concluída' : 'Ativa'}</span>
          </div>
        )
      })}
    </>
  )
}

export default Home
