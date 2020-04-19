export type Order = {
    id: number
    name: string
    email:string
    address: string
    zip: string
    city: string
    country: string
    shipped: boolean
    products: OrderProduct[]
}
export type OrderProduct = {
    quantity: number
    productId: number
}
