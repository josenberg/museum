// That belongs to a museum
(function() {
    var app = angular.module('museum', []);
    
    /**
     * Controller that handle the load and beavior of the museum
     **/
    app.controller("MuseumController", ["$http", function($http) {
      this.paints = [];
      var museum = this;


      $http.get("/assets/library.json").then(function(rs) {
        museum.paints = rs.data.paints;
      })
    }])
})();
