// const url = 'https://www.course-api.com/react-tours-project';
// type Tour = {
//     id: string;
//     price: string;
//     info: string;
//     name: string;
//     image: string;

// }
// const page = async({ params }: { params: { id: string } }) => {
//     const {id}=await params
//     console.log(params);

//     return (
//         <>
//         <h1>Selected Tour</h1>
//         <div>id: {params.id}</div>
//         </>
//     )
// }

// export default page

export default async function Page({ params }: { params: { id: string } }) {
    // asynchronous access of `params.id`.
    const { id } = await params
    return <p>ID: {id}</p>
}