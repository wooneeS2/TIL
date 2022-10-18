import { contentDataType } from '../../types/contentDataType';
import Image from 'next/image';
import DetailPageComponents from '../../components/detailPageComponents';

function DetailPage() {
    return (
        <DetailPageComponents
            img="https://cdn.pixabay.com/photo/2022/08/31/10/20/buttercup-7422987__480.jpg"
            title="detailContent"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error molestiae, perferendis ex doloribus at rem suscipit molestias repellendus possimus eligendi iure? Molestias dolor accusantium placeat quibusdam facilis dolores recusandae amet!Adipisci deserunt facere totam modi cupiditate dolorem iusto quaerat facilis aliquid pariatur officia soluta, odit nobis inventore quas veritatis minus officiis enim dignissimos. Aperiam, maxime eos. Quia deserunt in dolores.Quidem velit vero vitae nam, esse aspernatur dolorem at consequuntur sed vel eum ad maiores porro est laboriosam? Mollitia ab iste officia porro tempore explicabo cupiditate nam nihil veritatis quae!"
            date="April 28, 2020"
            authorImg="https://cdn.pixabay.com/photo/2015/11/26/00/14/woman-1063100__480.jpg"
            author="Joe Haddad"
        />
    );
}

export default DetailPage;
