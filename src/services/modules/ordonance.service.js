
import ApiService from '@/services/configs/api.service'

const OrdonanceService = {
  get(slug) {
    return ApiService.get("ordonnances", slug);
  },
 
  create(params) {
    return ApiService.post("ordonnances", params);
  },

  
  update(slug, params) {
    return ApiService.update("ordonnances", slug, params);
  },

  destroy(slug) {
    return ApiService.delete(`ordonnances/${slug}`);
  },
 

 
};

  export default OrdonanceService;
  