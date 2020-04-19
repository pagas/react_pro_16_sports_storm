import {Product, OrderProduct, Order} from "../types";

const paginateQuery = (query:any, page:number = 1, pageSize:number = 5) => {
    return query.drop((page-1) * pageSize).take(pageSize);
}
const product = ({id}:{id:number}, {db}:{db:any}) => db.get("products").getById(id).value();

const products = ({category}:{category:string}, {db}:{db:any}) => ({
    totalSize: () => db.get('products')
        .filter((p:Product)=> category ? new RegExp(category, "i").test(p.category): p)
        .size().value(),
    products: ({page, pageSize, sort}: {page:number, pageSize:number, sort:string}) => {
        let query = db.get('products');
        if (category) {
            query = query.filter((item:Product) => new RegExp(category, "i").test(item.category))
        }
        if (sort) {
            query = query.orderBy(sort);
        }
        return paginateQuery(query, page, pageSize).value();
    }
});

const categories = (args:any, {db}:{db:any}) => db.get("categories").value();
const resolveProducts = (orderProducts: OrderProduct[], db: any) => orderProducts.map((orderProduct:OrderProduct) => ({
    quantity: orderProduct.quantity,
    product: product({id: orderProduct.productId}, {db})
}));
const resolveOrders = (onlyUnshipped:boolean, {page, pageSize, sort}:{page:number, pageSize:number, sort:string}, {db}:{db:any}) => {
    let query = db.get('orders');
    if (onlyUnshipped) {
        query = query.filter({shipped: false});
    }
    if (sort) {
        query = query.orderBy(sort);
    }
    return paginateQuery(query, page, pageSize).value()
        .map((order:Order) => ({
            ...order,
            products: () => resolveProducts(order.products, db)
        }))
}

const orders = ({onlyUnshipped=false}: {onlyUnshipped:boolean}, {db}: {db:any}) => ({
    totalSize: () => db.get('orders').filter((order:Order) => onlyUnshipped ? order.shipped === false: order).size().value(),
    orders: ({page, pageSize, sort}: {page:number, pageSize:number, sort:string}) => resolveOrders(onlyUnshipped, {page, pageSize, sort}, db)
});

export {product, products, categories, orders}