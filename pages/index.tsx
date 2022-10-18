import type { NextPage } from 'next';
import Image from 'next/image';
import { contentDataType } from '../types/contentDataType';

import MainTitleComponents from '../components/mainTitleComponents';
import MainDetailItems from '../components/mainDetailItems';

const Home: NextPage = () => {
    return (
        <div>
            <MainTitleComponents />
            <MainDetailItems />
        </div>
    );
};

export default Home;
