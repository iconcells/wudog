$(function(){
	$(".js-addtocart").on("click",function(e){
		var cart_amount = $(".cart-value span").html();
		$(".cart-value span").html(++cart_amount);
	});

	$(".change-amount").on("input",function(e){
		var amount = $(this).val();
		var price = +$(this).next().html();
		var newtotal = amount * price;
		$(this).next().next().html(newtotal.toFixed(2));
		var totaltotal = 0;
		$(".total").each(function(){
			totaltotal += +$(this).html();
		});
		$(".total-total").html(totaltotal.toFixed(2));
	});
});

// filter
$(document).ready(function() {
  var $products = $('.grid-products'),
      $filters = $("#filters input[type='checkbox']"),
      product_filter = new ProductFilterLevel1($products, $filters);
  product_filter.init();
});

function ProductFilterLevel1(products, filters) {
  var _this = this;

  this.init = function() {
    this.products = products;
    this.filters = filters;
    this.bindEvents();
  };

  this.bindEvents = function() {
    this.filters.click(this.filterGridProducts);
    $('#none').click(this.removeAllFilters);
  };

  this.filterGridProducts = function() {
    _this.products.hide();
    var selectedFilters = _this.filters.filter(':checked');
    if (selectedFilters.length) {
      var selectedFiltersValues = [];
      selectedFilters.each(function() {
        var currentFilter = $(this);
        selectedFiltersValues.push("[data-" + currentFilter.attr('name') + "='" + currentFilter.val() + "']");
      });
      _this.products.filter(selectedFiltersValues.join(',')).show();
    } else {
      _this.products.show();
    }
  };

  this.removeAllFilters = function() {
    _this.filters.prop('checked', false);
    _this.products.show();
  }
}

// filter end