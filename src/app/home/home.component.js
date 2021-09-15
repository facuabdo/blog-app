/*
Main screen component 
*/

(function () {
  "use strict";

  angular.module("salesforce").component("home", {
    templateUrl: "src/app/home/home.html",
    controllerAs: "vm",
    controller: HomeCtrl,
  });

  HomeCtrl.$inject = ["BlogRestApi"];

  function HomeCtrl(BlogRestApi) {
    let vm = this;

    vm.$onInit = function () {
      BlogRestApi.getAll().then((posts) => {
        vm.firstPost = posts.splice(0, 1)[0];
        vm.blogPosts = posts;
      });
    };
  }
})();
