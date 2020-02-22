import { post, get } from "./request";

export const getArticleList = () => {
  return get("/api/articles");
};
export const getArticleById = (params: any) => {
  return get("/api/article?article_id="+params);
};

export const getTagList = () => {
  return get("/api/categories");
};

export const getGithubUser = (params:any) => {
  return post("/api/github/login", params);
};

