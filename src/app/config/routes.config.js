import React from 'react';
import loadable from '@loadable/component';

const routes = [
    {
        path: '/',
        key: 'ROOT',
        layout: 'Layout', // The topped Layout Name
        exact: true,
        component: loadable(() => import('./../pages/Home'))
    },
    {
        path: '/nft',
        key: 'ROOT',
        layout: 'Layout2', // The topped Layout Name
        exact: true,
        component: loadable(() => import('./../pages/NFT'))
    },
    {
        path: '/nft/:id',
        key: 'ROOT',
        layout: 'Layout2', // The topped Layout Name
        exact: true,
        component: loadable(() => import('./../pages/NFT/Detail'))
    },
    {
        path: '/buyEarnx',
        key: 'ROOT',
        layout: 'Layout2', // The topped Layout Name
        exact: true,
        component: loadable(() => import('./../pages/BuyEarnX'))
    },
    {
        path: '/roadmap',
        key: 'ROOT',
        layout: 'Layout2', // The topped Layout Name
        exact: true,
        component: loadable(() => import('./../pages/Roadmap'))
    },
    {
        path: '/notfound',
        key: 'ROOT',
        layout: 'Layout', // The topped Layout Name
        exact: true,
        component: loadable(() => import('./../pages/Notfound'))
    },
];

export default routes;
