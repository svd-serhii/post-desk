import React, { useState } from "react";
import classes from "./NewPost.module.css";

const NewPost = ({ onCancel, onAddPost }) => {
	const [enteredBody, setEnteredBody] = useState("");
	const [enteredAuthor, setEnteredAuthor] = useState("");

	function bodyChangeHandler(e) {
		setEnteredBody(e.target.value);
	}

	function authorChangeHandler(e) {
		setEnteredAuthor(e.target.value);
	}

	function submitHandler(e) {
		e.preventDefault();
		if (!enteredBody.trim() || !enteredAuthor.trim()) {
			console.error("Please fill in all fields.");
			return;
		}

		const postData = {
			body: enteredBody,
			author: enteredAuthor,
		};
		onAddPost(postData);
		onCancel();
	}

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<p>
				<label htmlFor="body">Text</label>
				<textarea id="body" required rows={3} onChange={bodyChangeHandler} />
			</p>

			<p>
				<label htmlFor="name">Your name</label>
				<input type="text" id="name" required onChange={authorChangeHandler} />
			</p>
			<p className={classes.actions}>
				<button type="button" onClick={onCancel}>
					Cancel
				</button>
				<button type="submit">Submit</button>
			</p>
		</form>
	);
};

export default NewPost;
