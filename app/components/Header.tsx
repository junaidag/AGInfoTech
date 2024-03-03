import Image from "next/image";
import Link from "next/link";
import { bgblendimage1, bgblendimage2, bgblendimage3, plusIcon } from "./icons";

export default function Header(): React.ReactElement {
  return (
    <>
      <header className="container mx-auto flex justify-between py-6 items-center">
        <Link href="/">
          <Image src="/aginfologo.png" alt="logo" width={83} height={45} />
        </Link>
        <Link href="/" className="font-medium text-xl/tight tracking-wide">
          Home
        </Link>
        <button
          type="button"
          className="rounded-full border border-white w-[34px] h-[34px] flex items-center justify-center "
        >
          {plusIcon}
        </button>
      </header>
      <span className="absolute left-0 top-0 -z-10">{bgblendimage1}</span>
      <span className="absolute right-0 top-0 -z-10">{bgblendimage2}</span>
      <span className="absolute left-0 top-[500px] -z-10">{bgblendimage3}</span>
    </>
  );
}
