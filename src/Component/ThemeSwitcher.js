
// import { useEffect, useState } from 'react'
// import styles from './ThemeSwitcher.module.css'
// import { XMarkIcon,SwatchIcon } from '@heroicons/react/16/solid'

// const ThemeSwitcher = () => {
//    const [isColorPicking, setIsColorPicking] = useState(false)
//    const [hue, setHue] = useState('240')

//    useEffect(()=> {
//         document.documentElement.style.setProperty('--_hue', hue);
//    },[hue])

//   return (
//     <aside className={styles.wrapper} style={{
//         backgroundColor: isColorPicking?'hsl(var(--muted) / .6':'transparent'
//     }}>
//         {
//             isColorPicking?(
//                 <>
//                     <button className={`btn ${styles.close}`} aria-label = "Close Color Picking Mode" onClick={()=>setIsColorPicking(false)} >
//                         <XMarkIcon/>
//                     </button>
//                     <input 
//                         className={styles.picker}
//                         type="range"
//                         min = "0"
//                         max = "360"
//                         aria-label = 'Change color theme slider'
//                         value={hue}
//                         onInput={(e)=> setHue(e.target.value)}
//                     />
//                 </>

//             ):(
//                 <div className={styles.btns}>
//                     <button className='btn' aria-label='Enable Color Picking Mode' onClick={()=>setIsColorPicking(true)}>
//                         <SwatchIcon/>
//                     </button>
//                 </div>
//             )
//         }
//     </aside>
//   )
// }

// export default ThemeSwitcher

