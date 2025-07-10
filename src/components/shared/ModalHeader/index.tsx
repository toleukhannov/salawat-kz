// libraries
import { type FC } from 'react';
// static
import CloseIcon from 'assets/icons/close-icon.svg?react';

type ModalHeaderProps = {
  title: string;
  onClose?: () => void;
};

const ModalHeader: FC<ModalHeaderProps> = ({ title, onClose }) => {
  return (
    <div className="modal-header">
      <h2 className="modal-header-title">{title}</h2>
      <button className="close-btn" onClick={onClose}>
        <CloseIcon />
      </button>
    </div>
  );
};

export default ModalHeader;
