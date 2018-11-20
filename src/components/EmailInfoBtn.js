// IMPORTS PADRÕES/COMPONENTES
import React from 'react';
import EmailInfo from '../components/EmailInfo';
import Modal from 'react-modal';
// IMPORTS CSS
import '../style/components_css/Email.css';
// IMPORTS PARA ICONES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuestionCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
library.add(faQuestionCircle, faTimesCircle);

const style = {
    marginLeft: '-4px',
}
 
const styleOpenInfo = {
    content: {
        width: '430px',
        height: '74px',
        overflow: 'hidden',
        position: 'fixed',
        left: '50%',
        top: '50%',
        marginTop: '-37px',
        marginLeft: '-215px',
    }
}

export default class EmailInfoBtn extends React.Component {
    constructor() {
        super();
        this.toggleModal = this.toggleModal.bind(this);
        this.state = { modalOpened: false };
    }

    toggleModal() {
        this.setState(prevState => ({ modalOpened: !prevState.modalOpened }));
    }

    render() {
        return (
            <div>
                <p className="btn_question" style={style} onClick={this.toggleModal} title="Clique para mais informações">
                    <FontAwesomeIcon icon="question-circle"/>
                </p>
                <Modal
                    style={styleOpenInfo}
                    isOpen={this.state.modalOpened}
                    onRequestClose={this.toggleModal}
                    contentLabel="Modal with image">
                <EmailInfo 
                    cliente="Teste" 
                    assunto="Teste" 
                    visualizado={true} 
                    nomeDstn="Teste" 
                    emailDstn="teste@teste.com" />
                <span className="close_info" onClick={this.toggleModal}>
                    <FontAwesomeIcon icon="times-circle" color="red" />
                </span>
                </Modal>
            </div>
        );
    }
}

