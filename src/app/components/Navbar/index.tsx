import Image from 'next/image'

const NavBar = () => {
  return (
    <header style={{ height: "64px" }}>
      <Image
        src="/svgs/logo-fiap.svg"
        alt="Logo FIAP"
        width={100} 
        height={50}
      />
    </header>
  )
}

export default NavBar
