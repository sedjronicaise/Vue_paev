
import ApiService from '@/services/configs/api.service'

const ComposantService = {
  get(slug) {
    return ApiService.get("nutritional-components", slug);
  },
 
  create(params) {
    return ApiService.post("nutritional-components", params);
  },

  
  update(slug, params) {
    return ApiService.update("nutritional-components", slug, params);
  },

  destroy(slug) {
    return ApiService.delete(`nutritional-components/${slug}`);
  },
 

 
};

  export default ComposantService;
  