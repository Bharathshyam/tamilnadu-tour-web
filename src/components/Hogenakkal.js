import React from 'react'
import { Button } from 'react-bootstrap'

const Hogenakkal = () => {
  return (
    <section id="hogenakkal">
        <div>
            <div className='container'>
                <h5>10.Hogenakkal</h5>
                <div className='row'>
                    <div className='col-lg-6 col-12'>
                        <img src={require('../Home/Hogenakkal.jpeg')} alt='chennai' className='img-fluid'/>
                    </div>

                    <div className='col-lg-6 col-12'>
                    <p className='text-center m-3' >In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.<br></br><br></br>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available </p>
                    </div>
                </div>


                <div className='text-center my-4'><h5>Must Visit Place In Hogenakkal</h5></div>



                <div className='row'>
                    <div className="card col-lg-3 col-6" >
                        <img src={require('../Home/hogenakkal1.jpeg')} class="card-img-top" alt="chennai1"/>
                                <div className="card-body">
                                    <h5 className="card-title">Therthamali Temple</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Button className='btn'>Read More</Button>
                                </div>
                    </div>

                    <div className="card col-lg-3 col-6" >
                        <img src={require('../Home/hogenakkal2..jpeg')} class="card-img-top" alt="chennai1"/>
                                <div className="card-body">
                                    <h5 className="card-title">Hogenakkal Falls</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Button className='btn'>Read More</Button>
                                </div>
                    </div>

                    <div className="card col-lg-3 col-6" >
                        <img src={require('../Home/hogenakkal3.jpeg')} class="card-img-top" alt="chennai1"/>
                                <div className="card-body">
                                    <h5 className="card-title">Pennagaram Village</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Button className='btn'>Read More</Button>
                                </div>
                    </div>

                    <div className="card col-lg-3 col-6" >
                        <img src={require('../Home/hokenakkal4..jpeg')} class="card-img-top" alt="chennai1"/>
                                <div className="card-body">
                                    <h5 className="card-title">Mettur Dam</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Button className='btn'>Read More</Button>
                                </div>
                                
                    </div>
                </div>
                

            </div>
        </div>

    </section>
  )
}

export default Hogenakkal