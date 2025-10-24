'use client';

import type { JSX } from 'react';

import ContactLink from './ContactLink';

const ContactList = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center gap-[8]">
      <ContactLink href="tel:+526673239767" arial-label="phone" title="phone">
        667 3239767
      </ContactLink>
      <ContactLink href="mailto:restaurante.pascola@gmail.com" arial-label="email" title="email">
        restaurante.pascola@gmail.com
      </ContactLink>
    </div>
  );
};

export default ContactList;
