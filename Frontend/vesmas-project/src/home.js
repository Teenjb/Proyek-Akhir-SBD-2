import './index.js';
import { ListItemAvatar,ListItem,List,ListItemSecondaryAction,ListItemText,Checkbox,Avatar } from '@mui/material';
import { Component } from 'react';
const axios = require('axios');



class home extends Component {
  componentDidMount() {
    axios.get(`http://localhost:3112/vesmas/vehicle`).then(function(response) {
      console.log(response);
      if(response.data.message == 'success') {
        this.setState({
          users: response.data.users
        });
      }else{
        alert('error');
      }
      }.bind(this)).catch(function(error) {
      console.log(error);
    });
  }

  render() {
  return(
  <section className="h-full gradient-form bg-slate-200 md:h-screen">
    <div className="container mx-auto py-12 px-6 h-full">
      <div className="flex justify-center flex-col items-center flex-nowrap h-full g-6">
      <h4 className="text-3xl text-sky-900 font-bold mt-1 mb-12 pb-1 ">Welcome to VESMAS</h4>
        <div className="flex justify-center items-center flex-wrap h-full w-full g-6">
          <div className="xl:w-1/2 px-12 h-full">
            <div className="lg:flex lg:flex-wrap g-0">
              <div className="lg:w-full px-4 md:px-0">
                <div className="md:p-12 md:mx-6">
                  <div className="text-center">
                    <h4 className="text-3xl text-sky-900 font-bold mt-1 mb-12 pb-1 ">How to Use Vesmas</h4>
                    <p className="mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non aliquam ipsa reiciendis magni molestiae nemo dicta possimus unde ratione, error cum voluptates eaque. Deleniti, dolores? Adipisci dolorem libero ex modi facere. Eligendi aliquam nihil voluptatum maxime voluptas repellat? Nisi ipsa ea animi dolores sed maxime repudiandae at nihil iure dolore?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-1/2 px-12 h-full">
            <div className="lg:flex lg:flex-wrap g-0">
              <div className="lg:w-full md:px-0" style={{maxHeight: '100%', overflow:'auto'}}>
                <List>
                  {[0, 1, 2, 3].map(value => {
                    return (
                      <ListItem key={value} button>
                        <ListItemText primary={`item ${value + 1}`} />
                      </ListItem>
                    );
                  })}
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
  }
}

export default home;