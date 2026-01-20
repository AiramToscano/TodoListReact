import { useEffect, useState } from "react"
import type { List } from "../../view/List"


interface ListProps {
  data: List [],
  setValueList: React.Dispatch<React.SetStateAction<List[]>>
}

function TodoList({data, setValueList}:ListProps ) {
  const [idList, setIdList] = useState('')
  const [value, setValue] = useState('')

  const handleClickEdit = (id: string, name: string) => {
    setIdList(id)
    setValue(name)
  }

    const handleClickDelete = (id: string) => {

     const newData = data.filter((e) => e.id !== id)
   setValueList(newData)
  }

  const handleInputEnter = () => {
     const newData = data.map((e) => {
       return {
      ...e,
      name: e.id === idList ? value : e.name
      }
    })
   setValueList(newData)
   setIdList('')
       
        
  }

    useEffect(() => {
 const list = JSON.parse(sessionStorage.getItem("list") || "null");

  if(list.length > 0 && list) setValueList(list)

  }, []);


  return (
   
    <section>
    <ul>
  {data.map(list => (
    <li key={list.id} className="main-todo-list">
      {list.id === idList ? (
        <input  onKeyDown={e => {
    if (e.key === "Enter") {
      handleInputEnter();
    }
  }}  onChange={(e) => setValue(e.target.value) } value={value} />
      ) : (
        <span>{list.name}</span>
      )}
      <section>
      <button type="button" onClick={() => handleClickEdit(list.id, list.name)}>
        edit
      </button>
        <button type="button" onClick={() => handleClickDelete(list.id)}>
        delete
      </button>
      </section>
    </li>
  ))}
</ul>
    </section>
  )
}

export default TodoList
