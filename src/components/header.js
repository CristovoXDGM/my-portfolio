
import './header.css';
import './animat.css';
import React, { Component } from 'react'

export default class HeaderComponent extends Component {
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
                            <p className="text-black font-weight mb-5">I'm a young Brazilian guy, who loves programming, solve problems through technolgy, play and make videoGames. </p>
                            <p>Living in the state of Alagoas, at the capital in Maceió. My passion for  technology started with my father, he loved to teach about computers, but for him it's was justa hobby, not for me, is more than a hobby. I'm actually working as a programmer at CESMAC Univesity in the Robotics Research Core. I'm open to offers too...</p>
                            <a className="btn button btn-xl js-scroll-trigger text-white" href="#about">More About me</a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
