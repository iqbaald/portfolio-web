import { GiHeartBottle } from "react-icons/gi";

export default function Footer() {
  return (
    <div className="py-2 flex flex-col items-center justify-center bg-neutral-950">
      <p className="text-lg text-white">
        Made with <GiHeartBottle className="inline text-2xl text-red-600" /> by
        Iqbaal Dhoifulloh
      </p>
    </div>
  );
}
