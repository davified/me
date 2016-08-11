'use strict'

angular.module('myApp.view1', ['ngRoute', 'ngMaterial'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    })
  }])
  .config(function ($mdIconProvider) {
    $mdIconProvider.iconSet('avatar', 'assets/svg/avatars.svg', 128)
  })

  .controller('View1Ctrl', function ($scope, $http) {
    this.tiles = buildGridModel({
      icon: 'avatar:svg-',
      title: 'Svg-',
      background: '',
      description: ['profile', 'skills', 'education', 'work', 'project-1', 'project-2', 'project-3', 'project-4', 'project-5', 'project-6', 'project-7']
    })

    function buildGridModel (tileTmpl) {
      var it, results = []

      for (var j = 0; j < 11; j++) {
        it = angular.extend({}, tileTmpl)
        it.icon = it.icon + (j + 1)
        it.title = it.title + (j + 1)
        it.span = { row: 1, col: 1 }

        switch (j + 1) {
          case 1:
            it.background = 'red'
            it.span.row = it.span.col = 2
            break

          case 2:
            it.background = 'green'
            break
          case 3:
            it.background = 'darkBlue'
            break
          case 4:
            it.background = 'blue'
            it.span.col = 2
            break

          case 5:
            it.background = 'yellow'
            it.span.row = it.span.col = 2
            break

          case 6:
            it.background = 'pink'
            break
          case 7:
            it.background = 'darkBlue'
            break
          case 8:
            it.background = 'purple'
            break
          case 9:
            it.background = 'deepBlue'
            break
          case 10:
            it.background = 'lightPurple'
            break
          case 11:
            it.background = 'yellow'
            break
        }

        results.push(it)
      }
      return results
    }

    $http.get('https://portfolio-12345.herokuapp.com').then(function successCallback(response) {
      $scope.portfolioOverview = response.data
      console.log($scope.portfolioOverview);
    }, function errorCallback(response) {
      console.log('get portfolio-12345.herokuapp.com/ error');
      })
  })
