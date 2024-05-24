'use client'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Navbar from "@/components/Navbar";
export default function AboutPage() {
    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4 text-center">Shoes</h1>
                <p className="text-gray-700 leading-relaxed text">
                    E-commerce adalah platform e-commerce yang menyediakan berbagai produk dari sepatu.
                    Kami berkomitmen untuk memberikan pengalaman belanja online yang aman, nyaman, dan terpercaya bagi semua pelanggan kami.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                    Dengan menyediakan platform yang mudah digunakan dan menyediakan berbagai pilihan produk dari penjual terpercaya, E-Commerce ingin menjadi pilihan utama bagi semua orang dalam berbelanja online.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                    E-commerce didirikan dengan tujuan untuk memudahkan masyarakat dalam mendapatkan berbagai produk dengan harga terbaik dan kualitas yang terjamin. Kami selalu berusaha untuk memberikan layanan terbaik dan menjadi mitra yang dapat diandalkan bagi penjual dan pembeli.
                </p>
            </div>
            <div className="container w-full h-96 mx-auto">
                <MapContainer center={[-6.9733, 108.4847]} zoom={13} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[-6.9733, 108.4847]}  >
                        <Popup>
                            Kuningan, Jawa Barat, Indonesia
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>

        </>
    );
}
