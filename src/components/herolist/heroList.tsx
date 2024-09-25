import Link from "next/link";

export default function HeroList() {
    return(
        <div className="justify-between items-center flex mx-14 my-5">
            <div className="bg-[url('/electronic.jpg')] bg-cover bg-center h-56 w-56 p-10">
                <Link href={"#"}>
                    <button className="px-10 py-2 bg-white -ml-14 mt-28 shadow-black shadow-md hover:bg-green-700">Elektronik</button>
                </Link>
            </div>
            <div className="bg-[url('/fashion.jpg')] bg-cover bg-center h-56 w-56 p-10">
                <Link href={"#"}>
                    <button className="px-10 pr-16 py-2 bg-white -ml-14 mt-28 shadow-black shadow-md hover:bg-green-700">Fashion</button>
                </Link>
            </div>
            <div className="bg-[url('/apliances.jpg')] bg-cover bg-center h-56 w-56 p-10">
                <Link href={"#"}>
                    <button className="px-10 py-2 bg-white -ml-14 mt-28 shadow-black shadow-md hover:bg-green-700">Apliances</button>
                </Link>
            </div>
            <div className="bg-[url('/babbies_store.jpg')] bg-cover bg-center h-56 w-56 p-10">
                <Link href={"#"}>
                    <button className="px-8 py-2 bg-white -ml-14 mt-28 shadow-black shadow-md hover:bg-green-700">Babbies Shop</button>
                </Link>
            </div>
        </div>
    )
}