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
        museum.currentSelectedPaint.description = $sce.trustAsHtml(museum.currentSelectedPaint.description)
      });

      this.setCurrent = function(paint) {

        this.currentSelectedPaint = paint;
        $("html, body").animate({
           scrollTop: 0
       }, 300);
      };

    }]);



    app.filter("trust", ['$sce', function($sce) {
      return function(htmlCode){
        return $sce.trustAsHtml(htmlCode);
      }
    }]);

})();
