export interface User {
    id: string;
    mail: string;
    name: string;
}

export interface Post {
    id: number;
    userId: number;
    title: string;
}

export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export interface Like {
    postId: number;
    userId: string;
}
