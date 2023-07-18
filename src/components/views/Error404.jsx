import { Button } from 'react-bootstrap';
// import error from '../../assets/error404.png'
const Error404 = () => {
    return (
        <section className="mainSection text-center">
            <img src={"https://images.pexels.com/photos/3747159/pexels-photo-3747159.jpeg?auto=compress&cs=tinysrgb&w=1600"} alt="error 404" />
            <div>
            <Button variant='primary' >Volver al inicio</Button>

            </div>
        </section>
    );
};

export default Error404;