import React, { useEffect } from 'react';

const SidebarVertical = () => {
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
                style={{ display: 'block' }}
                data-ad-client="ca-pub-8590295546680449"
                data-ad-slot="8435434039"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
        </div>
    );
};

export default SidebarVertical;
