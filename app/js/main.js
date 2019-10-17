var frontEndTask = angular.module('musicPlay', []);

frontEndTask.controller('mainController', function($scope, $http, $sce, $window) {
    //$http.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw')
    $http.get('json/local_api.json')
    .success(function(data) {
        $scope.videos = data.items;
        $scope.videoID = data.items[0].snippet.resourceId.videoId;
    });
    
    $scope.getKey = function(item) {
        var dataKey = item.currentTarget.getAttribute("data-key");
        $scope.title = item.currentTarget.children[0].children[0].children[0].innerText;
        $scope.publishedOn = item.currentTarget.children[1].children[0].innerText;
        $scope.description = item.currentTarget.children[1].children[1].innerText;
        var mainVid = "<iframe width='600' height='300' src='https://www.youtube.com/embed/" + dataKey + "' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>";
        $scope.getMainVid = $sce.trustAsHtml(mainVid);
    }

    $scope.toTheTop = function() {
        $window.scrollTo(0, 0);
    }
});