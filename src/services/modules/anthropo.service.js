
import ApiService from '@/services/configs/api.service'

const AnthropoService = {
  get(slug) {
    return ApiService.get("anthropo_data", slug);
  },
 
  create(params) {
    return ApiService.post("anthropo_data", params);
  },

  
  update(slug, params) {
    return ApiService.update("anthropo_data", slug, params);
  },

  destroy(slug) {
    return ApiService.delete(`anthropo_data/${slug}`);
  },
 

 
};

  export default AnthropoService;
  