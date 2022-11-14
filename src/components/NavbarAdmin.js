import Nav from "react-bootstrap/Nav";

const NavbarAdmin = () => {
    return (
        <div>
            <div style={{ backgroundColor: "white", color: "black" }}>
                <Nav justify variant="tabs" defaultActiveKey="#">
                    <Nav.Item>
                        <Nav.Link href="editar_producto">PRODUCTOS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">COMPRAS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">PAGOS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3">USUARIOS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-4">DESPACHO</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            CLIENTES
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    );
};

export default NavbarAdmin;