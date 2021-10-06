import http from "../http-common";

class UserDataService {
  getAll() {
    return http.get("/user");
  }

  get(id) {
    return http.get(`/user/${id}`);
  }

  create(data) {
    return http.post("/user/signup", data);
  }

  update(id, data) {
    return http.put(`/user/${id}`, data);
  }

  delete(id) {
    return http.delete(`/user/${id}`);
  }
/*
  deleteAll() {
    return http.delete(`/users`);
  }

  findByTitle(title) {
    return http.get(`/users?title=${title}`);
  }
  */
}

export default new UserDataService();