function UserIdPage(props) {
    return <h1>{props.id}</h1>;
}

export default UserIdPage;

//아래 코드는 서버에서만 실행됨.
export async function getServerSideProps(context) {
    const { params } = context;
    const userId = params.uid;
    return {
        props: {
            id: 'user-id-' + userId,
        },
    };
}
