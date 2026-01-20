
import TodoList from '../components/List/todolist'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
import { useEffect, useState } from 'react'


export interface List {
  id: string,
  name: string
}

function List() {
  const [detailsList, setDetailsList] = useState<List[]>([])
  const [task, setTask] = useState<string>('')

  useEffect(() => {


  sessionStorage.setItem("list", JSON.stringify(detailsList));
}, [detailsList]);

  return (
    <>
      <section className='main'>
        <header className='main-header'>
          <h1> Minha Todo List em react</h1>
        </header>
        <section className='main-body'>
          <section className='main-input'>
            <Input value={task} setValue={setTask} />
            <Button value={task} setValueTask={setTask} setValue={setDetailsList} />
          </section>
          <TodoList data={detailsList} setValueList={setDetailsList}/>
      </section>
    </section>
    </>
  )
}

export default List