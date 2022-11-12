import  { DataGrid as DevExDataGrid, Column, Pager, Paging, FilterRow } from 'devextreme-react/data-grid';
import { Button } from 'devextreme-react';

import style from './datagrid.module.scss';

import { useNavigate } from "react-router-dom";


interface DataGridProps  {
    dataSource?: Object[]
    urlDetail?: string
    children?: React.ReactNode | React.ReactNode[]
}

const DataGrids = ({dataSource, urlDetail, children}:DataGridProps) => {
    const navigate = useNavigate();

    const ButtonDetail = (e: any) => {
		let dataRow = e.data;
        const key = dataRow.id;

		return (
			<>
                <div className={style['button-action-cell']} >
                    <Button 
                        stylingMode="text"  
                        hint='Detail'
                        icon="user"
                        onClick={() => navigate(urlDetail + key ,{ state:{ pageType:"Detail", dataRow } }) }
                    />
                </div>
			</>
		)
	};
   
    return (
        <DevExDataGrid
            dataSource={dataSource}
            columnAutoWidth={true}
            rowAlternationEnabled={true}
            showBorders={true}

        >
            <Pager showInfo={true} />
            <Paging defaultPageSize={10} />
            <FilterRow visible={true} />
            <Column caption="Detail" cellRender={ButtonDetail} width={60} />
            {children}
        </DevExDataGrid>
    )
}

export default DataGrids