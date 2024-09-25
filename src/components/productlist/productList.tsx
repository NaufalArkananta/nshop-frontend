import { getData } from "@/services/products";

export default async function ProductList() {
    // Mengambil data produk dari API
    const products = await getData(`http://localhost:1992/api/products/`);
    interface Product {
        id: number;
        name: string;
        price: number;
        description: string;
    }
    return (
        <div className="grid grid-cols-3 gap-4">
            {products.data.map((product: Product) => (
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
    );
}