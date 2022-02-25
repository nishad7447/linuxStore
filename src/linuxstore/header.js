
// import './App.css';
import images from './images.jpeg'

function Header() {
  
return (
    <div>
    <title>Nishad</title>
        <div className='Header'>
        <h1>Linux Store</h1>
        <div className='topright'>
        <a className='btn' href=''>Home</a>
        <a className='btn' href=''>Categories</a>
        <input type='text' placeholder='Search...'></input>
        </div>
        </div>
       <section class='Pic'>
        <img src={images} alt='Nothing just a whatsapp img'/>
       </section>
       </div>
)
}

export default Header;