import Image from 'next/image';
import { contentDataType } from '../types/contentDataType';

function DetailPageComponents(contentData: contentDataType) {
    return (
        <>
            <Image
                src={contentData.img}
                alt={contentData.title}
                width="100%"
                height={'100px'}
            />
            <p>{contentData.title}</p>
            <p>{contentData.date}</p>
            <p>{contentData.content}</p>
        </>
    );
}

export default DetailPageComponents;
