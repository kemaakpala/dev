angular.module("routerApp")
    .config(function ($stateProvider) {
        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "routes_template/home.html"
            })
            .state("login", {
                url: "/login",
                templateUrl: "routes_template/login.html"
            })
            .state("create", {
                url: "/create",
                templateUrl: "routes_template/create_user.html"
            })
            .state("showUsers", {
                url: "/showUsers",
                templateUrl: "routes_template/showUsers.html"
            })
            .state("myYoutube", {
                url: "/myYoutube",
                templateUrl: "routes_template/youtube_videos.html"
            })
            .state("myInstagram", {
                url: "/myInstagram",
                templateUrl: "routes_template/instagram_profile.html"
            })
            .state("otherwise", {
                url: "",
                templateUrl: "routes_template/home.html"
            })
    });