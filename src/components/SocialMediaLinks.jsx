import React from 'react';

const Link = ({ href, label }) => <a href={href}>{label}</a>;

Link.propTypes = {
  href: String,
  label: String,
};

Link.defaultProps = {
  href: '',
  label: '',
};

const SocialMediaLinks = () => (
  <>
    <Link href="https://www.linkedin.com/in/mikkicon/" label="linkedin" />
  </>
);

export default SocialMediaLinks;
