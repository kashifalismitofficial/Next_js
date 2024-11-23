import Image from 'next/image'
import Header from '../../components/Header'

export default function Homepage() {
  return (
    <div>
      <Header></Header>
      <div className="flex flex-wrap justify-evenly">
        {/*>>>>>> Left Side Hero Section >>>>>>*/}
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

        {/* Hero Section End*/}
      </div>

      {/*>>>>> Logo Section Start <<<<<<*/}
      <div>
        <div className='flex justify-center md:pl-5 md:justify-self-start'>
          <h3 className='text-[18px] font-sans w-[327px] font-bold'>Trusted by the world's best companies [social proof to build credibility]</h3>
        </div>
        {/* Logo Images */}
        <div className='py-[30px] flex justify-center md:justify-start md:pl-[50px]'>
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


      {/* <<<<<<< Icon Section Start >>>>>>> */}

      <div className='text-center mb-[60px]'>
        <h3 className='font-sans text-[32px] font-bold'>Explore Courses By Category</h3>
        <p>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
      </div>
      {/* Icons Section */}
      <div className='flex flex-wrap gap-7 justify-center mb-[200px]'>

        {/* Icone one */}
        <div className='flex justify-evenly items-center w-[380px] h-[132px] bg-[#F7F7F7]' >
          <div className='w-[100px] h-[100px] flex justify-center items-center bg-white'>
            <Image
              src={'/images/pen-tool-2.png'} alt='No-image' width={32} height={32}
            />
          </div>
          <div>
            <h3 className='text-[20px] font-semibold'>Design & Development</h3>
            <p className='text-[18px]'>50+ Courses Available</p>
          </div>
        </div>

        {/* Second Icone */}
        <div className='flex justify-evenly items-center w-[380px] h-[132px] bg-[#F7F7F7]' >
          <div className='w-[100px] h-[100px] flex justify-center items-center bg-white'>
            <Image
              src={'/images/pen-tool-2.png'} alt='No-image' width={32} height={32}
            />
          </div>
          <div>
            <h3 className='text-[20px] font-semibold'>Design & Development</h3>
            <p className='text-[18px]'>50+ Courses Available</p>
          </div>
        </div>

        {/* Third Icon */}
        <div className='flex justify-evenly items-center w-[380px] h-[132px] bg-[#F7F7F7]' >
          <div className='w-[100px] h-[100px] flex justify-center items-center bg-white'>
            <Image
              src={'/images/pen-tool-2.png'} alt='No-image' width={32} height={32}
            />
          </div>
          <div>
            <h3 className='text-[20px] font-semibold'>Design & Development</h3>
            <p className='text-[18px]'>50+ Courses Available</p>
          </div>
        </div>
        










      </div>



    </div>
  )
}