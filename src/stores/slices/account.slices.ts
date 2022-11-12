import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AccountListService from "services/accountList.service";
import type { RootState } from 'stores/store';

interface CommonState {
  dataSource?: Object[]
  errorMsg?: string
}

const initialState = {
    dataSource : [],
    errorMsg : '',
} as CommonState


export const getAll = createAsyncThunk(
    "common/getAll",
    async (url:string) => {
        const res = await AccountListService.get(url);
        return res.data;
    }
);

const accountListSlice = createSlice({
    name: "accountList",
    initialState,
    reducers: {
      	clearState: () => initialState
    },
    extraReducers: (builder) => {
		builder.addCase(getAll.fulfilled, (state, action ) => {
			return ({ ...state, dataSource: action.payload.accounts})
		})
		builder.addCase(getAll.rejected, (state, action) => {
			return ({ ...state, errorMsg: action.error.message})
		})
  	},
})

export const { clearState } = accountListSlice.actions;
export const selectDataSource = (state: RootState) => state.accountList.dataSource

const { reducer } = accountListSlice;
export default reducer;