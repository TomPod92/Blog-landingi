import { Comment } from "../../types";
import styles from "./styles.module.scss";

interface Props {
    comment: Comment;
}

const SingleComment = ({ comment }: Props) => {
    return (
        <div className={styles["single-comment"]}>
            <p className={styles["single-comment__body"]}>{comment.body}</p>
            <p className={styles["single-comment__author"]}>{comment.email}</p>
        </div>
    );
};

export default SingleComment;
