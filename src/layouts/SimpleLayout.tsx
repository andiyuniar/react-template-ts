import React from 'react';
import SimpleHeader from './SimpleHeader';

const SimpleLayout = (props: { children?: React.ReactNode }) => {

    return(
        <React.Fragment>
            <SimpleHeader />
            <main>
                {props.children}
            </main>
        </React.Fragment>
    )
}

export default SimpleLayout;