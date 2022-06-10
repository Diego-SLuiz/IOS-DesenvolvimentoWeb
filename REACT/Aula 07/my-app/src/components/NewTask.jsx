import { FaPlusCircle } from "react-icons/fa";
import { useState } from "react";
import CreateTask from "./CreateTask";

function NewTask ( { onCreate } )
{
    const [ displayModal, setDisplayModel ] = useState( false )

    function openModal ()
    {
        setDisplayModel( true )
    }

    function closeModal ()
    {
        setDisplayModel( false )
    }

    let addIcon = <FaPlusCircle size={32} color="#3489eb"/>;

    return (
        <div>
            <span onClick={ openModal } className="button-title header-button">{addIcon} Criar Tarefa</span>
            { displayModal ? <CreateTask onCreate={ onCreate } onClose={ closeModal }/> : null }
        </div>
    )
}

export default NewTask;