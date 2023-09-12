import Image from "next/image"

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
        <Image
        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8 aspect-square object-none object-top"
        //hover:object-top
        src="/images/prof-pic.png"
        width={200}
        height={200}
        alt="Cammy White"
        priority={true}
        />
    </section>
  )
}
