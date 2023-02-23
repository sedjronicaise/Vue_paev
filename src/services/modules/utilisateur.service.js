
import ApiService from '@/services/configs/api.service'

const UsersService = {
  get(slug) {
    return ApiService.get("users", slug);
  },
 
  create(params) {
    return ApiService.post("users", params);
  },

  login(params) {
    return ApiService.post("login", params);
  },

  update(slug, params) {
    return ApiService.update("utilisateurs", slug, params);
  },

  destroy(slug) {
    return ApiService.delete(`users/${slug}`);
  },
 

  changePassword(params) {
    return ApiService.post("utilisateurs/updatePassword", params);
  },
  
};

  export default UsersService;
  