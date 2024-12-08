import Image from 'next/image'

export default function Homepage(){
  return(
    <div>
      <Image 
      src={"/images/Header.png"}
      alt='No-image'
      width={1440}
      height={96}
      />
      <Image 
      src={"/images/bottom.png"}
      alt='No-image'
      width={1440}
      height={58}
      />
    
    </div>
  )
}