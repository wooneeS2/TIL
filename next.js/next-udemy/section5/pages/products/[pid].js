import fs from 'fs/promises';
import path from 'path';

function ProductDetailPage(props) {
    const { loadedProduct } = props;
    if (!loadedProduct) {
        return <p>Loading...</p>;
    }
    return (
        <>
            <h1>{loadedProduct.title}</h1>
            <p>{loadedProduct.description}</p>
        </>
    );
}

async function getData() {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);
    return data;
}

//컴포넌트 함수보다 빨리 실행됨
export async function getStaticProps(context) {
    const { params } = context;
    const productId = params.pid;
    const data = await getData();

    const product = data.products.find(product => product.id === productId);

    if (!product) {
        return { notFound: true };
    }
    return {
        props: {
            loadedProduct: product,
        },
    };
}

//정적으로 데이터 페칭할 때 미리 데이터 어떤 데이터를 가져와야하는지 알려주는 함수
export async function getStaticPaths() {
    const data = await getData();

    const ids = data.products.map(product => product.id);

    const pathsWithParams = ids.map(id => ({ params: { pid: id } }));

    return {
        paths: [{ params: pathsWithParams }],
        // true일 경우 Paths에 없는 값은 요청이 도달했을 때 생김
        //string일 경우에는 값이 로딩 된 다음에 로딩됨.
        fallback: true,
    };
}

export default ProductDetailPage;
