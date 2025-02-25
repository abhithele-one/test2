'use client'
// import React, { useState } from 'react';
// import { QrReader } from 'react-qr-reader';

// const Home = () => {
//   const [data, setData] = useState('No result');
// console.log(data,'data')
//   return (
//     <>
//     <a href={data?.text}>{data?.text}</a>
//       <QrReader
//       constraints={{facingMode:'user'}}
//         onResult={(result, error) => {
//           if (!!result) {
//             setData(result);
//           }

//           if (!!error) {
//             console.info(error);
//           }
//         }}
//       />
//     </>
//   );
// };

// export default Home

import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home