import {Product} from "../types";

const storeProduct = ({product}:{product:Product}, {db}: {db:any}) => db.get("products").insert(product).value();
const updateProduct = ({product}:{product:Product}, {db}: {db:any}) => db.get("products").updateById(product.id, product).value();
const deleteProduct = ({id}:{id:number}, {db}: {db:any}) => db.get("products").removeById(id).value();
const shipOrder = ({id, shipped}:{id:number, shipped: boolean}, {db}: {db:any}) => db.get("orders").updateById(id, {shipped: shipped}).value()

export {storeProduct, updateProduct, deleteProduct, shipOrder}