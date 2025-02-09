import { createAsyncThunk } from '@reduxjs/toolkit';

// export const getProducts = createAsyncThunk('getProducts', async () => {
//   const productData = await fetch('http://localhost:5001/getProducts').then(
//     (res) => res.json()
//   );

//   return productData;
// });

export const getProducts = createAsyncThunk('getProducts', () => {
  const productData = fetch('http://localhost:5001/getProducts').then((res) =>
    res.json()
  );
  return productData;
});
