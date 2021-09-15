/*
Component used to read a single blog post.
*/

(function () {
  "use strict";

  angular.module("salesforce").component("blogPostDisplay", {
    templateUrl: "src/app/blog-post/display/blog-post-display.html",
    controllerAs: "vm",
    controller: blogPostDisplayCtrl,
  });

  blogPostDisplayCtrl.$inject = ["$stateParams", "BlogRestApi"];

  function blogPostDisplayCtrl($stateParams, BlogRestApi) {
    let vm = this;

    vm.$onInit = function () {
      let id = $stateParams.id;
      BlogRestApi.getById(id).then((post) => {
        vm.blogPost = post;
      });
    };
  }
})();
