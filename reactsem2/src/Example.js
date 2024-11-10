import React, { useEffect } from 'react';
export function Example(props) {
    const { value, count } = props;

    useEffect(() => {
        console.log("useEffect");
    }, []);

    return (
        <div>
            aaaaaaaaaaaaaa
            {value}
            {count}
        </div>
    )
}
