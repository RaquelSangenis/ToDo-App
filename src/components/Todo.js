import { useState } from "react"

export default function Todo({item, onUpdate, onDelete}){

    const [isEdit, setIsEdit] = useState(false);
    const [completed, setCompleted] = useState(item.completed);

    function FormEdit (){

        const [newValue, setNewValue] = useState(item.title);

        function handleSubmit(e){
            e.preventDefault();
        }

        function handleChange(e){
            const value = e.target.value
            setNewValue(value);
        }

        function handleClick(){
            onUpdate(item.id, newValue);
            setIsEdit(false)
        }

        return <form className="todoUpdateForm" onSubmit={handleSubmit}>
                <input type="text" className="todoINout" onChange={handleChange} value={newValue}></input>
                <button className="button" onClick={handleClick}>Update</button>
            </form>
    }

    function handleCompleted(){
        setCompleted(!completed)
    }

    function TodoElement(){
        return  <div className="todoInfo">
                    <span onClick={handleCompleted} className={completed ? "todoTitle todoCompleted" : "todoTitle"} >{item.title}</span>                    
                    <button className="button" onClick={()=> 
                        setIsEdit(true)}>Edit</button> <button className="buttonDelete" onClick={(e)=> onDelete(item.id)}>Delete</button> 
                </div>
    }
    return( 
        <div className="todo">{isEdit ? <FormEdit/> : <TodoElement/>}
        </div>
    )
}