import React from 'react';
import MainHeader from './MainHeader';
import SideMenu from './SideMenu';

const MainLayout = (props: {children: React.ReactNode}) => {
    return (
        <React.Fragment>
            <MainHeader/>
            {/* <SideMenu /> */}
            <main>
                {props.children}
            </main>
        </React.Fragment>
        
    )
}

export default MainLayout;