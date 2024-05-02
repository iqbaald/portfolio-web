import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="py-2 flex flex-col items-center justify-center bg-neutral-950">
      <p className="text-lg text-white">
        Made with <FaHeart className="inline text-red-600" /> by Iqbaal
        Dhoifulloh
      </p>
    </div>
  );
}
