import React, { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

const PostsList = (props) => {
	const [enteredBody, setEnteredBody] = useState("");
	const [enteredAuthor, setEnteredAuthor] = useState("");

	function bodyChangeHandler(e) {
		setEnteredBody(e.target.value);
	}

	function authorChangeHandler(e) {
		setEnteredAuthor(e.target.value);
	}

	return (
		<>
			{props.isPosting && (
				<Modal onClose={props.onStopPosting}>
					<NewPost
						onBodyChange={bodyChangeHandler}
						onAuthorChange={authorChangeHandler}
					/>
				</Modal>
			)}

			<ul className={classes.posts}>
				<Post author={enteredAuthor} body={enteredBody} />
				<Post author={enteredAuthor} body={enteredBody} />
			</ul>
		</>
	);
};

export default PostsList;
