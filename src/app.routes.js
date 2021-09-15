(function () {
  "use strict";

  angular.module("salesforce", ["ui.router"]).config(RoutingConfig);

  RoutingConfig.$inject = ["$urlRouterProvider", "$stateProvider"];

  function RoutingConfig($urlRouterProvider, $stateProvider) {
    //By default we redirect to the home page
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state("home", {
        url: "/",
        component: "home",
      })

      .state("viewPost", {
        url: "/post/:id",
        component: "blogPostDisplay",
      })

      .state("adminPosts", {
        url: "/post/admin",
        component: "blogPostAdmin",
      })

      .state("editPost", {
        url: "/post/:id/edit",
        component: "blogPostCreateUpdate",
      })

      .state("createPost", {
        url: "/post/new",
        component: "blogPostCreateUpdate",
      });
  }
})();
