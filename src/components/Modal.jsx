import React from "react";
import classes from "./Modal.module.css";

const Modal = ({ children, onClose }) => {
	const handleModalClick = (e) => {
		e.stopPropagation();
	};

	return (
		<>
			<div className={classes.backdrop} onClick={onClose}>
				<dialog
					open={true}
					className={classes.modal}
					onClick={handleModalClick}
				>
					{children}
				</dialog>
			</div>
		</>
	);
};

export default Modal;
