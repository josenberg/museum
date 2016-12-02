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
        // load the gallery
        museum.paints = rs.data.paints;

        // generating a random number get a different paitings everyload
        var currentSelectedPaintIndex = Math.floor(Math.random() * (museum.paints.length));
        console.log("currentSelectedPaintIndex", currentSelectedPaintIndex)
        museum.currentSelectedPaint = museum.paints[currentSelectedPaintIndex];
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
