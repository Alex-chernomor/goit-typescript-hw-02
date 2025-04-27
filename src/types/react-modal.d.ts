
declare module 'react-modal' {
    import { ComponentType, ReactNode } from 'react';
  
    interface ModalProps {
      isOpen: boolean;
      onRequestClose: () => void;
      className?: string;
      overlayClassName?: string;
      shouldCloseOnOverlayClick?: boolean;
      ariaHideApp?: boolean;
      onAfterOpen?: () => void;
      onAfterClose?: () => void;
      closeTimeoutMS?: number;
      onKeyDown?: (e: KeyboardEvent) => void; 
      children: ReactNode; 
    }
  
    const Modal: ComponentType<ModalProps>;
  
    export const setAppElement: (element: string) => void;
  
    export default Modal;
  }