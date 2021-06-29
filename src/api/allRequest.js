import {
  get,
  post,
  uploadPost,
  downLoadGet
} from "./requestFather";

//------------------公用接口
//检查公司是否存在
export const login = (params) =>
  post("/login/login", params);
