import pokeball from '../../assets/images/pokeball.png'
import Image from "next/image";
import Link from 'next/link'

const Logo = () => {
  return (
    <>
        <Link href='/'><a><Image src={pokeball} alt="pokeball" width={40} height={40}/></a></Link>
    </>
  )
}

export default Logo