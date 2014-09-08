(function (){

    var app = angular.module("steve", []);
    app.controller('Products', function(){
        this.product = product;
    })

    var product = {
        name : "ABC",
        description : "My great product!"
    };

})();