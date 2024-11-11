import instacone from "../../images/instagram.png"
import facebook from "../../images/facebook.png"
import twitter from "../../images/twitter.png"


 const Footer = () => {
  return (
  <>
    <div className='lg:my-20 pt-10'>
        <h1 className='text-white text-[20px] my-5 mx-auto text-center font-crimson'
        style={{ fontFamily: "'Crimson Text', serif" }}
        >Follow Us</h1>
        <ul className='flex w-[110px] justify-center gap-2 mx-auto'>
            <li><img src={instacone} alt='instagram'/></li>
            <li><img src={facebook} alt='facebook'/></li>
            <li><img src={twitter} alt='twitter'/></li>

        </ul>
        <br/>
        <p className='text-white hidden list lg:block tracking-wide text-right text-[20px] px-80'>English / EN / USD</p>

    </div>
</>
  )
}
export default Footer;