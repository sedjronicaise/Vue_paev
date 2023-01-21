
import ApiService from '@/services/configs/api.service'

const UsersService = {
  get(slug) {
    return ApiService.get("utilisateurs/index", slug);
  },
 
  create(params) {
    return ApiService.post("utilisateurs/store", params);
  },

  login(params) {
    return ApiService.post("utilisateurs/store", params);
  },

  update(slug, params) {
    return ApiService.update("utilisateurs", slug, params);
  },

  destroy(slug) {
    return ApiService.delete(`utilisateurs/${slug}`);
  },
 

  changePassword(params) {
    return ApiService.post("utilisateurs/updatePassword", params);
  },
  
};

  export default UsersService;
  