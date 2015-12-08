APP.service('APIService', function($http) {
  var urlApi = "http://54.94.214.166:8090";
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