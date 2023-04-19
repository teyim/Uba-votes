import Portal from 'HOC/portal';

import { ModalContext } from 'context/modalContext';
import { useContext } from 'react';

function Modal() {
  const { isModalActive, modalContent } = useContext(ModalContext);
  if (!isModalActive) return null;
  return <Portal>{modalContent}</Portal>;
}

export default Modal;
