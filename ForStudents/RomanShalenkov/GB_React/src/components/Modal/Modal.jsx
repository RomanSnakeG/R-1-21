import React from 'react';
import './style.scss';
import Modal from '@material-ui/core/Modal';
import ListContact from '@conteiners/ListContact';


export default function SimpleModal( props ) {
    const [open, setOpen] = React.useState(false);
    

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div className="modal-wrap">
            <h2 id="simple-modal-title">Список контактов</h2>
            <ListContact addChat={ props.add }/>
        </div>
    );

    return (
        <div>
            <button type="button" onClick={handleOpen}>
                Add contact +
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
};
