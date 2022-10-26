import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';

function HomePage(props) {
    const { products } = props;
    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    <Link href={`/${product.id}`}>{product.title}</Link>
                </li>
            ))}
        </ul>
    );
}

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    if (!data) {
        return {
            redirect: {
                destination: 'no-data',
            },
        };
    }
    if (data.products.length === 0) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            products: data.products,
        },
        //10초 마다 페이지 재생성
        revalidate: 10,
        //true일 경우 404페이지 리턴
        notFound: false,
        // 리다이렉트 설정
        // redirect: {
        //   destination:'/no-data'
        // }
    };
}

export default HomePage;
