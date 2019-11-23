import * as Scroll from 'react-scroll';
import React, { Component } from 'react'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
export default class NavBarComponent extends Component {
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
            <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger text-black font-weight-bold" onClick={() => this.scrollToTop()}>CRISTOVÃO</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto my-2 my-lg-0">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger text-black" onClick={() => this.scrollTo('about')}>Sobre</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger text-black" href="#services">Conhecimentos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger text-black" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger text-black" href="#contact">Contatos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
