$(document).ready(function () {
    var itemList = {};
    var items = loadAllItems();

    if( localStorage.itemList != undefined )
    {
      itemList = JSON.parse(localStorage.itemList);
    }
    else
    {
      itemList.count = 0;
      itemList.list = {};
    }
    $("#count").text(itemList.count);

    var feature = (function () {
        var initItems = function () {

            _(items).each(function (item, index) {
                var addCart = '<button>加入购物车</button>';
                var listItem = $('<tr id="' + index + '">\
                            <td>' + item.name + '</td>\
                            <td>' + item.price + '</td>\
                            <td>' + item.unit + '</td>\
                            <td>' + addCart + '</td>\
                          </tr>');
                $('#item-table').append(listItem);
            });
        };

        var printDate = function() {
            $("#pay-date").text(utils.getDate());
        };


        return {
            init: initItems,
            printDate: printDate
        };
    })();


    feature.init();
    feature.printDate();
//*********************************************************
    $("button").click(function() {
      var id = $(this).parent().parent()[0].id;

      itemList.count++;

      if(itemList.list[id] == undefined)
        itemList.list[id] = 1;
      else
        itemList.list[id]++;

      localStorage.itemList = JSON.stringify(itemList);
      $("#count").text(itemList.count);
    });
//**********************************************************
    var sum = 0;
    for(index in itemList.list)
    {
      var item = items[parseInt(index)];
      var listItem = $('<tr>\
                  <td>' + item.name + '</td>\
                  <td>' + item.price.toFixed(2) + '</td>\
                  <td>' + item.unit + '</td>\
                  <td>' + itemList.list[index] + '</td>\
                  <td>' + (item.price * itemList.list[index]).toFixed(2) +'</td>\
                </tr>');
      $('#shopping-list').append(listItem);
      sum += item.price * itemList.list[index];
    }
    $('#summary').text(sum.toFixed(2));
//***************************************************************
});
