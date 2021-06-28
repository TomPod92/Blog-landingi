import { useEffect } from "react";
import { Post } from "../../types";
import PostOverview from "../../components/PostOverview/PostOverview";
import styles from "./styles.module.scss";

interface Props {
    posts: Post[];
    loading: boolean;
    error: string;
    getPosts: () => void;
}

const PostsListPage = ({ posts, loading, error, getPosts }: Props) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);

    return (
        <div className={styles["posts-list-page"]}>
            {loading ? (
                <div className={styles["posts-list-page__loading"]}>
                    Loading...
                </div>
            ) : (
                <ul className={styles["posts-list-page__list"]}>
                    {posts.map((current) => (
                        <PostOverview post={current} key={current.id} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PostsListPage;
