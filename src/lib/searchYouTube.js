import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: {q: query},
    contentType: 'application/json',
    success: callback
  });
};
/*var add = function(num, num2) {
  return num + num2
}
add(1,2)

setState(data, string, xhr) {
  videoList: data;
}

callback(dataFromServer, descriptionString, jqXHR)

*/
export default searchYouTube;

// success
// Type: Function( Anything data, String textStatus, jqXHR jqXHR )
// A function to be called if the request succeeds. The function gets passed three arguments: The data returned from the server, formatted according to the dataType parameter or the dataFilter callback function, if specified; a string describing the status; and the jqXHR (in jQuery 1.4.x, XMLHttpRequest) object. As of jQuery 1.5, the success setting can accept an array of functions. Each function will be called in turn. This is an Ajax Event.