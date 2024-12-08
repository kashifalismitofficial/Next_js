import Image from 'next/image'
import Header from '../../components/Header'

export default function Homepage(){
  return(
  <div className="">
     <Header />
   <Image 
   src={"/images/hero-banner.png"} alt='Hero-image' width={1344} height={977}
   />
   <Image 
   src={"/images/Products.png"} alt='Hero-image' width={1344} height={977}
   />
   <Image 
   src={"/images/middle.png"} alt='Hero-image' width={1344} height={977}
   />
   <Image 
   src={"/images/gallery.png"} alt='Hero-image' width={1344} height={977}
   />
   <Image 
   src={"/images/boy.png"} alt='Hero-image' width={1344} height={977}
   />
   <Image 
   src={"/images/carousel.png"} alt='Hero-image' width={1344} height={592}
   />
   <div className='flex justify-center py-[100px]'>
   <Image 
   src={"/images/text.png"}  alt='Hero-image' width={880} height={192} 
   />
   </div>
   <Image 
   src={"/images/footer.png"}  alt='Hero-image' width={1440} height={331} 
   />
   
  </div>
  )
}