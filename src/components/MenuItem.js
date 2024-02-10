import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price }) => {
    return (
        <div class="row">
            <div class="col-4">
              <img src={require(`../images/${imageName}`)} class="food"></img>              
            </div>
            <div class="col-6">
                <h4>
                    {title}
                </h4>
                <h5>
                    {description}
                </h5>
                <div class="row">
                    <div class="col-8">
                    <h6>
                        {price}
                    </h6>
                    </div>
                    <div class="col-4">
                    <button>
                        Add
                    </button>
                    </div>
                    
                </div>
                
            </div>
        </div>

       
        // <div class="container text-center">
        //     <div class="row">
        //         <div class="col-4">
        //             <img src={imageName} class="food"></img>
        //         </div>
        //     </div>
        // </div>
    );
};

export default MenuItem;