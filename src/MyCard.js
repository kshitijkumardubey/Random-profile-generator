 import React from "react"

 import {Card,CardBody,CardTitle,CardText} from "reactstrap"
 import { Button} from "reactstrap";
 import {FaMapMarkedAlt,FaEnvelope,FaPhone,FaBirthdayCake} from "react-icons/fa"


 const MyCard = ({details}) => {

    return (
      <Card>
      <CardBody className="text-center">
      <img height="150" width="150"
      className="rounded-circle img-thumbnail border-danger"
      src={details.picture?.large}
      />
      <CardTitle className="text-primary">
      <h1>
      <span className="pr-2">{details.name?.title}</span>
      <span>{details.name?.first}</span>
      <span>{details.name?.last}</span>
      </h1>
      </CardTitle>
      <CardText>
      <FaMapMarkedAlt/>
      <span className="pr-2">{details.location?.city}</span>
      <FaPhone/>
      <p1 className="pr-3">{details.phone}</p1>
      <FaBirthdayCake/>
      <span className="pl=2">{details.dob?.age}</span>
      
      <Button variant="danger"><FaEnvelope className="pr-2 size-50"/>
      {details.email}</Button>


      
      </CardText>
      </CardBody>
      
      </Card>

    )
 }

 export default MyCard;