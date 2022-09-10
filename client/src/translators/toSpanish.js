const axios = require('axios').default;
const { v4: uuidv4 } = require('uuid');

var key = "4ee5efdb5e8544d6ad32876c50f4713a";
var endpoint = "https://api.cognitive.microsofttranslator.com";

// Add your location, also known as region. The default is global.
// This is required if using a Cognitive Services resource.
// var location = "YOUR_RESOURCE_LOCATION";

export const toSpanish = (text) => {

    axios({
        baseURL: endpoint,
        url: '/translate',
        method: 'post',
        headers: {
            'Ocp-Apim-Subscription-Key': key,
            'Content-type': 'application/json',
            'X-ClientTraceId': uuidv4().toString()
        },
        params: {
            'api-version': '3.0',
            'from': 'en',
            'to': 'es'
        },
        data: [{
            'text': 'I would really like to drive your car around the block a few times!'
        }],
        responseType: 'json'
    }).then(function(response){
        console.log(JSON.stringify(response.data, null, 4));
    })

}



