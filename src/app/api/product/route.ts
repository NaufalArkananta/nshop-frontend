import { NextResponse } from "next/server";

export async function GET() {
    try {
        // Mengambil data produk dari endpoint
        const response = await fetch('http://localhost:1992/api/products/');

        // Cek apakah respons berhasil
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }

        // Parsing data JSON dari respons
        const products = await response.json();

        // Mengembalikan response dalam format JSON
        return NextResponse.json({
            status: 200,
            message: 'Success',
            products
        });
    } catch (error) {
        // Menangani error dan mengirim response error
        return NextResponse.json({
            status: 500,
            message: error
        });
    }
}