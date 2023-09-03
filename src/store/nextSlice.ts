import { createSlice } from "@reduxjs/toolkit";
import { StoreProduct } from "../../type";

interface NextState {
  productData: StoreProduct[];
  favoriteData: StoreProduct[];
  allProducts: StoreProduct[];
  userInfo: null | string;
}

const initialState: NextState = {
  productData: [],
  favoriteData: [],
  allProducts: [],
  userInfo: null,
};

export const nextSlice = createSlice({
  name: "next",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const existingProduct = state.productData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    addToFavorite: (state, action) => {
      const existingProduct = state.favoriteData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.favoriteData.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.favoriteData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );
      existingProduct && existingProduct.quantity++;
    },
    decreaseCartQuantity: (state, action) => {
      const existingProduct = state.favoriteData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );
      if (existingProduct?.quantity == 1) {
        existingProduct.quantity = 1;
      } else {
        // ! là toán tử bang. Nó được sử dụng để chắc chắn rằng biến existingProduct không phải là null.
        existingProduct!.quantity--;
      }
    },
    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state, action) => {
      state.productData = [];
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state, action) => {
      state.userInfo = null;
    },
    setAllProducts: (state, action) => {
      state.productData = action.payload;
    },
  },
});
export const {
  addtoCart,
  addToFavorite,
  addUser,
  decreaseCartQuantity,
  deleteProduct,
  increaseQuantity,
  removeUser,
  resetCart,
  setAllProducts,
} = nextSlice.actions;
export default nextSlice.reducer;
