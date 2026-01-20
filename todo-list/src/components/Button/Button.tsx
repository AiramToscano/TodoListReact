import type { List } from "../../view/List"


interface PropsInput {
  value: string
  setValueTask: React.Dispatch<React.SetStateAction<string>>
  setValue: React.Dispatch<React.SetStateAction<List[]>>
}

function Button({setValueTask, value, setValue}: PropsInput) {
  const OnHandleClick = () => {
    setValueTask('')

    const obj = {
      id: crypto.randomUUID(),
      name: value
    }
   setValue(prev => [...prev, obj]);
   
  }

  return (
   
    <section >
       <button onClick={OnHandleClick} type="button">Adicionar</button>
    </section>

  )
}

export default Button
