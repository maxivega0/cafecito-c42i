import { Button } from 'react-bootstrap';
const Error404 = () => {
    return (
        <section className="mainSection text-center">
            <img src={"https://images.pexels.com/photos/1888015/pexels-photo-1888015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="error 404" />
            <div>
            <Button variant='primary' >Volver al inicio</Button>

            </div>
        </section>
    );
};

export default Error404;