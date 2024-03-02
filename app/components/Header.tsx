import Image from "next/image";
import Link from "next/link";
import { plusIcon } from "./icons";

export default function Header() {
  return (
    <header className="container mx-auto flex justify-between py-6 items-center">
      <Link href="/">
        <Image src="/aginfologo.png" alt="logo" width={83} height={45} />
      </Link>
      <Link href="/" className="font-medium text-xl/tight tracking-wide">
        Home
      </Link>
      <button className="rounded-full border border-white w-[34px] h-[34px] flex items-center justify-center ">
        {plusIcon}
      </button>
    </header>
  );
}
