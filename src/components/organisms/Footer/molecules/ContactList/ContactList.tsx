'use client';
import ContactLink from './atoms/ContactLink';

const ContactList = (): JSX.Element => {
  return (
    <>
      <ContactLink href="tel:+526673239767">667 3239767</ContactLink>
      <ContactLink onClick={() => navigator.clipboard.writeText('@pascola.cln')}>@pascola.cln</ContactLink>
      <ContactLink onClick={() => navigator.clipboard.writeText('restaurante.pascola@gmail.com')}>restaurante.pascola@gmail.com</ContactLink>
    </>
  );
};

export default ContactList;