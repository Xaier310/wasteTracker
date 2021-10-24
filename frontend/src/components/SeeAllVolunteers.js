import React, { useEffect, useState } from "react"
import Card from "./Card"
const axios = require("axios");



class SeeAllVolunteers extends React.Component {

state = { flag:true, allVolunteers:[], error:"There is no Volunteers"};
  
async componentDidMount() {
      try {
        const response = await fetch('http://localhost:4000/api/volunteer');
        const data = await response.json(); 
        if(data&&data.length===0)
            {
                this.setState({ flag: false, allVolunteers:data, error:"There is no Volunteers" });
            }
            else{
                this.setState({ flag: true, allVolunteers:data, error:"There is no Volunteers" });
            }
  
      } catch (error) {
        this.setState({ flag: false, error:"There is no Volunteers" });
      }
    }
  
renderPerson = () => {
      const { flag, allVolunteers, error } = this.state;
      console.log("Flag : ",flag);
      
if(flag){
return allVolunteers.map(vol => (
    <Card username={vol.username} email={vol.email} />
    ));

}

else if(flag===false){
console.log("Errors : ", error); 
return <div>{error}</div>          
}
};
  
    render() {
      return <div>{this.renderPerson()}</div>;
    }
  }

  export default SeeAllVolunteers;