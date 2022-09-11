// import { response } from '../../../server/app';

const axios = require('axios').default;
const { v4: uuidv4 } = require('uuid');

var key = "4ee5efdb5e8544d6ad32876c50f4713a";
var endpoint = "https://api.cognitive.microsofttranslator.com";

// Add your location, also known as region. The default is global.
// This is required if using a Cognitive Services resource.
// var location = "YOUR_RESOURCE_LOCATION";

// const axiosTest = async () {
//     try {
//       const {data:response} = await axios.get(url) //use data destructuring to get data from the promise object
//       return response
//     }
      
//     catch (error) {
//       console.log(error);
//     }
//   }

export const toCreole = async (text) => {
// 

try {
const {data:response} = await 
// Promise.resolve(
axios({
        baseURL: endpoint,
        url: '/translate',
        method: 'post',
        headers: {
            'Ocp-Apim-Subscription-Key': key,
            'Ocp-Apim-Subscription-Region': 'eastus',
            'Content-type': 'application/json',
            'X-ClientTraceId': uuidv4().toString()
        },
        params: {
            'api-version': '3.0',
            'from': 'en',
            'to': 'ht'
        },
        data: [{
            'text': `${text}`
        }],
        responseType: 'json'
    })
    // )
    console.log(response[0].translations[0].text, "&&&")
  return String(response[0].translations[0].text)
 }
    // .then(function(response){
    //     console.log(JSON.stringify(response.data, null, 4));
    //     console.log(response.data[0].translations[0].text, "TEXTFROMTRANSLATE");
    //     return response.data;
       
    // })
    // return Promise.resolve(translated)
    catch (error) {
        console.log(error);
      }
}