import React from 'react';
import {ConnectButton} from 'web3uikit'

const Header = () => {
    return (
        <div>
            <h1>Lottery</h1>
            <ConnectButton moralisAuth={false}/>
        </div>
    );
};

export default Header;