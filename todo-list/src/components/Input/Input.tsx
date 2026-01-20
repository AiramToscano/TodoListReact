
interface PropsInput {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}
function Input({value, setValue}: PropsInput) {


  return (
   
    <section >
        <input value={value} onChange={(e) => setValue(e.target.value) } name="MyInput" placeholder="Digite sua Tarefa.."/>
    </section>

  )
}

export default Input
