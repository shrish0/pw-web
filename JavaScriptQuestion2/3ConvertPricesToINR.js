const storeItems = {
    "item1": 10,
    "item2": 20,
    "item3": 30
};

const exchangeRate = 80;

const convertPricesToINR = (items, rate) => {
    const convertedItems = {};
    Object.keys(items).map(item => {
        convertedItems[item] = items[item] * rate;
    });
    return convertedItems;
};

const itemsInINR = convertPricesToINR(storeItems, exchangeRate);
console.log(itemsInINR);
