import React, {useState} from 'react';
import './modal.css';
import {DataConstructor} from "./NoteObject/NoteDataConstructor";

//Reading data from inputs
const CreateVoices = () => {
    const [number, setNumber] = useState()
    const [date_created, setInvoice] = useState()
    const [date_supplied, setSupply] = useState()
    const [comment, setComment] = useState()

    return (<>
        <div className="modalInto">
            <p>Create invoice</p>
            <hr/>
            <div className="InputInformation" id="borders" >
                <div className="MainDivInputs">
               <div className="InputInformation_into">
                   <div>
                       <p id="Nums">Number:</p>
                       <input className="item1" type="text"   defaultValue="INV-"  onChange={e => setNumber(e.target.value)} />
                   </div>
                   <div>
                       <p id="Nums">Invoice Date:</p>
                       <input className="item2" type="date"  onChange={e => setInvoice(e.target.value)} />
                   </div>
                   <div>
                       <p id="Nums">Supply Date:</p>
                       <input className="item3" type="date"  onChange={e => setSupply(e.target.value)} />
                   </div>
               </div>
                    <div>
                        <p id="Nums">Comment:</p>
                        <input className="item4" type="text" onChange={e => setComment(e.target.value)} />
                    </div>
               </div>
                <div>
                    <button className="ButtonSave" id="btn" onClick={() =>DataConstructor.NoteObjectConstructor(number, date_created, date_supplied, comment)}>
                    Save
                    </button>
                </div>
            </div>
        </div>
    </>)
}

export default CreateVoices;