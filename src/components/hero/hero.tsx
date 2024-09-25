import Link from "next/link"

export default function Hero() {
    return (
        <div className="bg-[url('/hero.svg')] bg-cover bg-center h-96 w-full">
            <div className="mx-14 pt-10">
                <h1 className="text-5xl font-semibold">Shop <span className="text-blue-400">Computer <br />& Experience</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />Quo itaque rem magni unde quae inventore, quas neque eligendi <br />voluptatum excepturi impedit iure voluptatem, <br />praesentium odit molestias reprehenderit quia sint? Labore?</p>
                <Link href={"#"}>
                    <button className="mt-2 px-7 py-3 bg-blue-400 text-white rounded-xl hover:bg-green-600">View More</button>
                </Link>
            </div>
        </div>
    )
}