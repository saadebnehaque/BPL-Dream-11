import { useEffect, useState } from "react"



export const useDaisyTheme = () => {

    const [daisyTheme, setDaisyTheme] = useState('light')
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', daisyTheme);
    }, [daisyTheme])
    function toggoleDaisyTheme() {
        setDaisyTheme(daisyTheme === 'light' ? 'dark' : 'light')
    };

    return { daisyTheme, toggoleDaisyTheme }
};

