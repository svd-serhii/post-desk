import React, { useState } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";

const PostsList = () => {
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
			<NewPost
				onBodyChange={bodyChangeHandler}
				onAuthorChange={authorChangeHandler}
			/>
			<ul className={classes.posts}>
				<Post author={enteredAuthor} body={enteredBody} />
				<Post author={enteredAuthor} body={enteredBody} />
			</ul>
		</>
	);
};

export default PostsList;
