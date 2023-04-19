import React, { ReactElement, ReactNode, useState } from 'react';
import Modal from '@components/Layout/modal/modal';

interface IModalContext {
  isModalActive: boolean;
  handleModal: (content?: ReactNode) => void;
  modalContent: ReactNode;
}

type ModalProviderProps = {
  children: ReactNode;
};

const ModalContext = React.createContext<IModalContext>({} as IModalContext);

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>();

  const handleModal = (content: ReactNode) => {
    setIsModalActive(!isModalActive);
    if (content) {
      setModalContent(content);
    }
  };

  return (
    <ModalContext.Provider value={{ isModalActive, handleModal, modalContent }}>
      <Modal />
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
