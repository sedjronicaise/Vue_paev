
import ApiService from '@/services/configs/api.service'

const CertificateService = {
  get(slug) {
    return ApiService.get("certificates", slug);
  },
 
  create(params) {
    return ApiService.post("certificates", params);
  },

  
  update(slug, params) {
    return ApiService.update("certificates", slug, params);
  },

  destroy(slug) {
    return ApiService.delete(`certificates/${slug}`);
  },
 

 
};

  export default CertificateService;
  