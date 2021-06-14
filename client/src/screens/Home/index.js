import React from 'react';
import { Layout } from '../../Layout'
import { Infected } from './components/Infected';
import { Countries } from './components/Countries';


const Home = () => {

    return (
        <div>
            <Layout>
                <Infected />
                <Countries />
            </Layout>
        </div>
    );
}

export { Home };