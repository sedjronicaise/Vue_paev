
import ApiService from '@/services/configs/api.service'

const BonService = {
  get(slug) {
    return ApiService.get("bons", slug);
  },
 
  create(params) {
    return ApiService.post("bons", params);
  },

  
  update(slug, params) {
    return ApiService.update("bons", slug, params);
  },

  destroy(slug) {
    return ApiService.delete(`bons/${slug}`);
  },
 

 
};

  export default BonService;
  