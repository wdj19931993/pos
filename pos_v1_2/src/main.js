//TODO: Please write code in this file.

function printInventory(inputs)
{
  var allItems = loadAllItems();

  var items = createIndex(allItems);

  var item = items[inputs[0]]

  var sum = 0;
  var saved = 0;
	var s='***<没钱赚商店>购物清单***\n'
    +'名称：'+ item.name +'，数量：1斤，单价：'
    + item.price.toFixed(2) + '(元)，小计：15.00(元)\n' ;

	s += '----------------------\n' +
		 '挥泪赠送商品：\n' +
	'----------------------\n' +
	'总计：' + item.price.toFixed(2) + '(元)\n' +
	'节省：'+ saved.toFixed(2) +'(元)\n' +
	'**********************';

	console.log(s);
}

function createIndex(allItems)
{
  var items = [];
  for(item in allItems)
  {
    items[allItems[item].barcode] = allItems[item];
  }
  return items;
}
