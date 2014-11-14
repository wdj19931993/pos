describe('pos', function () {
    var allItems;
    var inputs;

    beforeEach(function () {
        allItems = loadAllItems();
        inputs = [
            'ITEM000003',
            // 'ITEM000001',
            // 'ITEM000001',
            // 'ITEM000001',
            // 'ITEM000001',
            // 'ITEM000003-2',
            // 'ITEM000005',
            // 'ITEM000005',
            // 'ITEM000005'
        ];
    });

    it('should print correct text', function () {

        spyOn(console, 'log');

        printInventory(inputs);

        var expectText =
            '***<没钱赚商店>购物清单***\n' +
            '名称：荔枝，数量：1斤，单价：15.00(元)，小计：15.00(元)\n' +
            '----------------------\n' +
            '挥泪赠送商品：\n' +
            '----------------------\n' +
            '总计：15.00(元)\n' +
            '节省：0.00(元)\n' +
            '**********************';

          expect(console.log).toHaveBeenCalledWith(expectText);
    });
});
