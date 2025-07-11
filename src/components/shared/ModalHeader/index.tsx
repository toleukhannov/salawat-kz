// libraries
import { type FC } from 'react';
// static
import CloseIcon from 'assets/icons/close-icon.svg?react';

type ModalHeaderProps = {
  title: string;
};

const ModalHeader: FC<ModalHeaderProps> = ({ title }: ModalHeaderProps) => {
  return (
    <div className="container modal-header">
      <h2 className="modal-header-title">{title}</h2>
      <button className="close-btn">
        <CloseIcon />
      </button>
    </div>
  );
};

export default ModalHeader;
