import '../style.css';
import React, {useEffect, useState} from 'react';
import {FrontAPI} from "./API/API";
import ItemBlock from "./ItemTableBlock";
import {ObjectControlStyles} from "./API/Styles";

//Button to update data
const ButtonUpdate = ({update}) => (
    <button onClick={update} className="DataButtons">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
             className="bi bi-arrow-repeat" viewBox="0 0 16 16">
            <path
                d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
            <path
                d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
        </svg>
    </button>
)

//Main table component
const TableBlock = () => {
    const [state, setState] = useState([])

    //GET DATA in table
    const getData = async () => {
        await FrontAPI.getDataFunction().then(res => {
            if (!res) {
                ObjectControlStyles.ButtonDisabledFromServerError()
            } else {
                ObjectControlStyles.ButtonEnabledFromServer()
                if (Array.isArray(res?.data) && res?.data !== 0) {
                    console.log(res)
                    setState(res?.data)
                } else {
                    console.log(res?.data)
                }
            }
        })
    }

    useEffect(() => {
        getData()
    }, [])

      return (<>
        <div className="Action">
            <p>Invoices</p>
            <ButtonUpdate update={() => getData()}/>
            <span id="UpdateValidation">You should to editing all fields </span>
            <table width="100%" cellPadding="0" cellSpacing="0" border="0" className="MainTable">
                <thead>
                <tr className="Column1">
                    <th>Number</th>
                    <th>Create invoice</th>
                    <th>Supply invoice</th>
                    <th>Comment</th>
                </tr>
                </thead>
                <tbody>
                {state?.map((items, index) => <ItemBlock item={items} key={index}/>)}
                </tbody>
            </table>
            <hr/>
        </div>
    </>)

}

export default TableBlock
