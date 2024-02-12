class FashionRetailInventory{
    constructor(storehouse, location) {
        this.storehouse = storehouse;
        this.location = location;
        this.productStock = [];
    }

    addProduct(productName, size, qty, price) {
        const data = this.productStock.find(p => p.productName == productName && p.size == size);

        if (!data) {
        this.productStock.push({
            productName,
            size,
            qty: Number(qty),
            price: Number(price)
                                })
        return `The product ${productName}, size ${size} was successfully added to the inventory`;                      
        } else {
        this.productStock[qty] += qty;
        return `You added ${qty} more pieces of product ${productName} size ${size}`
        }
    }

    sendProduct(productName, size) {
        const productIndex = this.productStock.findIndex(p => p.productName === productName && p.size === size);

        if (productIndex !== -1) {
            this.productStock.splice(productIndex, 1);
            return `The product ${productName}, size ${size} was successfully removed from the inventory`;
        } else {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
        }

    }

    findProductsBySize(size) {
        const matchingProducts = this.productStock.filter(product => product.size === size);
    
        if (matchingProducts.length > 0) {
            const productList = matchingProducts.map(product => `${product.productName}-${product.qty} pieces`).join(', ');
            return productList;
        } else {
            return 'There are no products available in that size';
        }
    }

    listProducts() {
        if (this.productStock.length == 0) {
            return `${this.storehouse} storehouse is empty`;
        } else {
            const arrToBeSorted = this.productStock.sort((a, b) => a.productName.localeCompare(b.productName));
            let result = `${this.storehouse} storehouse in ${this.location} available products:\n`;
            return result += arrToBeSorted
            .map(item => `${item.productName}/Size:${item.size}/Quantity:${item.qty}/Price:${item.price}$`)
            .join('\n')
        }
    }
}
