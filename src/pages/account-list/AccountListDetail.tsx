import { memo } from "react";
import { useLocation } from 'react-router-dom';

// Comp
import Card from 'components/card/Card';
import { BackButton } from 'components/custom-button/BackButton';
import { TextBox, NumberBox } from 'components/custom-comp/CustomComp';

import { AccountProps } from "types/account-list/AccountList.type";

const AccountListDetail = () => {
    const location = useLocation();
    
    const dataRow : AccountProps = location.state.dataRow;

    return (
        <Card>
            <h2>Account List Detail</h2>
            <div className="dx-fieldset">
                <TextBox 
                    label="Transaction Date"
                    value={dataRow?.transactionDate}
                    readOnly
                />
                 <TextBox 
                    label="Description"
                    value={dataRow?.description}
                    readOnly
                />
                <TextBox 
                    label="Category"
                    value={dataRow?.category}
                    readOnly
                />
                <NumberBox 
                    label="Debit"
                    value={dataRow?.debit}
                    readOnly
                />
                <NumberBox 
                    label="Credit"
                    value={dataRow?.credit}
                    readOnly
                />
            </div>
            <BackButton  />
        </Card>
    )
}

export default memo(AccountListDetail)