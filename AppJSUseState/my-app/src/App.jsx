import React, { useState} from 'react';
import './style.css';
import Invoices from "./components/invoices";
import Modal from "./components/MODAL";
import CreateVoices from "./components/CreateInvoiceModal";
import TableBlock from "./components/table";

//Main component
function App() {
    const [modalActive,setModalActive] = useState(false)

    return (
        <div className="App">
            <Invoices/>
            <div className="AddAction">
                <p>Actions</p>
                <div>
                    <button className="ActionButton" onClick={() => setModalActive(true)}>Add new</button>
                    <div id="loading"/>
                </div>
            </div>
            <TableBlock/>
            <Modal active={modalActive} setActive={setModalActive}>
                <CreateVoices/>
            </Modal>
        </div>
    );
}


export default App
