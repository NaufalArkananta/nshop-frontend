import Link from "next/link"
import { getData } from "@/services/products";

export default async function DealsOfTheDay() {
        // Mengambil data produk dari API
        const products = await getData(`http://localhost:1992/api/products/`);
        interface Product {
            id: number;
            name: string;
            price: number;
            description: string;
        }
    return(
        <div className="mx-14 mt-16 justify-normal flex items-center">
            <div>
                <h1 className="text-5xl font-semibold">DEALS OF <span className="text-blue-400">THE <br />DAY</span></h1>
                <p className="my-2">
                    You cannot inspect quality into the product; it is already there.
                    <br />I am not a product of my circumstances. I am a product of my <br />decisions.
                </p>
                <Link href={"#"}>
                    <button className="mt-14 px-7 py-3 bg-blue-400 text-white rounded-xl hover:bg-green-600">View More</button>
                </Link>
            </div>
            <div className="ml-20 ">
                <div className="grid grid-cols-3 gap-10">
                    {products.data.slice(0, 3).map((product: Product) => (
                        <div key={product.id}>
                            <button className="bg-[url('/electronic.jpg')] bg-cover bg-center h-64 w-56 rounded-lg hover:border-solid hover:border-2 hover:border-blue-600">
                                <div className="mt-[190px] -mr-[120px]">
                                    <p className="text-blue-500">Add to cart</p>
                                    <p>Rp {product.price}.000</p>
                                </div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    ) 
}