import React from 'react';

const Facilitie = ({facilitie, styles}) => {

  return (
    <div className={styles.facilitie_box} style={{background: facilitie.background}}>
         <div className={styles.image}>
           <img src={facilitie.img} alt="" />
         </div>
         <div className={styles.info}>
           <h2>{facilitie.title}</h2>
           <p>{facilitie.desc}</p>
         </div>
    </div>
  );
};

export default Facilitie;