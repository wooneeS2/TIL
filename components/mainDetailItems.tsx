import { contentDataType } from '../types/contentDataType';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

const DUMMY_DATA = [
    {
        img: 'https://cdn.pixabay.com/photo/2022/08/31/10/20/buttercup-7422987__480.jpg',
        title: 'mainContent1',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error molestiae, perferendis ex doloribus at rem suscipit molestias repellendus possimus eligendi iure? Molestias dolor accusantium placeat quibusdam facilis dolores recusandae amet!Adipisci deserunt facere totam modi cupiditate dolorem iusto quaerat facilis aliquid pariatur officia soluta, odit nobis inventore quas veritatis minus officiis enim dignissimos. Aperiam, maxime eos. Quia deserunt in dolores.Quidem velit vero vitae nam, esse aspernatur dolorem at consequuntur sed vel eum ad maiores porro est laboriosam? Mollitia ab iste officia porro tempore explicabo cupiditate nam nihil veritatis quae!',
        date: 'April 28, 2020',
        authorImg:
            'https://cdn.pixabay.com/photo/2015/11/26/00/14/woman-1063100__480.jpg',
        author: 'Joe Haddad',
    },
    {
        img: 'https://cdn.pixabay.com/photo/2022/10/03/13/16/houses-7495861_1280.jpg',
        title: 'Learn How to Pre-render Pages Using Static Generation with Next.js',
        date: 'April 28, 2020',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error molestiae, perferendis ex doloribus at rem suscipit molestias repellendus possimus eligendi iure? Molestias dolor accusantium placeat quibusdam facilis dolores recusandae amet!Adipisci deserunt facere totam modi cupiditate dolorem iusto quaerat facilis aliquid pariatur officia soluta, odit nobis inventore quas veritatis minus officiis enim dignissimos. Aperiam, maxime eos. Quia deserunt in dolores.Quidem velit vero vitae nam, esse aspernatur dolorem at consequuntur sed vel eum ad maiores porro est laboriosam? Mollitia ab iste officia porro tempore explicabo cupiditate nam nihil veritatis quae!',
        authorImg:
            'https://cdn.pixabay.com/photo/2016/11/29/20/22/girl-1871104__480.jpg',
        author: 'Tim Neutkens',
    },
    {
        img: 'https://cdn.pixabay.com/photo/2022/08/24/05/44/duck-7406987__480.jpg',
        title: 'Deploying Next.js Apps',
        date: 'April 28, 2020',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error molestiae, perferendis ex doloribus at rem suscipit molestias repellendus possimus eligendi iure? Molestias dolor accusantium placeat quibusdam facilis dolores recusandae amet!Adipisci deserunt facere totam modi cupiditate dolorem iusto quaerat facilis aliquid pariatur officia soluta, odit nobis inventore quas veritatis minus officiis enim dignissimos. Aperiam, maxime eos. Quia deserunt in dolores.Quidem velit vero vitae nam, esse aspernatur dolorem at consequuntur sed vel eum ad maiores porro est laboriosam? Mollitia ab iste officia porro tempore explicabo cupiditate nam nihil veritatis quae!',
        authorImg:
            'https://cdn.pixabay.com/photo/2018/02/21/08/40/woman-3169726__480.jpg',
        author: 'Luis Alvarez',
    },
    {
        img: 'https://cdn.pixabay.com/photo/2022/10/08/17/53/pumpkin-blossom-7507512__480.jpg',
        title: 'From Server-side Rendering to Static Generation',
        date: 'April 28, 2020',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error molestiae, perferendis ex doloribus at rem suscipit molestias repellendus possimus eligendi iure? Molestias dolor accusantium placeat quibusdam facilis dolores recusandae amet!Adipisci deserunt facere totam modi cupiditate dolorem iusto quaerat facilis aliquid pariatur officia soluta, odit nobis inventore quas veritatis minus officiis enim dignissimos. Aperiam, maxime eos. Quia deserunt in dolores.Quidem velit vero vitae nam, esse aspernatur dolorem at consequuntur sed vel eum ad maiores porro est laboriosam? Mollitia ab iste officia porro tempore explicabo cupiditate nam nihil veritatis quae!',
        authorImg:
            'https://cdn.pixabay.com/photo/2018/01/02/09/47/woman-3055841__480.jpg',
        author: 'Shu Uesugi',
    },
];

function MainDetailItems() {
    const router = useRouter();
    function showDetailHandler(id: string) {
        router.push(`/${id}`);
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <>
            <p>More Stories</p>
            <Grid
                item
                xs={2}
                sm={2}
                md={4}
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                {DUMMY_DATA.map((data: contentDataType) => {
                    return (
                        <Grid item xs={6} key={data.title}>
                            <Item sx={{ minHeight: '98%' }}>
                                <Image
                                    src={data.img}
                                    alt={data.title}
                                    layout="responsive"
                                    width="50vw"
                                    height="30vh"
                                />
                                <Link
                                    underline="hover"
                                    color="inherit"
                                    sx={{ fontSize: '1.4rem' }}
                                    onClick={() => {
                                        showDetailHandler(data.title);
                                    }}
                                >
                                    {data.title}
                                </Link>
                                <p>{data.date}</p>
                                <p>{data.content}</p>
                                <Stack
                                    direction="row"
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Image
                                        src={data.authorImg}
                                        alt={data.author}
                                        width="50px"
                                        height="50px"
                                        style={{
                                            borderRadius: '50px',
                                        }}
                                    />
                                    <p style={{ margin: '10px' }}>
                                        {data.author}
                                    </p>
                                </Stack>
                            </Item>
                        </Grid>
                    );
                })}
            </Grid>
        </>
    );
}

export default MainDetailItems;
