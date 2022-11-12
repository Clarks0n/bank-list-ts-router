import { TextBox as DevExTextBox , NumberBox as DevExNumberBox } from 'devextreme-react';

interface TextBoxProps  {
    label?: string
    value?: string | undefined
    readOnly?: boolean
};

interface NumberBoxProps  {
    label?: string
    value?: number | undefined
    readOnly?: boolean
};

export const TextBox = ( {label, value, readOnly=false} : TextBoxProps ) => {
    return (
        <div className="dx-field">
            <div className="dx-field-label">{label}</div>
            <div className="dx-field-value">
                <DevExTextBox
                    value={value}
                    readOnly={readOnly}
                />
            </div>
        </div>
    )
};

export const NumberBox = ( {label, value, readOnly} : NumberBoxProps ) => {
    return (
        <div className="dx-field">
            <div className="dx-field-label">{label}</div>
            <div className="dx-field-value">
                <DevExNumberBox
                    value={value}
                    readOnly={readOnly}
                />
            </div>
        </div>
    )
};