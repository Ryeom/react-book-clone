import axios from "redux"

const client = axios.create()
/*
  글로벌 설정 예시:
  
  // API 주소를 다른 곳으로 사용함
  client.defaults.baseURL = 'https://external-api-server.com/' 

  // 헤더 설정
  client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';

  // 인터셉터 설정
  axios.intercepter.response.use(\
    response => {
      // 요청 성공 시 특정 작업 수행
      return response;
    }, 
    error => {
      // 요청 실패 시 특정 작업 수행
      return Promise.reject(error);
    }
  })  
*/

export default client
/*
이러한 axios 인스턴스를 만들어두고 사용하면 나중에 API 클라이언트에 공통된
설정을 쉽게 넣어줄 수 있다.
인스턴스를 만들지않으면 application에서 발생하는 모든 요청에 대해 설정하게 되므로
다른 API server를 사용할때 곤란한 경우가 생길수 있으니
애초에 첨에 만들때 이렇게 하는 거시 조으다

*/
