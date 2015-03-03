"use strict";

// Make sure to include the `ui.router` module as a dependency
var app = angular.module("Camaro", ["ui.router"]).run(["$rootScope", "$state", "$stateParams", function ($rootScope, $state, $stateParams) {

  // It's very handy to add references to $state and $stateParams to the $rootScope
  // so that you can access them from any scope within your applications.For example,
  // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
  // to active whenever 'contacts.list' or one of its decendents is active.
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.$on("$stateNotFound", function (event, unfoundState, fromState, fromParams) {
    console.log(unfoundState.to); // "lazy.state"
    console.log(unfoundState.toParams); // {a:1, b:2}
    console.log(unfoundState.options); // {inherit:false} + default options
  });
  $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
    $("#ui-view").html("");
    $(".page-loading").removeClass("hidden");
  });
  $rootScope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {
    $(".page-loading").addClass("hidden");
  });
}]).config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
  $urlRouterProvider.otherwise("/");

  $stateProvider.state("root", {
    url: "/",
    views: {
      navigation: {
        templateUrl: "client/app/navigation/navigation.html",
        controller: "navCtrl as navCtrl"
      }
      // 'footer': {
      //   templateUrl: 'client/app/vehicles/vehicles.html'
      // }
    }
  });
}]);
"use strict";

angular.module("Camaro").controller("headerCtrl", function () {
  console.log("headerCtrl loaded");
});
"use strict";

angular.module("Camaro").controller("navCtrl", function () {
  console.log("navCtrl loaded");
});
"use strict";

angular.module("Camaro").service("Auth", function ($http) {
  var AuthClass = function AuthClass() {
    this.isAuthed = function () {
      return new Promise(function (resolve, reject) {
        resolve("yay");
      });
    };
  };

  var Auth = new AuthClass();

  return Auth;
});
"use strict";

angular.module("Camaro").controller("protectedCtrl", function () {
  console.log("protectedCtrl loaded");
});
"use strict";

angular.module("Camaro").config(["$stateProvider", function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider.state("root.protected", {
    url: "/protected",
    views: {
      "container@": {
        templateUrl: "client/app/protected/protected.html",
        controller: "protectedCtrl"
      }
    },
    resolve: {
      service: "Secrets",
      getSecrets: function getSecrets(service) {
        return service.getSecrets();
      }
    }
  });
}]);
"use strict";

angular.module("Camaro").service("Secrets", function ($http) {
  var SecretClass = function SecretClass() {
    this.getSecrets = function () {
      return $http.get("/api/secrets");
    };
  };

  var Secrets = new SecretClass();

  return Secrets;
});
"use strict";

angular.module("Camaro").controller("vehiclesController", function () {
  console.log("controller loaded");
});
//# sourceMappingURL=all.js.map