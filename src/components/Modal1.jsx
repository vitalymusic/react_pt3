import Modal from 'react-modal';

function Modal1(props) {
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



    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.closeModal}
            style={customStyles}
        >
            <h2>Hello</h2>
            <button onClick={props.closeModal}>close</button>
            <div>I am a modal</div>
            <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
            </form>
        </Modal>
    );
}

export default Modal1;

