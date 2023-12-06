import React from "react";
import Post from "./Post";
import { useLoaderData } from "react-router-dom";
// import NewPost from "../routes/NewPost";
// import Modal from "./Modal";
import classes from "./PostsList.module.css";

const PostsList = () => {
	const posts = useLoaderData();

	function addPostHandler(postData) {
		setPosts((prevPosts) => [postData, ...prevPosts]);
	}

	return (
		<>
			{posts.length > 0 && (
				<ul className={classes.posts}>
					{posts.map((post) => (
						<Post
							key={post.id}
							id={post.id}
							author={post.author}
							body={post.body}
						/>
					))}
				</ul>
			)}

			{posts.length === 0 && (
				<div style={{ textAlign: "center", color: "white" }}>
					<h2>There are no posts yet</h2>
					<p>Start adding some!</p>
				</div>
			)}
		</>
	);
};

export default PostsList;
