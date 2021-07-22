import React from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Getdata from '../Getdata/Getdata'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement(document.getElementById('root'));

function Modall(props) {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
            <div>
                <button onClick={openModal}>{props.name}</button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    // style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)} ><Getdata url = {props.url}/></h2>
                    <button onClick={closeModal}>close</button>
                </Modal>
            </div>
        </>
    )
}
export default Modall;