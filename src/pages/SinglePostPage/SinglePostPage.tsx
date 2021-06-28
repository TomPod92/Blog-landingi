import { useEffect, useState } from "react";
import { Comment, Post, Like, User } from "../../types";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import SingleComment from "../../components/SingleComment/SingleComment";
import styles from "./styles.module.scss";
import { ReactComponent as BackIcon } from "../../assets/icons/back.svg";
import { ReactComponent as LikeIcon } from "../../assets/icons/like.svg";
import { ReactComponent as UnlikeIcon } from "../../assets/icons/unlike.svg";

interface Props {
    user: User;
    post?: Post;
    postLoading: boolean;
    postError: string;
    comments: Comment[];
    commentsLoading: boolean;
    commentsError: string;
    getSinglePost: (postId: number) => void;
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
    postLoading,
    postError,
    comments,
    commentsLoading,
    commentsError,
    getSinglePost,
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

    useEffect(() => {
        postId && getSinglePost(parseInt(postId));
    }, [getSinglePost, postId]);

    const handleGoBack = () => history.goBack();

    const handleSetCommentText = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
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

    if (postLoading) {
        return (
            <div className={styles["single-post-page"]}>
                <p className={styles["single-post-page__loading"]}>
                    Loading...
                </p>
            </div>
        );
    }

    return (
        <div className={styles["single-post-page"]}>
            {post && (
                <>
                    <div className={styles["single-post-page__photo"]}>
                        {user.id ? (
                            <button
                                className={
                                    styles["single-post-page__like-button"]
                                }
                                onClick={() => handleToggleLike(post.id)}
                            >
                                {yourLike ? (
                                    <>
                                        <UnlikeIcon /> Unlike
                                    </>
                                ) : (
                                    <>
                                        <LikeIcon /> Like
                                    </>
                                )}
                            </button>
                        ) : (
                            <p
                                className={
                                    styles["single-post-page__like-text"]
                                }
                            >
                                Log in to be able to like posts
                            </p>
                        )}
                    </div>

                    <h2 className={styles["single-post-page__title"]}>
                        {post.title}
                    </h2>

                    <p className={styles["single-post-page__body"]}>
                        {post.body}
                    </p>

                    {comments.length > 0 && (
                        <h3
                            className={
                                styles["single-post-page__comments-title"]
                            }
                        >
                            Comments:
                        </h3>
                    )}

                    <div className={styles["single-post-page__comments-list"]}>
                        {comments.map((current) => (
                            <SingleComment comment={current} key={current.id} />
                        ))}
                    </div>

                    {user.id ? (
                        <div
                            className={
                                styles["single-post-page__add-comment-form"]
                            }
                        >
                            <textarea
                                value={commentText}
                                onChange={(e) => handleSetCommentText(e)}
                            />
                            <button
                                onClick={handleAddComment}
                                disabled={!commentText.trim()}
                            >
                                Add comment
                            </button>
                        </div>
                    ) : (
                        <p
                            className={
                                styles["single-post-page__add-comment-text"]
                            }
                        >
                            Log in to be able to add comments
                        </p>
                    )}
                </>
            )}
            <button
                className={styles["single-post-page__go-back-button"]}
                onClick={handleGoBack}
            >
                <BackIcon />
                Go back
            </button>
        </div>
    );
};

export default SinglePost;
