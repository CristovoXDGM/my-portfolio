
import './first-section.css';
import React, { Component } from 'react'
import './animat.css';
import git from "../images/git.svg";
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
export default class FirstSection extends Component {


    constructor(props) {
        super();

    }
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

                                <div className=" justify-content-center ">

                                    <a href=" https://github.com/CristovoXDGM"><img className="col-1" src={git} /></a>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>
            </Element>

        )
    }
}
