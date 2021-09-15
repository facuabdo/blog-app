/*
This component is the core when it comes to managing the blog posts.
It renders a view from where posts can be created, edited and deleted
*/

(function () {
  "use strict";

  angular.module("salesforce").component("blogPostAdmin", {
    templateUrl: "src/app/blog-post/admin/blog-post-admin.html",
    controllerAs: "vm",
    controller: blogPostAdminCtrl,
  });

  blogPostAdminCtrl.$inject = ["$state", "BlogRestApi"];

  function blogPostAdminCtrl($state, BlogRestApi) {
    let vm = this;

    vm.newPost = newPost;
    vm.editPost = editPost;
    vm.deletePost = deletePost;
    vm.deleteAllPosts = deleteAllPosts;

    function newPost() {
      $state.go("createPost");
    }

    function editPost(post) {
      $state.go("editPost", { id: post.id });
    }

    function deletePost(post) {
      var deletePost = confirm("¿Are you sure you want to delete this post?");
      if (deletePost) {
        BlogRestApi.deletePost(post.id).then(() => {
          alert("Post deleted");
          loadPosts();
        });
      }
    }

    function deleteAllPosts() {
      if (vm.blogPosts.length > 0) {
        var deleteAll = confirm(
          "¿Are you sure you're doing this without beer on your desktop? Seriously, this can't be undone. Think twice before pressing OK."
        );

        if (deleteAll) {
          BlogRestApi.deleteAll().then(() => {
            alert("All posts have been deleted");
            loadPosts();
          });
        }
      } else {
        alert("There are no blog posts to delete!");
      }
    }

    vm.$onInit = function () {
      loadPosts();
    };

    function loadPosts() {
      BlogRestApi.getAll().then((posts) => {
        vm.blogPosts = posts;
      });
    }
  }
})();
