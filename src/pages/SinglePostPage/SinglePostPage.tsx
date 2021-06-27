import { useEffect, useState } from "react";
import { Comment, Post, Like, User } from "../../types";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import SingleComment from "../../components/SingleComment/SingleComment";

interface Props {
    user: User;
    post?: Post;
    comments: Comment[];
    commentsLoading: boolean;
    commentsError: string;
    getComments: (postId: number) => void;
    yourLike: boolean;
    likesLoading: boolean;
    likesError: string;
    addComment: (comment: Comment) => void;
    like: (like: Like) => void;
    unlike: (like: Like) => void;
}

const SinglePost = ({
    user,
    post,
    comments,
    commentsLoading,
    commentsError,
    getComments,
    yourLike,
    like,
    unlike,
    likesLoading,
    likesError,
    addComment,
}: Props) => {
    const { postId } = useParams<{
        postId?: string;
    }>();

    let history = useHistory();

    const [commentText, setCommentText] = useState("");

    useEffect(() => {
        postId && getComments(parseInt(postId));
    }, [getComments, postId]);

    const handleGoBack = () => history.goBack();

    const handleSetCommentText = (e: React.ChangeEvent<HTMLInputElement>) =>
        setCommentText(e.target.value);

    const handleAddComment = () => {
        if (!post) {
            return;
        }

        addComment({
            postId: post.id,
            id: Math.random(),
            name: user.name,
            email: user.mail,
            body: commentText,
        });

        setCommentText("");
    };

    const handleToggleLike = (postId: number) => {
        const likeObj = {
            userId: user.id,
            postId: postId,
        };
        yourLike ? unlike(likeObj) : like(likeObj);
    };

    return (
        <div>
            {post && (
                <>
                    <div></div>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    {comments.map((current) => (
                        <SingleComment comment={current} key={current.id} />
                    ))}

                    {user.id ? (
                        <button onClick={() => handleToggleLike(post.id)}>
                            {yourLike ? "Unlike" : "Like"}
                        </button>
                    ) : (
                        <p>Log in to be able to like posts</p>
                    )}

                    {user.id ? (
                        <>
                            <input
                                type="text"
                                value={commentText}
                                onChange={(e) => handleSetCommentText(e)}
                            />
                            <button
                                onClick={handleAddComment}
                                disabled={!commentText.trim()}
                            >
                                Add comment
                            </button>
                        </>
                    ) : (
                        <p>Log in to be able to add comments</p>
                    )}
                </>
            )}
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default SinglePost;
