import React, { useEffect } from 'react';

const AdComponent = () => {
    useEffect(() => {
        // Dynamically load the AdSense script
        const script = document.createElement('script');
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        script.async = true;
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);

        // Cleanup function to remove the script on component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        // Initialize the ad after the script is loaded
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);

    return (
        <div>
            <ins className="adsbygoogle"
                style={{ display: 'block', textAlign: 'center' }}
                data-ad-layout="in-article"
                data-ad-format="fluid"
                data-ad-client="ca-pub-8590295546680449"
                data-ad-slot="6268435694"></ins>
        </div>
    );
};

export default AdComponent;
