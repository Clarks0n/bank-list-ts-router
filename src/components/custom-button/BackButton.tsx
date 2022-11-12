import { Button } from 'devextreme-react';
import style from './customButton.module.scss';
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
     const navigate = useNavigate();

    return (
        <div className={style['footer-button']}>
            <Button type='default' text='Back' onClick={() => navigate(-1) } />
        </div>
    )
};
