import { useEffect, useState } from 'react';
import useSWR from 'swr';

function LastSalesPage() {
    const [sales, setSales] = useState();

    const { data, error } = useSWR(
        'https://nextjs-course-b0221-default-rtdb.firebaseio.com/sales.json'
    );

    useEffect(() => {
        if (data) {
            const transformedSales = [];
            for (const key in data) {
                transformedSales.push({
                    id: key,
                    userName: data[key].userName,
                    value: data[key].value,
                });
            }
            setSales(transformedSales);
        }
    }, [data]);

    if (!data) {
        return <p>Loading....</p>;
    }

    if (error) {
        return <p>Faild to load</p>;
    }

    if (!sales) {
        return <p>Loading...</p>;
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
