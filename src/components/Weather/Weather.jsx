import React, { useEffect, useState } from 'react';

const Weather = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (!scriptLoaded) {
      const script = document.createElement('script');
      script.src = 'https://weatherwidget.io/js/widget.min.js';
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);
    }
  }, [scriptLoaded]);

  return (
    <div>
      <a
        className="weatherwidget-io"
        href="https://forecast7.com/en/23d8090d27/hemayetpur/"
        data-label_1="Lazz Polli Resort"
        data-label_2="Hemayetpur, Savar"
        data-icons="Climacons Animated"
        data-theme="gray"
        data-highcolor="#fbf41a"
        data-lowcolor="#71c2f9"
        data-suncolor="#fbf41a"
        data-raincolor="#39adfc"
      >
        Lazz Polli Resort Hemayetpur, Savar.
      </a>
    </div>
  );
};

export default Weather;
