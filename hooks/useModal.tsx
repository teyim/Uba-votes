import { SetStateAction, useState } from 'react';

const useModal = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [modalContent, setModalContent] = useState<HTMLDivElement>();

  const handleModal = (content: HTMLDivElement) => {
    setIsModalActive(!isModalActive);
    if (content) {
      setModalContent(content);
    }
  };

  return { isModalActive, handleModal, modalContent };
};

export default useModal;
