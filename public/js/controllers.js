// Controllers.

app.controller('productsCtrl', function($filter, $http) 
{
    var products = this;

    // Products list.

    $http.get('/products').success(function(response) 
    {
        products.list = response;
    });

    // Products categories.

    var allCategories = "Toda la tienda";

    products.categories = 
    [
        {"title":"all","description":allCategories},
        {"title":"damas","description":"Damas"},
        {"title":"caballeros","description":"Caballeros"},
        {"title":"niñas","description":"Niñas"},
        {"title":"niños","description":"Niños"},
    ];
    
    // Change filter products.

    products.nameFilter = allCategories;

    products.filter = function(element)
    {
        products.searchMaster = element == "all" ? "":element;
        products.nameFilter = (element == "all" ? allCategories:element);
    }

    // Search products.

    products.search = function()
    {
        products.searchMaster = products.searchInput;
    };

    // Products details.

    products.details = function(id)
    {
        products.quantity = 1;
        products.size = "CH";
        products.master = {};
        products.master = angular.copy(products.list);
        products.master = $filter('getById')(products.master, id);
    }

    // Sizes products.

    products.sizes = [{"name":"EXCH"},{"name":"CH"},{"name":"M"},{"name":"G"},{"name":"XG"},{"name":"EXXG"}];

    // Change size products.

    products.sizeName = "CH";

    products.changeSize = function(element)
    {
        products.sizeName = element;
    }

    // Add product to cart.

    products.countCart = 0;

    products.addCart = function(number)
    {
        products.countCart += number;
        $('#myModal').modal('hide');
    }

    // Show more products.

    products.numberProducts = 12;

    products.viewMore = function()
    {
        products.numberProducts *= 2;
    }
});