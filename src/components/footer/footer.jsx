import { FaDiscord, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

const Footer = () => {
  return (
    <>
      <div className="grid place-items-center mt-96 relative h-20 border-b border-gray-400">
        <img className="absolute top-0 h-full w-full" src="/Vector 4.png" alt="" />
        <div>
          <p className="md:text-4xl text-xl font-semibold text-center">Subscribe To Get Updates</p>
          <p className="text-center max-sm:text-sm">Get the latest news, exclusive offers, and event updates straight to your inbox</p>
        </div>
      </div>
      <div className="md:w-2/4 w-3/4 mx-auto flex items-center my-8 md:p-4 p-2 rounded-xl border border-gray-400">
        <Input placeholder='Enter your email address' className='ring-0 focus-visible:ring-offset-0 focus-visible:ring-0 bg-transparent border-none text-xs md:text-lg' />
        <Button className='bg-white text-green-500 rounded-3xl hover:bg-green-500 md:px-10 md:py-4 hover:text-white'>Subscribe</Button>
      </div>
      <div className="grid md:grid-cols-3 grid-col-1 py-12 place-items-center">
        <div className="">
          <div className="flex items-center justify-center mb-6">
            <img className="h-12" src="Vector.png" alt="" />
            <p className="border-r border-gray-400 px-2 text-2xl">NIFTOPIA</p>
          </div>
          <p className="text-center text-sm">Copy Right Project. Ads right reserves</p>
        </div>
        <div>
          <p className="italic text-center mb-4">socials coming Soon......</p>
          <div className="flex items-center justify-center gap-5">
            <a href="#"><FaTwitter className="text-4xl text-blue-500" /></a>
            <a href="#"><FaFacebook className="text-4xl text-blue-500"/></a>
            <a href="#"><FaDiscord className="text-4xl text-purple-600"/></a>
            <a href="#"><FaInstagram className="text-4xl text-purple-400"/></a>
          </div>
        </div>
        <p>Terms and Condition.</p>
      </div>
    </> 
  )
}

export default Footer