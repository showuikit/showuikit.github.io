APP.service('APIService', function($http) {
  var urlApi = "http://192.168.0.8";
  this.getKits = function(callback) {
    $http
      .get(urlApi + '/api/kits')
      .success(function(res) {
        callback(res);
      })
      .error(function (res){
        console.log(res);
      });
  };

});