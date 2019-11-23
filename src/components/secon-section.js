

import React, { Component } from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


//Modify and work more ate this page
export default class SeconSection extends Component {
    render() {
        return (
            <Element id={this.props.id} name={this.props.name}>
                <section className="page-section   animated fadeIn" >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h2 className="text-black mt-0">My Skills...</h2>
                                <hr className="divider light my-4" />
                                <p className="text-black-50 mb-4">Flutter especialist, React Native, React.Js, Firebase, Mysql, Unity ,Learn a new technology...</p>
                                <hr className="divider light my-4" />

                                <div className="row justify-content-center ">


                                </div>

                            </div>
                        </div>

                    </div>
                </section>
            </Element>
        );
    }
}
