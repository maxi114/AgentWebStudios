import Link from "next/link";


const FAQS = () => {
    return (
        <div className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
        rounded-3xl
        
        ">
            <div className=" p-10 md:p-4 md:px-20">
                <div className="text-3xl md:text-7xl font-bold text-black">
                    Want a stunning Personalized
                    <br />
                    Website ?
                </div>
                <br />
                <div className="  font-semibold text-3xl md:text-4xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
                Start by <a href="/book" target='_blank' >booking a consultation</a>
                </div>
                
               <Link
  href={"/book"}
  className="cursor-pointer flex items-center justify-center border rounded-full border-black w-48 p-2 mx-auto my-6 text-black hover:text-white hover:bg-black"
>
  Book a call
</Link>



            </div>
        </div>);
}

export default FAQS;