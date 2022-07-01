import React, {useEffect} from 'react';
import {useMoralis} from 'react-moralis';

const Header = () => {
    const { enableWeb3, account, Moralis, deactivateWeb3, isWeb3EnableLoading }  = useMoralis()

    const connectWeb3 = async () => {
        await enableWeb3()
        if(typeof window !== "undefined") window.localStorage.setItem("connected", "injected")
    }

    useEffect(() => {
       (async () => {
           if (typeof window !== "undefined") {
               if (window.localStorage.getItem("connected")) {
                  await enableWeb3()
               }
           }
       }) ()
    },[enableWeb3])

    useEffect(() => {

        Moralis.onAccountChanged(async (account) => {
                if(!account && typeof window !== "undefined") {
                    await deactivateWeb3()
                    window.localStorage.removeItem("connected")
                }
            })

    },[])

    return (
        <div>
            <h1>Lottery</h1>
            {account ? <div>{account.slice(0,6)}...{account.slice(account.length - 4)}</div> : <button disabled={isWeb3EnableLoading} onClick={connectWeb3}>Connect</button>}

        </div>
    );
};

export default Header;