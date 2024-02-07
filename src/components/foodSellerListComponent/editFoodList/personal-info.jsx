/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
import FoodSellListSidebar from "./foodSellListSidebar";
//import { useParams } from 'react-router-dom';
import ImageUploadButton from "./uploadImage";
import { useState } from 'react';


export default function FoodSellerCustomerComponent() {
    // const { slug } = useParams();
    const [country] = useState([
      // Your initial data goes here
      {name: "Nigeria"},
      {name: "Togo"},
      {name: "Cameroon"}
      // Add more rows as needed
    ]);
    return (

        <>

            <div>
                   
            <div className="row">
      <div className="col-12 col-xl-4">
        <FoodSellListSidebar />
      </div>
      <div className="col-12 col-xl-8">
        <form role="form">
          <div className="">
            
            <div className="card-body">
              <div className="card inner-card mb-3">
                <div className="card-header bg-white">
                  Owners’ Personal Information
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="form-group col-md-4">

                    <ImageUploadButton/>

                    </div>
                    <div className="form-group col-md-8">
                      <div className="row">

                        <div className="form-group col-md-12 mb-2">
                          <label htmlFor="fullName">Full Name
                            <span className="required">*</span></label>
                          <input id="fullName"  type="text" className="form-control"
                            name="fullName" placeholder="George Smith" />

                        </div>

                        <div className="form-group col-md-12 mb-2">
                          <label htmlFor="phoneNumber">Phone Number
                            <span className="required">*</span></label>
                          <input id="phoneNumber" v-model="form.phoneNumber" type="number" className="form-control"
                            name="phoneNumber" placeholder="+234 80123456
                              " />
                          
                        </div>
                        <div className="form-group col-md-12">
                          <label htmlFor="emailAddress">Email
                            <span className="required">*</span></label>
                          <input id="emailAddress"  type="email" className="form-control"
                            name="emailAddress" placeholder="mail@yourmail.com" />

                        </div>
                        <div className="form-group mt-2">
                          <button className='btn btn-success col-md-9'>Save</button>
                        </div>
                        
                      </div>
                     
                    </div>
                  </div>
                  
                </div>
              </div>

              {/* inner-card 2 */}
              <div className="card inner-card mb-3">
                <div className="card-header bg-white">
                  Owners’ Personal Information
                </div>
                <div className="card-body">
                  <div className="row">
                    
                    <div className="form-group col-md-7">
                      <div className="row">

                        

                        <div className="form-group col-md-12 mb-2">
                          <label htmlFor="zipcode">Zip code
                            <span className="required">*</span></label>
                          <input id="zipcode"  type="number" className="form-control"
                            name="zipcode" placeholder="02111
                              " />
                          
                        </div>
                        <div className="form-group col-md-12 mb-2">
                            <label htmlFor="address">Address</label>
                            <textarea id="address"  className="form-control"

                                value="70., Charter str. Apartment: 59a" />

                        </div>

                        <div className="form-group col-md-12 mb-2">
                          <label htmlFor="parent_tag">
                            Country
                          </label>
                          <select
                            id="parent_tag"
                            className="form-control"
                          >
                            {country.map((it, i) => (
                              <option key={i} value={it.id}>
                                {it.name}
                              </option>
                            ))}
                          </select>
                        </div>


                        <div className="form-group col-md-12 mb-2">
                            <label htmlFor="city">City
                                </label>
                            <input id="city" type="text" className="form-control"
                                name="city" value="Boston" />

                        </div>

                        <div className="form-group col-md-12 mb-2">
                          <label htmlFor="parent_tag">
                            ID Type
                          </label>
                          <select
                            id="parent_tag"
                            className="form-control"
                          >
                            {country.map((it, i) => (
                              <option key={i} value={it.id}>
                                {it.name}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="form-group col-md-12 mb-2">
                            <label htmlFor="city">City
                                </label>
                            <input id="city" type="text" className="form-control"
                                name="city" value="Boston" />

                        </div>
                        
                        
                      </div>

                      
                     
                    </div>

                    <div className="form-group col-md-5">

                      <div className="">
                          <label htmlFor="uploadImage">Personal ID / Front
                          </label>
                          <div className="border">

                            <div className='column-flex pl10'>
                              <img src='/public/id-card-front.png' className="imageUpload"/>

                              <button className='btn btn-primary'>Change Photo</button>
                              {/* <input type="file" value="Change Image" /> */}
                            </div>
                          </div>
                      </div>

                      <div className="">
                          <label htmlFor="uploadImage">Personal ID / Back
                          </label>
                          <div className="border ">

                            <div className='column-flex pl10'>
                              <img src='/public/id-card-back.png' className="imageUpload"/>

                              <button className='btn btn-primary'>Change Photo</button>
                              {/* <input type="file" value="Change Image" /> */}
                            </div>
                          </div>
                      </div>

                      

                    </div>
                    
                  </div>
                      
                  <div className="col-md-12 mt-4 pb-3">
                    <div className="row">

                      <div className="form-group col-md-6">
                          <button className='btn border-gray col-md-6'>Cancel</button>
                      </div>
                      <div className="form-group col-md-6 end-flex">
                            <button className='btn btn-success col-md-6'>Submit</button>
                      </div>
                    </div>
                  
                  </div>
                  
                </div>
              </div>

              {/* Footer */}

              <div className="card inner-card bg-danger text-white mb-3">
                <div className="card-header between-flex">
                  <span>Important Information!</span>
                  <button className="btn btn-white bg-white text-danger">New</button>
                </div>
                <div className="card-body">
                  <div className="row">
                    
                    <div className="col-md-12">
                      <span className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum est id eros maximus, tincidunt tempus erat accumsan. Fusce suscipit volutpat libero quis ultricies. Suspendisse ornare laoreet commodo. Ut aliquam magna odio, ut efficitur est tincidunt fringilla. Vestibulum non ante et arcu maximus condimentum id in sapien. Suspendisse consequat elit sed hendrerit convallis. Fusce sit amet elementum elit. Mauris elementum sed dui eu semper.</span>
                    </div>
                  </div>

                  <div className="col-md-12 mt-4 pb-3">
                    <div className="row">

                      <div className="form-group col-md-6">
                          <button className='btn border-white text-white col-md-6'>Cancel</button>
                      </div>
                      <div className="form-group col-md-6 end-flex">
                            <button type="submit" className='btn border-white text-white col-md-6'>Submit</button>
                      </div>
                    </div>
                  
                  </div>
                  
                </div>
              </div>
              

            </div>
            
            
          </div>
        </form>
      </div>
    </div>
                
            </div>
            
        </>

    )

}