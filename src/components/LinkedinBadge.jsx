import React, { useEffect, useRef } from 'react';
import { useData } from '../Context';

const LinkedInBadge = () => {
  const badgeRef = useRef(null);
  const {data} = useData();

  useEffect(() => {
    if (window.LI && window.LI.ProfileBadge) {
      window.LI.ProfileBadge.init();
    }
  }, []);

  return (
    <section id="linkedin-badge">
      <h2>Connect with Me</h2>
      <div class="badge-base LI-profile-badge" 
      data-locale="en_US" 
      data-size="large" 
      data-theme={data.theme}
      data-type="HORIZONTAL" 
      data-vanity="bhargavi-r21" 
      data-version="v1">
        <a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/bhargavi-r21?trk=profile-badge"></a>
      </div>
      <p style={{ marginTop: '1rem', color: '#ccc' }}>
        Currently on <strong>F-1 (OPT) Student Visa</strong> working @ Mr. Cooper, open to opportunities to work</p>
    </section>
  );
};

export default LinkedInBadge;
              