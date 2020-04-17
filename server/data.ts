import * as faker from 'faker';
import {Product, Order} from "./types";

let products:Product[] = [];
const categories:string[] = ["Watersports", "Soccer", "Chess"];
faker.seed(100);
for (let i = 1; i <= 503; i++) {
    const category = faker.helpers.randomize(categories);
    products.push({
        id: i,
        name: faker.commerce.productName(),
        category: category,
        description: `${category}: ${faker.lorem.sentence(3)}`,
        price: Number(faker.commerce.price())
    })
}

const orders:Order[] = [];
for (let i = 1; i <= 103; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const order:Order = {
        id: i,
        name: `${firstName} ${lastName}`,
        email: faker.internet.email(firstName, lastName),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        zip: faker.address.zipCode(),
        country: faker.address.country(),
        products: [],
        shipped: faker.random.boolean()
    };

    // generate random number from 1-5 products for order
    // make sure we are not generating same product twice
    const productCount = faker.random.number({min: 1, max: 5});
    let productIds:number[] = [];
    while(productIds.length < productCount) {
        const candidateId = faker.random.number({min: 1, max: products.length});
        if (!productIds.includes(candidateId)) {
            productIds.push(candidateId);
        }
    }

    for(let j = 0; j < productCount; j++) {
        order.products.push({
            quantity: faker.random.number({min: 1, max: 10}),
            productId: productIds[j]
        });
    }
    orders.push(order);
}
export default () => ({
    categories,
    products,
    orders
})