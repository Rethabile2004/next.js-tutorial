import { log } from "console";
import Link from "next/link";

const url = 'https://www.course-api.com/react-tours-project';
type Tour = {
    id: string;
    price: string;
    info: string;
    name: string;
    image: string;

}
const TourPage = async () => {
    const resp: Response = await fetch(url)
    const data: Tour[] = await resp.json()
    console.log(data);


    return (
        <article>
            {data.map((tour) => {
                const { id, image, info, name, price } = tour
                // const path=
                return <Link key={id} href={`/tours/${id}`}>
                    <h2>{tour.name}</h2>
                </Link>

            })}
        </article>
    )
}

export default TourPage