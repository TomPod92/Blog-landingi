import { Post } from "../../types";
import { Link } from "react-router-dom";
import { config } from "../../config";
import styles from "./styles.module.scss";

interface Props {
    post: Post;
}

const PostOverview = ({ post }: Props) => {
    return (
        <div className={styles["post-overview"]}>
            <div className={styles["post-overview__thumbnail"]}></div>
            <div className={styles["post-overview__details"]}>
                <p className={styles["post-overview__title"]}>{post.title}</p>

                <Link
                    to={`${config.routes.posts}/${post.id}`}
                    className={styles["post-overview__link"]}
                >
                    Read more
                </Link>
            </div>
        </div>
    );
};

export default PostOverview;
