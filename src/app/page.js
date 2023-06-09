import { Form } from "@/components/Form";
import { Header } from "@/components/Header";
import Posts from "@/components/Posts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#0F0F0F] w-full h-screen">
      <div className="w-[85%] sm:w-[45%] mx-auto text-gray-100 py-10">
        <Header />
        <Form/>
        <Posts/>
      </div>
    </div>
  );
}
