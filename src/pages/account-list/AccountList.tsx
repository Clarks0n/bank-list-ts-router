import { memo } from "react";
import { useEffect, useState} from 'react';

// Comp
import { Column } from 'devextreme-react/data-grid';
import Card from 'components/card/Card';
import DataGrids from 'components/data-grid/DataGrid';

// func
import { useAppDispatch, useAppSelector  } from 'hooks/callerhooks';
import { getAll, selectDataSource, clearState} from 'stores/slices/account.slices';
import { urlDetail } from 'services/accountList.service';

//type
import { AccountProps } from 'types/account-list/AccountList.type';
// import { useGetAllQuery } from 'stores/slices/account.query';

// react -query
import { useQuery, useMutation, useQueryClient } from "react-query"
import AccountListService from "services/accountList.service";
import { getTodos, addTodo, updateTodo, deleteTodo } from "services/todos.service"
import { getAccount } from "services/accountList.service";
import { useAccountListQuery, useCommonQuery } from "stores/account.query";
import { Button } from "devextreme-react";
import { z } from 'zod'
import { checkKeys, getKeys } from "utils/checkKeys";

const RPSchema = z.object({
    description : z.string(),
    category: z.string(),
    debit: z.number(),
})

type RPProps = z.infer<typeof RPSchema>


enum dataFieldObj {
    description = "description",
    category = "category",
    debit = "debit"
}

const AccountList = () => {
    const queryClient = useQueryClient()


    // const url = '/accounts?_page=3&_limit=10'
    // const data = useCommonQuery('accounts',url)

    const { data, isError, isSuccess, isLoading, error } = useQuery(
        ["products"], 
        () => getAccount(),
        { 
            // select: data => data.sort((a:any, b:any) => b.id - a.id),
            // staleTime: 2000,
            onSuccess: (data) =>(checkKeys(data[0], dataFieldObj)) ,
            onError: (error) =>  alert(error),
            retry: 3,
            retryDelay: 3000,
            suspense: true,
            useErrorBoundary: true
        }
    );


    const test = () =>{
        const data = queryClient.getQueryData('products')
        console.log(data)
    }

    return (
        <Card>
            <>
                <Button onClick={test}>asd</Button>
                <h2>Account List</h2>
                <DataGrids 
                    dataSource={data}
                    urlDetail={urlDetail}
                >
                    {/* <Column dataField="transactionDate" caption="Transaction Date" dataType="date" format='dd-MMM-yyy' selectedFilterOperation='between' /> */}
                    <Column dataField={dataFieldObj.description} caption="Description" dataType="string" />
                    <Column dataField={dataFieldObj.category} caption="Category" dataType="string" />
                    <Column dataField={dataFieldObj.debit} caption="debit" dataType="number" />
                    {/* <Column dataField="credit" caption="Transaction Date" dataType="number" /> */}
                </DataGrids>
            </>
        </Card>
    )
}

export default memo(AccountList)

