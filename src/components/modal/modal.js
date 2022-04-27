import React, { useRef, useEffect, useCallback } from 'react';

import Button from '../button';

import {
	Background,
	ModalWrapper,
	ModalContent
} from './style';

export const Modal = ({ showModal, setShowModal, children }) => {
	const modalRef = useRef();

	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			setShowModal(false);
		}
	};

	const keyPress = useCallback(
		(e) => {
			if (e.key === 'Escape' && showModal) {
				setShowModal(false);
			}
		},
		[setShowModal, showModal]
	);

	useEffect(() => {
		showModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
	},[showModal]);

	useEffect(() => {
		document.addEventListener('keydown', keyPress);
		return () => document.removeEventListener('keydown', keyPress);
	}, [keyPress]);

	return (
		<>
			{showModal ? (
				<Background onClick={closeModal}>
					<ModalWrapper showModal={showModal} ref={modalRef}>
						<ModalContent>
							{children}
							<div>
								<Button styleColor={'primary'} onClick={() => setShowModal((prev) => !prev)}>x</Button>
							</div>
						</ModalContent>
					</ModalWrapper>
				</Background>
			) : null}
		</>
	);
};