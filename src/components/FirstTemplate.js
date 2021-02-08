import React, { useState } from 'react';
import './Template.css';
import Profile from './Profile.png';
import ReadMore from './ReadMore';
import Navbar from './Navbar';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function FirstTemplate() {
    const [form, setForm] = useState(null);
    const handleClick = () => {
        setForm(<div>
            <br></br>
            <input className="phone" type="tel" placeholder="Enter your mobile number*" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" ></input>
            <br></br>
            <br></br>
            <input className="name" placeholder="Enter your name*" ></input>
            <br></br>
            <br></br>
            <input className="remarks" placeholder="Enter Remarks (optional)" ></input>
            <br></br>
        </div>)
    }

    return (
        <React.Fragment>

            <div className="card">
                <Router>
                    <Navbar />
                    <Switch>
                        <Route path='/' exact component={null} />
                        <Route path='/reports' component={Reports} />
                        <Route path='/products' component={Products} />
                    </Switch>
                </Router>
                <div className="body" >
                    <h2>Old Car Available</h2>
                    <p><b> &mdash;&mdash;&mdash;&mdash;&mdash; </b> </p>
                    <br></br>
                    <div className="container">
                        <div className="header">
                            <h4>Honda City</h4>
                            <h5>Posted at 1 Nov, 9.30AM</h5>
                        </div>

                        <div className="content">
                            <h6>Specification 01</h6>
                            <h6>Specification 02</h6>
                            <h6>Specification 03</h6>
                        </div>
                        <div className="description">
                            <ReadMore />
                        </div>

                        <div className="prof" >
                            <div className="pic" ><img src={Profile} /> </div>
                            <div className="User" >
                                <h4> Rohan Sharma</h4>
                                <p>Bengaluru, Karnataka</p>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="Bid">
                        <div className="Details" >
                            <h2>Place your loan Bid</h2>
                            <b> &mdash;&mdash;&mdash;&mdash;</b>

                        </div>
                        <div className="Amount" >
                            <form>&#8377; <input className="Val" type="number" /> </form>
                        </div>
                        <br></br>
                        <div className=" LoadVariant ">
                            <button className="Fixed" onClick={handleClick} >Fixed Price</button>
                            <button className="Rate" >Rate Negotiable</button>
                        </div>
                        <div className="form" >
                            {form}
                        </div>
                        <br></br>
                    </div>
                    <div className="BidNow" >
                        <button >Bid Now</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default FirstTemplate;