import { useState } from "react";

export default function Todo({ item, onUpdate, onDelete}) {
  const [isEdit, setIsEdit] = useState(false);

  function FormEdit() {
    const [newValue, setNewValue] = useState(item.title);

    function handleSubmit(e) {
      e.preventDefault();
    }

    function handleChange(e) {
      const value = e.target.value;
      setNewValue(value);
    }

    function handleClick(){
        onUpdate( item.id, newValue);
        setIsEdit(false)
    }
    return (
      <form onSubmit={handleSubmit} className="todoUpdateForm">
        <input
          onChange={handleChange}
          type="text"
          className="todoInput"
          value={newValue}
        />
        <button onClick={handleClick} className="button">Update</button>
      </form>
    );
  }
  function TodoELement() {
    return (
      <div className="todoInfo">
        <span className="todoTitle">
            {item.title}
        </span>
        <button className="button" onClick={() => setIsEdit(true)}>Edit</button>
        <button className="buttonDelete" onClick={() => onDelete(item.id)}>Delete</button>
      </div>
    );
  }
  return <div className="todo">{isEdit ? <FormEdit /> : <TodoELement />}</div>;
}
