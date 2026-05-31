import Navbar from "@/components/Header/Navbar";
import Hero from "@/components/Hero/Hero";
import Image from "next/image";

export default function Home() {
	return (
		<div className="relative min-h-screen overflow-hidden">
			{/* Globe Background */}
			<div className="absolute inset-0">
				<Image
					src="/images/globe.png"
					alt="Globe"
					fill
					priority
					className="object-cover object-center opacity-40"
				/>

				{/* Dark Overlay */}
				<div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black" />
			</div>

			<Navbar />
			<Hero />
		</div>
	);
}
