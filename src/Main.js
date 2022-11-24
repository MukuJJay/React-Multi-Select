import React, {useState} from 'react';

export default function Project(){
    const [active, setactive] = useState(false);
    const expandMenu = () => {
      setactive(!active);
    }
  
    return (
      <form className='form-wrapper'>
        <input type= "text" id = "form-input" name = "text"/>
        <div className='icon-wrapper'>
          <span class="material-symbols-outlined" id="close-menu">close</span>
          <span onClick={expandMenu} className={active ? "material-symbols-outlined active" : "material-symbols-outlined"} id="expand-menu">expand_more</span>
        </div>
        <ul className={active ? "dropdownMenu hidden" : "dropdownMenu"}>
          <li className='color-purple'>Purple</li>
          <li className='color-red'>Red</li>
          <li className='color-orange'>Orange</li>
          <li className='color-yellow'>Yellow</li>
          <li className='color-green'>Green</li>
          <li className='color-slate'>Slate</li>
          <li className='color-silver'>Silver</li>
          <li className='color-ocean'>Ocean</li>
          <li className='color-forest'>Forest</li>
        </ul>
      </form>
    )
  }