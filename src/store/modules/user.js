import {
  login,
  loginOut
} from "@/api/allRequest";
import router from "../../router/index";
import {
  getToken,
  setToken,
  removeToken,
  setUser,
  removeUser,
} from "@/utils/auth";

const getDefaultState = () => {
  return {};
};

const state = getDefaultState();

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState());
  },
  // SET_TOKEN: (state, token) => {
  //   state.token = token;
  // },
  // SET_USERINFO: (state, userInfo) => {
  //   state.userInfo = userInfo;
  // },
};

const actions = {
  // 登陆
  login({
    commit
  }, {
    userName,
    passward
  }) {
    console.log(userName, passward)
    return new Promise((resolve, reject) => {
      /*   login(userName,passward).then((response) => {
            if (response.code == 200) {
              if (response.data.status == "login") {
                const token = response.data.token;
                setToken(token);
                setUser(response.data.userName);
              }
              resolve(response);
            } else {
              resolve(response);
            }
          })
          .catch((error) => {
            reject(error);
          }); */
      const token = '232131231';
      setToken(token);
      setUser('用户1');
      resolve(token);
    });
  },

  // 退出登陆
  logout({
    commit,
    state
  }) {
    return new Promise((resolve, reject) => {
      /* loginOut()
        .then((res) => {
          removeToken();
          removeUser();
          location.href = res.data.logout_url;
          resolve();
        })
        .catch((error) => {
          reject(error);
        }); */
      removeToken();
      removeUser();
      router.push('/login');
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};