
import ApiService from '@/services/configs/api.service'

const MenusService = {
  get(slug) {
    return ApiService.get("menus", slug);
  },
 
  create(params) {
    return ApiService.post("menus", params);
  },

  
  update(slug, params) {
    return ApiService.update("menus", slug, params);
  },

  destroy(slug) {
    return ApiService.delete(`menus/${slug}`);
  },
 

 
};

  export default MenusService;
  