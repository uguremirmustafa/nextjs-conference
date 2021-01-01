/** @format */

import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '@components/Navbar';

function PagesLayout({ children }) {
  return (
    <div>
      <Head>
        <title>NextJS Conference | 2021</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar transparent={false} />
      <main style={{ position: 'relative', top: '80px' }}>{children}</main>
    </div>
  );
}

export default PagesLayout;
