// components/PopupModal.tsx
import type React from 'react';

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const PopupModal: React.FC<PopupModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className=" absolute top-38 z-50 flex h-[72%] w-full items-center justify-center overflow-hidden rounded-lg border-[#7D2E2E] border-x-2 border-y-6 bg-gray-200 bg-opacity-50 shadow-lg sm:absolute sm:top-60 sm:h-[65%">
        <button
        type='button'
          onClick={onClose}
          className="absolute top-0 right-3 text-6xl text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>
        {children}
    </div>
  );
};

export default PopupModal;
