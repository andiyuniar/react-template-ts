import React from 'react';

const SimpleLayout = (props: { children?: React.ReactNode }) => {

    return(
        <div>
            <main>
                {props.children}
            </main>
        </div>
    )
}