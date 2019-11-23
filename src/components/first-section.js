
import './first-section.css';
import React, { Component } from 'react'
import './animat.css';
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
export default class FirstSection extends Component {
    render() {
        return (

            <section className="page-section bg-primary animated fadeIn" >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="text-white mt-0">TEste</h2>
                            <hr className="divider light my-4" />
                            <p className="text-black-50 mb-4">Escrever sobre qué eu sou</p>
                            <a className="btn btn-light btn-xl js-scroll-trigger" href="#services"><Element id="about" name="about">Get Started!</Element></a>
                        </div>
                    </div>

                </div>
            </section>

        )
    }
}
