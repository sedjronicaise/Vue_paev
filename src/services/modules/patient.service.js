
import ApiService from '@/services/configs/api.service'

const PatientService = {
  get(slug) {
    return ApiService.get("patients", slug);
  },
 
  create(params) {
    return ApiService.post("patients", params);
  },

  

  update(slug, params) {
    return ApiService.update("patients", slug, params);
  },

  destroy(slug) {
    return ApiService.delete(`patients/${slug}`);
  },
 

 
};

  export default PatientService;
  