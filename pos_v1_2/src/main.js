//TODO: Please write code in this file.

function printInventory()
{
  var sum = 0;
  var saved = 0;
	var s='***<没钱赚商店>购物清单***\n'

	s += '----------------------\n' +
		 '挥泪赠送商品：\n' +
	'----------------------\n' +
	'总计：' + sum.toFixed(2) + '(元)\n' +
	'节省：'+ saved.toFixed(2) +'(元)\n' +
	'**********************';

	console.log(s);
}
