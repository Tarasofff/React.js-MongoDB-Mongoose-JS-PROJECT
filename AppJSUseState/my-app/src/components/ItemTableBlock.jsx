import '../style.css';
import React, {useState} from 'react';
import {FrontAPI} from "./API/API";
import {DataConstructor} from "./NoteObject/NoteDataConstructor";

//Button to delete data
const Trash = ({props}) => (
    <button className="DataButtons" id="deleteButton"
            onClick={() => FrontAPI.deleteDataFunction(props)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-archive"
             viewBox="0 0 16 16">
            <path
                d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
        </svg>
    </button>
)

//Button to editing data
const Edit = ({props, current}) => {
    const updateFunction = (props, current) => {
        const {updateNumber, updateDateCreated, updateDateSupplied, updateComment} = props
        DataConstructor.NoteUpdateConstructor(updateNumber, updateDateCreated, updateDateSupplied, updateComment, current)
    }
    return (
        <button className="DataButtons tooltip" id="updateButton"
                onClick={() => updateFunction(props, current)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-pencil-square" viewBox="0 0 16 16">
                <path
                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>
        </button>
    )
}

//TD table component
const ItemBlock = ({item}) => {
    const [updateNumber, setUpdateNumber] = useState()
    const [updateDateCreated, setUpdateDateCreated] = useState()
    const [updateDateSupplied, setUpdateDateSupplied] = useState()
    const [updateComment, setUpdateComment] = useState()

    return (
        <>
            <Trash props={item}/>
            <Edit props={{updateNumber, updateDateCreated, updateDateSupplied, updateComment}} current={item}/>
            <tr className="Column2" id="InputTable">
                <td>
                    <input defaultValue={item?.data._number}
                           onChange={e => setUpdateNumber(e.target.value)}
                    />
                </td>
                <td>
                    <input defaultValue={item?.data._date_created}
                           onChange={e => setUpdateDateCreated(e.target.value)}
                    />
                </td>
                <td>
                    <input defaultValue={item?.data._date_supplied}
                           onChange={e => setUpdateDateSupplied(e.target.value)}
                    />
                </td>
                <td>
                    <input defaultValue={item?.data._comment}
                           onChange={e => setUpdateComment(e.target.value)}
                    />
                </td>
            </tr>
        </>
    )
}

export default ItemBlock