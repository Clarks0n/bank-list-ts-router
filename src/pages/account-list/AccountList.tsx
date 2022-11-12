import { useEffect, useState, useCallback} from 'react';

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

const AccountList = () => {
    const dispatch = useAppDispatch();

    // const dataSource = useAppSelector(selectDataSource)

    const [accountData, setAccountData] = useState<AccountProps[]>([]);

    useEffect(() => {
        dispatch(getAll(''))
        .unwrap()
        .then((res) => { 
            setAccountData(res)
        })
        
        /*
        return () => {
            dispatch(clearState());
        };
        */
    },[])

    return (
        <Card>
            <>
                <h2>Account List</h2>
                <DataGrids 
                    dataSource={accountData}
                    urlDetail={urlDetail}
                >
                    <Column dataField="transactionDate" caption="Transaction Date" dataType="date" format='dd-MMM-yyy' selectedFilterOperation='between' />
                    <Column dataField="description" caption="Description" dataType="string" />
                    <Column dataField="category" caption="Transaction Date" dataType="string" />
                    <Column dataField="debit" caption="Transaction Date" dataType="number" />
                    <Column dataField="credit" caption="Transaction Date" dataType="number" />
                </DataGrids>
            </>
        </Card>
    )
}

export default AccountList

