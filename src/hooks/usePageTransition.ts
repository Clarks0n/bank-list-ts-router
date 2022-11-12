import { useState } from 'react';

export interface PageTransitionProps {
    commencePageTransition: (pageType: string, dataRow: Object) => void
}

const usePageTransition = () => {
    const [dataRow,setdataRow] = useState<Object>([]);
    const [pageType,setPageType] = useState<string>('Main');

    const commencePageTransition = (pageType: string, dataRow: Object) => {
        setPageType(pageType);
        setdataRow(dataRow);
    };

    return { dataRow, pageType, commencePageTransition }
};

export default usePageTransition