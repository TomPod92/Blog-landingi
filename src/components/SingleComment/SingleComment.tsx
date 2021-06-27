import { Comment } from "../../types";

interface Props {
    comment: Comment;
}

const SingleComment = ({ comment }: Props) => {
    return (
        <div>
            <p>{comment.body}</p>
            <p>{comment.email}</p>
        </div>
    );
};

export default SingleComment;
