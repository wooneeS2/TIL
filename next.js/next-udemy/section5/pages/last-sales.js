import { useEffect, useState } from 'react';

function LastSalesPage() {
    const [sales, setSales] = useState();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://nextjs-course-b0221-default-rtdb.firebaseio.com/sales.json'
        )
            .then(response => response.json())
            .then(data => {
                const transformSales = [];
                for (const key in data) {
                    transformSales.push({
                        id: key,
                        userName: data[key].userName,
                        value: data[key].value,
                    });
                }

                setSales(transformSales);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <p>Loading....</p>;
    }

    if (!sales) {
        return <p>No data yet</p>;
    }

    return (
        <ul>
            {sales.map(sale => {
                return (
                    <li key={sale.id}>
                        {sale.userName} - ${sale.value}
                    </li>
                );
            })}
        </ul>
    );
}

export default LastSalesPage;
