import { post, get } from "./request";

export const getArticleList = () => {
  return get("/api/articles");
};
export const getArticleById = (params: any) => {
  return get("/api/article?article_id=" + params);
};

export const getTagList = () => {
  return get("/api/categories");
};

export const getGithubUser = (params: any) => {
  return post("/api/github/login", params);
};

export const register = (params: any) => {
  return post("/api/register/general", params);
};

export const login = (params: any) => {
  return post("/api/login/general", params);
};

export const updateLikeArticle = (params: any) => {
  return post("/api/like/update", params);
};

export const isLikeArticle = (params: any) => {
  return post("/api/like", params);
};
