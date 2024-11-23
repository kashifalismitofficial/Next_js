import Image from 'next/image'
import Header from '../../components/Header'

export default function Homepage() {
  return (
    <div>
      <Header></Header>
      <div className="flex flex-wrap justify-evenly">
        {/* Left Side Hero Section */}
        <div className="">
          <div className="w-[380px] p-5 p-[30px]">
            <h2 className='font-sans text-[40px] font-bold'>Learn new skills online with ease</h2>
            <p className='font-sans text-[18px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
          </div>
          <div className='w-[358px] flex sm:pl-[30px] gap-3'>
            <button className='w-[178px] h-[48px] text-white bg-black'>Start learning now</button>
            <button className='w-[178px] h-[48px] text-black border border-black'>Explore Courses</button>
          </div>
        </div>
        {/* Right Side Hero Section Image */}
        <div>
          <Image src={'/images/hero-img.png'} alt='no-image' width={428} height={390} className='py-[20px]'
          />
        </div>

        {/* Logo Section Start */}
      </div>
      <div>
        <div className='flex justify-center md:pl-5 md:justify-self-start'>
          <h3 className='text-[18px] font-sans w-[327px] font-bold'>Trusted by the world's best companies [social proof to build credibility]</h3>
        </div>
        <div className='py-[20px] flex justify-center md:justify-start md:pl-[50px]'>
          <Image
            src={'/images/1.png'} alt='no-image' width={107.15} height={33.34}
          />
          <Image
            src={'/images/2.png'} alt='no-image' width={107.15} height={33.34}
          />
          <Image
            src={'/images/3.png'} alt='no-image' width={107.15} height={33.34}
          />
        </div>


        
      </div>
    </div>
  )
}