
import './header.css';
import './animat.css';
import * as Scroll from 'react-scroll';
import React, { Component } from 'react'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

export default class HeaderComponent extends Component {

    constructor(props) {
        super(props);

    }
    componentDidMount() {

        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });

    }

    scrollToTop() {
        scroll.scrollToTop();
    }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    scrollToWithContainer() {

        let goToContainer = new Promise((resolve, reject) => {

            Events.scrollEvent.register('end', () => {
                resolve();
                Events.scrollEvent.remove('end');
            });

            scroller.scrollTo('scroll-container', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });

        });

        goToContainer.then(() =>
            scroller.scrollTo('scroll-container-second-element', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart',
                containerId: 'scroll-container'
            }));
    }

    scrollTo(scrooltoElement) {
        scroller.scrollTo(scrooltoElement, {
            duration: 1500,
            delay: 100,
            smooth: true



        })
    }

    render() {

        return (
            <header className="Master animated fadeIn">
                <div className="TEstando h-100">

                    <div className="row h-100 align-items-center justify-content-center text-center">


                        <div className="col-lg-10 align-self-end">
                            <h1 className="text-uppercase text-black font-weight-bold">Hello!!!</h1>
                            <br></br>
                            <h1 className="text-uppercase text-black font-weight-normal">I am CRISTOVÃO FARIAS</h1>
                            <hr className="divider my-4" />
                        </div>
                        <div className="col-lg-8 align-self-baseline">
                            <p className="text-black font-weight mb-5">I'm a young Brazilian guy, who loves programming, solve problems through technolgy, play and make VideoGames. </p>
                            <p>Living in the state of Alagoas, at the capital in Maceió. My passion for  technology started with my father, he loved to teach about computers, but for him it's was justa hobby, not for me, is more than a hobby. I'm actually working as a programmer at CESMAC Univesity in the Robotics Research Core. I'm open to offers too...</p>
                            <button className="btn button btn-xl js-scroll-trigger text-white" onClick={() => this.scrollTo('about')}  >
                                More About me</button>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
