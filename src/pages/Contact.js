import React from 'react'
import Map from '../imgs/map1.jpg';
import '../styles/Contact.css';


function Contact() {
  return (
    <div className='contact'>
        <div className='map' style={{ backgroundImage: `url(${Map})`}} ></div>
        <div className='opening'>
            <h1>Címünk</h1>
            <p>1146 Budapest Hermina út 51.</p>
            <h1>Nyitvatartás</h1>
            <p> Hétfő-Péntek  12:00-22:00 <br></br>
                Szombat-Vasárnap  12:00-00:00 </p>
            <h1>Asztalfoglalás</h1>
            <form id="contact-form" method="POST">
          <label htmlFor="name">Név</label>
          <input name="name" type="text" />
         
          <label htmlFor="email">Email</label>
          <input name="email" type="email" />
          <label htmlFor="date">Dátum</label>
          <input name="date" type="date" />

          <label htmlFor="person">Létszám:</label>

            <select name="person" id="person">
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            </select>
            <button type="submit">Foglalás küldése</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact

