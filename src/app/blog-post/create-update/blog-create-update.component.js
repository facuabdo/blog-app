/*
This component renders the create/update form for blog posts.
*/

(function () {
  "use strict";

  angular.module("salesforce").component("blogPostCreateUpdate", {
    templateUrl: "src/app/blog-post/create-update/blog-create-update.html",
    controllerAs: "vm",
    controller: blogPostCreateUpdateCtrl,
  });

  blogPostCreateUpdateCtrl.$inject = ["$state", "$stateParams", "BlogRestApi"];

  function blogPostCreateUpdateCtrl($state, $stateParams, BlogRestApi) {
    let vm = this;

    vm.createOrUpdatePost = createOrUpdatePost;
    vm.cancel = cancel;

    function createOrUpdatePost(blogPost) {
      if (vm.createMode) {
        BlogRestApi.create(blogPost)
          .then(() => {
            alert("Blog post created successfully!");
            $state.go("adminPosts");
          })
          .catch(() => {
            alert("Hubo un error al crear el post");
          });
      } else {
        BlogRestApi.update(blogPost)
          .then(() => {
            alert("Blog post updated successfully!");
            $state.go("adminPosts");
          })
          .catch(() => {
            alert("Hubo un error al actualizar el post");
          });
      }
    }

    function cancel() {
      $state.go("adminPosts");
    }

    vm.$onInit = function () {
      vm.createMode = true;

      vm.blogPost = {
        title: "",
        text: "",
      };

      if ($stateParams.id) {
        vm.createMode = false;
        BlogRestApi.getById($stateParams.id).then((post) => {
          vm.blogPost = post;
        });
      }
    };
  }
})();
