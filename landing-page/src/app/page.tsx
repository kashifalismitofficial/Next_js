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
          <h3 className='text-[18px] font-sans w-[327px] font-bold'>Trusted by the worlds best companies [social proof to build credibility]</h3>
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

      <div className='text-center  m-[60px]'>
        <h3 className='font-sans text-[32px] font-bold'>Explore Courses By Category</h3>
        <p>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
      </div>
      {/* Icons Section */}
      <div className='flex flex-wrap gap-7 justify-center mb-[100px]'>
        {/* Icone one */}
        <div className='flex justify-evenly items-center w-[380px] h-[132px] bg-[#F7F7F7]' >
          <div className='w-[100px] h-[100px] flex justify-center items-center bg-white'>
            <Image
              src={'/images/pen-tool-2.png'} alt='No-image' width={32} height={32}
            />
          </div>
          <div>
            <h3 className='text-[20px] font-semibold'>Marketing</h3>
            <p className='text-[18px]'>50+ Courses Available</p>
          </div>
        </div>

        {/* Second Icone */}
        <div className='flex justify-evenly items-center w-[380px] h-[132px] bg-[#F7F7F7]' >
          <div className='w-[100px] h-[100px] flex justify-center items-center bg-white'>
            <Image
              src={'/images/volume-high.png'} alt='No-image' width={32} height={32}
            />
          </div>
          <div>
            <h3 className='text-[20px] font-semibold'>Development</h3>
            <p className='text-[18px]'>50+ Courses Available</p>
          </div>
        </div>

        {/* Third Icon */}
        <div className='flex justify-evenly items-center w-[380px] h-[132px] bg-[#F7F7F7]' >
          <div className='w-[100px] h-[100px] flex justify-center items-center bg-white'>
            <Image
              src={'/images/group.png'} alt='No-image' width={32} height={32}
            />
          </div>
          <div>
            <h3 className='text-[20px] font-semibold'>Design & Development</h3>
            <p className='text-[18px]'>50+ Courses Available</p>
          </div>
        </div>

        {/* veiw all btn */}
        <button className='mt-[30px] w-[155px] h-[48px] text-black border border-black'>View All Courses</button>

      </div>

      {/* <<<<<<<< Our Achivements start >>>>>>>*/}
      <div className='h-[451px]'>
        <div className='text-center sm:pl-[15px]'>
          <h3 className='text-[32px] font-bold'>Our Achivements</h3>
          <p className='text-[18px] pt-6 w-[380px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        </div>
        {/* Counter */}
        <div className="flex items-center pt-[50px] justify-center">
          <div className='flex justify-around  text-center w-[380px]'>
            <div>
              <h1 className='text-[20px] font-bold'>+200</h1>
              <p className='text-[16px] pt-[20px]'>Courses</p>
            </div>
            <div>
              <h1 className='text-[20px] font-bold'>50K</h1>
              <p className='text-[16px] pt-[20px]'>Mentors</p>
            </div>
          </div>
        </div>

        {/* Seconde */}
        <div className="flex  items-center pb-[25px] pt-[40px] justify-center">
          <div className='flex justify-around  text-center w-[380px]'>
            <div>
              <h1 className='text-[20px] font-bold'>370K</h1>
              <p className='text-[16px] pt-[20px]'>Students</p>
            </div>
            <div>
              <h1 className='text-[20px] font-bold'>100+</h1>
              <p className='text-[16px] pt-[20px]'>Recognition</p>
            </div>
          </div>
        </div>
      </div>
      {/*<<<<<<<<<<<<<<<<<<<<< Next Start>>>>>>>>>>>>>>>>>>>>> */}

      <div className='text-center pt-[100px] sm:pl-[15px]'>
        <h3 className='text-[32px] font-bold'>Courses</h3>
        <p className='text-[18px] pt-6 w-[380px]'>Your Ultimate Guide to learning</p>
      </div>

      {/* Card Section Start */}
      <div className='py-[50px] flex flex-wrap justify-center '>
        {/* Card One */}
        <div className=" w-[380px] h-[558px] mb-[30px] bg-[#F7F7F7]">
          <div>
            <Image
              src={'/images/card1.png'} alt='Card Image' width={380} height={300}
            />
          </div>
          <div>
            <div className="flex justify-between p-[20px] pb-[10px]">
              <p className='text-[14px] font-bold'>Design</p>
              <Image
                src={'/images/Star.png'} alt='Rting' width={48} height={24}
              />
            </div>
            <div className="px-[20px] pt-0">
              <h3 className='text-[24px] font-bold'>UX/UI Design 201</h3>
              <p className='text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              <div className="flex justify-arround gap-[15px] items-center mt-[15px]">
                <button className='w-[117px] h-[40px]  text-black border rounded border-black'>Enroll Now</button>
                <p className='text-[16px] font-bold'>$400</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card Tow*/}
        <div className=" w-[380px] h-[558px] mb-[30px] bg-[#F7F7F7]">
          <div>
            <Image
              src={'/images/card2.png'} alt='Card Image' width={380} height={300}
            />
          </div>
          <div>
            <div className="flex justify-between p-[20px] pb-[10px]">
              <p className='text-[14px] font-bold'>Design</p>
              <Image
                src={'/images/Star.png'} alt='Rting' width={48} height={24}
              />
            </div>
            <div className="px-[20px] pt-0">
              <h3 className='text-[24px] font-bold'>UX/UI Design 201</h3>
              <p className='text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              <div className="flex justify-arround gap-[15px] items-center mt-[15px]">
                <button className='w-[117px] h-[40px]  text-black border rounded border-black'>Enroll Now</button>
                <p className='text-[16px] font-bold'>$400</p>
              </div>
            </div>
          </div>
        </div>


        {/* Card Three*/}
        <div className=" w-[380px] h-[558px] mb-[30px] bg-[#F7F7F7]">
          <div>
            <Image
              src={'/images/card3.png'} alt='Card Image' width={380} height={300}
            />
          </div>
          <div>
            <div className="flex justify-between p-[20px] pb-[10px]">
              <p className='text-[14px] font-bold'>Design</p>
              <Image
                src={'/images/Star.png'} alt='Rting' width={48} height={24}
              />
            </div>
            <div className="px-[20px] pt-0">
              <h3 className='text-[24px] font-bold'>UX/UI Design 201</h3>
              <p className='text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              <div className="flex justify-arround gap-[15px] items-center mt-[15px]">
                <button className='w-[117px] h-[40px]  text-black border rounded border-black'>Enroll Now</button>
                <p className='text-[16px] font-bold'>$400</p>
              </div>
            </div>
          </div>
        </div>










      </div>











    </div>

  )
}