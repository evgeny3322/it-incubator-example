import React from 'react';

export type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    OnClick: (value: any) => void
    items: ItemType[]
}


export const Select = (props: SelectPropsType) => {
    const selectedItem = props.items.find(i => i.value === props.value)
    return (
        <div>
            <select>
                <option ></option>
            </select>
            <h3>{selectedItem && selectedItem.title}</h3>
            {
                props.items.map(i => <div key={i.value}>{i.title}</div>)
            }
        </div>
    );
};

