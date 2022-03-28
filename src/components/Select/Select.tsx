import React, {useState} from 'react';
import styles from './Select.module.css'

export type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    onClick?: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {
    const [active, setActive] = useState(false)

    const selectedItem = props.items.find(i => i.value === props.value)

    const toggleItems = () => setActive(!active)

    return (
        <>

            <div className={styles.select}>
                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active &&
                    <div className={styles.items}>
                        {
                            props.items.map(i => <div
                                onClick={() => {props.onChange(i.value)
                            }}
                                key={i.value}>{i.title}</div>)
                        }
                    </div>
                }
            </div>
        </>

    );
};

