import ApiUrl from '../Constants/ApiUrl';

class Api {
  getUrlPrefix() {
    if (process.env.REACT_APP_BASE_URL === 'production') {
      return ApiUrl.prod;
    }
    if (process.env.REACT_APP_BASE_URL === 'sit') {
      return ApiUrl.sit;
    }
    if (process.env.REACT_APP_BASE_URL === 'uat') {
      return ApiUrl.uat;
    }
    if (process.env.REACT_APP_BASE_URL === 'staging') {
      return ApiUrl.staging;
    }
    if (process.env.REACT_APP_BASE_URL === 'development') {
      return ApiUrl.dev;
    }
    if (process.env.REACT_APP_BASE_URL === 'demo') {
      return ApiUrl.demo;
    }
    if (process.env.REACT_APP_BASE_URL === 'local') {
      return ApiUrl.dev;
    }
  }
}

export default Api;
