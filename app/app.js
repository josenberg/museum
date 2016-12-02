// That belongs to a museum
(function() {
    var app = angular.module('museum', []);

    /**
     * Controller that handle the load and beavior of the museum
     **/
    app.controller("MuseumController", ["$http", function($http) {
      this.paints = [];
      this.currentSelectedPaint = {};

      var museum = this;

      $http.get("/assets/library.json").then(function(rs) {
        museum.paints = rs.data.paints;
        museum.currentSelectedPaint = museum.paints[0];
      });

      this.setCurrent = function(paint) {
        console.log("paint")
        this.currentSelectedPaint = paint;
      };

    }])
})();
