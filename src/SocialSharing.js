import React from 'react';

const SocialSharing = ({ jobTitle, jobUrl }) => {
  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      jobUrl
    )}&text=${encodeURIComponent(jobTitle)}`;
    window.open(twitterUrl, '_blank');
  };

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      jobUrl
    )}&quote=${encodeURIComponent(jobTitle)}`;
    window.open(facebookUrl, '_blank');
  };

  return (
    <div>
      <h2>Share this job:</h2>
      <button onClick={shareOnTwitter}>Share on Twitter</button>
      <button onClick={shareOnFacebook}>Share on Facebook</button>
    </div>
  );
};

export default SocialSharing;
