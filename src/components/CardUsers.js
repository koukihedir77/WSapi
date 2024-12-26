import Card from 'react-bootstrap/Card';


const CardUsers=({el})=>{
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{el.address.street}</Card.Subtitle>
          <Card.Text>
           
          
          </Card.Text>
          <Card.Link href="#"></Card.Link>
          <Card.Link href="#">{el.website}</Card.Link>
        </Card.Body>
      </Card>
        
//         <div>
// <h1>{el.name}</h1>

//         </div>
    )
}

export default CardUsers