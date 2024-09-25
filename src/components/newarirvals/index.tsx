import { getData } from "@/services/products";
import Link from "next/link";

export default async function NewArrivals() {
        // Mengambil data produk dari API
        const products = await getData(`http://localhost:1992/api/products/`);
        interface Product {
            id: number;
            name: string;
            price: number;
            description: string;
            photo: string;
        }
    return(
        <div className=" mx-14 my-10">
            <div className="font-semibold justify-between flex items-center">
                <h1 className="text-4xl "><span className="text-blue-500">New</span> Arrivals</h1>
                <h1 className="text-2xl text-blue-500">End in: Desember 2024</h1>
            </div>
            <div className="grid grid-cols-5 gap-4">
                {products?.data?.map((product: Product) => (
                    <div key={product.id}>
                        <Link href={`#`}>
                            <div className="my-5 border-solid border-2 flex flex-col items-center justify-center px-5 py-10">
                                <h1>{product.name}</h1>
                                <img src={`http://localhost:1992/image-product/${product.photo}`} alt="404" />
                                <h3>Rp {product.price}.000</h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}