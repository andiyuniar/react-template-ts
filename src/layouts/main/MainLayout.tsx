import React from 'react';

const MainLayout = (props: {children: React.ReactNode}) => {
    return (
        <div>
            { props.children }
        </div>
    )
}

export default MainLayout;