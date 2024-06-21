import React from 'react'
import fb from '../components/images/fb.png';
import linkedln from '../components/images/linkedln.png'
import medium from '../components/images/medium.png'
import youtube from '../components/images/youtube.png'
import github from '../components/images/github.png'
import huggingface from '../components/images/huggingface.png'

function Header() {
  return (
    <div className="App-header" >
        <a href='https://www.facebook.com/profile.php?id=100071210860039'><img src={fb} alt="fb" height='30' width='30'/></a>
        <a href ='https://www.linkedin.com/in/kaushal-khatiwada-61ba52301/'><img src={linkedln} alt="linkedln" height='30' width='30'/></a>
        <a href ='https://www.youtube.com/@KaushalKhatiwada_11'> <img src={youtube} alt="youtube" height='30' width='30'/> </a>
        <a href='https://kaushalkhatiwada.medium.com'><img src={medium} alt="medium" height='30' width='30'/></a> 
        <a href='https://github.com/KaushalKhatiwada'><img src={github}  alt="github" height='30' width='30'/></a> 
        <a href='https://huggingface.co/Kaushal-Khatiwada'><img src={huggingface} alt="huggingface" height='30' width='30'/></a>
    </div>
  )
}

export default Header