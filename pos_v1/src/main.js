//TODO: Please write code in this file.
var goods = {				//information of all the goods
   'ITEM000001':{
      barcode: 'ITEM000001',
      name: '雪碧',
      unit: '瓶',
      price: 3.00
   },
   'ITEM000003':{
      barcode: 'ITEM000003',
      name: '荔枝',
      unit: '斤',
      price: 15.00
   },
   'ITEM000005':{
      barcode: 'ITEM000005',
      name: '方便面',
      unit: '袋',
      price: 4.50
   }
}

function printInventory(rawList)		//print the log
{
	var normalizedList = normalizeList(rawList)

	var s='***<没钱赚商店>购物清单***\n'
	var saved = 0, sum = 0
	var savedGoods = []

	for (var good in normalizedList)		//add the print list
	{
		s += '名称：' + goods[good].name + '，'
		s += '数量：' + normalizedList[good] + goods[good].unit + '，'
		s += '单价：' + goods[good].price.toFixed(2) + '(元)，'
		s += '小计：'
		if(normalizedList[good] > 2)
		{
			sum += ( normalizedList[good] - 1 ) * goods[good].price
			s += (( normalizedList[good] - 1 ) * goods[good].price).toFixed(2)
			saved += goods[good].price
			savedGoods.push( goods[good] )
		}
		else
		{
			sum += normalizedList[good] * goods[good].price
			s += (normalizedList[good] * goods[good].price).toFixed(2)
		}
		s+='(元)\n'
	}

	s += '----------------------\n' +
		 '挥泪赠送商品：\n' 

	for(var savedGood in savedGoods)		//add the saved list
	{
		s += '名称：' + savedGoods[savedGood].name + '，'
		s += '数量：' + '1' + savedGoods[savedGood].unit + '\n'
	}

	s += 
	'----------------------\n' +
	'总计：' + sum.toFixed(2) + '(元)\n' +
	'节省：'+ saved.toFixed(2) +'(元)\n' +
	'**********************';

	console.log(s);
}

function normalizeList(rawList)	//normalize the raw list to normalized list
{								//example: ITEM000003-2 to ITEM000003:2
	var normalizedList = {};
	
	for(var i in rawList)
	{
		var barcode = rawList[i].split('-')[0]
		if(isNaN(normalizedList[barcode]))
			normalizedList[barcode]=0;

		if(rawList[i].split('-').length!=1)
			normalizedList[barcode]+=parseInt(rawList[i].split('-')[1]);
		else 
			normalizedList[barcode]++;
	}
	return normalizedList;
}
