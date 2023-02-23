
import ApiService from '@/services/configs/api.service'

const PraticienService = {
  get(slug) {
    return ApiService.get("doctors", slug);
  },
 
  create(params) {
    return ApiService.post("doctors", params);
  },

  
  update(slug, params) {
    return ApiService.update("doctors", slug, params);
  },

  destroy(slug) {
    return ApiService.delete(`doctors/${slug}`);
  },
 

 
};

  export default PraticienService;
  