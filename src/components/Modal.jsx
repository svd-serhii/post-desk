import { useNavigate } from "react-router-dom";
import React from "react";
import classes from "./Modal.module.css";

const Modal = ({ children }) => {
	const navigate = useNavigate();

	const handleModalClick = (e) => {
		e.stopPropagation();
	};

	function closeHandler() {
		navigate("..");
	}

	return (
		<>
			<div className={classes.backdrop} onClick={closeHandler}>
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
