/** @format */

import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '@components/Navbar';

function MainLayout({ children }) {
  return (
    <div>
      <Head>
        <title>NextJS Conference | 2021</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main style={{ position: 'relative' }}>{children}</main>
    </div>
  );
}

export default MainLayout;
