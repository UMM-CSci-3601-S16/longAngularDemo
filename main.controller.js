angular.module("main").controller("mainController", function() {
    var self = this;
    self.text = "stuff";

    self.count=function(){
        return self.text.length;
    };
});