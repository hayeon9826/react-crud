// interface 타입 정의
export interface Post {
  id?: number;
  user: string;
  title: string;
  body: string;
  date: string;
}

export interface Form {
  id?: number;
  user: string;
  title: string;
  body: string;
  date: string;
}

export interface updatePostProps {
  id: number;
  post: Post;
}

export interface buttonProps {
  buttonText: string;
}
