
import ApiService from '@/services/configs/api.service'

const HistoriquePatientService = {
  get(slug) {
    return ApiService.get("histories", slug);
  },
 
  create(params) {
    return ApiService.post("histories", params);
  },

  
  update(slug, params) {
    return ApiService.update("histories", slug, params);
  },

  destroy(slug) {
    return ApiService.delete(`histories/${slug}`);
  },
 

 
};

  export default HistoriquePatientService;
  