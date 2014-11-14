//TODO: Please write code in this file.
function printInventory(inputs)
{
  var allItems = loadAllItems();

  var indexedItems = createIndex(allItems);

  var itemList = new ItemList(inputs, indexedItems);

	var s='***<没钱赚商店>购物清单***\n'
  s += itemList.printDetails();
	s += '----------------------\n' +
		 '挥泪赠送商品：\n' +
	'----------------------\n' +
	'总计：' + itemList.getSum().toFixed(2) + '(元)\n' +
	'节省：' + itemList.saved.toFixed(2) + '(元)\n' +
	'**********************';

	console.log(s);
}


function ItemList(inputs, indexedItems)
{
  this.sum = 0;
  this.saved = 0;
  this.itemList = normalizeList(inputs, indexedItems);
  this.getSum = function(){return this.sum;}
  this.getSaved = function(){return this.saved;}
  this.printDetails = function()
  {
    var s = '';
    for(index in this.itemList)
    {
      s += '名称：'+ this.itemList[index].name
      + '，数量：' + this.itemList[index].count + this.itemList[index].unit
      + '，单价：' + this.itemList[index].price.toFixed(2) + '(元)'
      + '，小计：' + (this.itemList[index].price * this.itemList[index].count).toFixed(2) + '(元)\n' ;
      this.sum += this.itemList[index].price * this.itemList[index].count;
    }
    return s;
  }
}


function createIndex(allItems)
{
  var items = {};
  for(item in allItems)
  {
    items[allItems[item].barcode] = allItems[item];
  }
  return items;
}

function normalizeList(rawList, items)
{
	var normalizedList = {};

	for(i in rawList)
	{
    var mark = '-'
    var listSplits = rawList[i].split(mark);
		var barcode = listSplits[0];

		if( normalizedList[barcode] == undefined )
    {
        normalizedList[barcode] = items[barcode];
        normalizedList[barcode].count = 0;
    }

		normalizedList[barcode].count += (listSplits.length!=1) ? parseInt(listSplits[1]) : 1;
	}
	return normalizedList;
}
