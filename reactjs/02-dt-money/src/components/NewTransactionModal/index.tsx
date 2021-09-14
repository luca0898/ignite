import Modal from "react-modal";
import { Container } from "./styles";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose: onRequestClone }: NewTransactionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClone}
        >
            <Container>
                <h2>Cadastrar Transação</h2>
            </Container>
        </Modal>
    )
}