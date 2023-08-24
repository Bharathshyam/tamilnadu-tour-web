import React from 'react'
import { Button } from 'react-bootstrap'

const Rameshwaram = () => {
  return (
    <section id='rameshwaram'>
        <div>
            <div className='container'>
                <h5>06.Rameshwaram</h5>
                <div className='row'>
                    <div className='col-lg-6 col-12'>
                        <img src={require('../Home/Rameshwaran.jpeg')} alt='chennai' className='img-fluid'/>
                    </div>

                    <div className='col-lg-6 col-12'>
                    <p className='text-center m-3' >In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.<br></br><br></br>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available </p>
                    </div>
                </div>


                <div className='text-center my-4'><h5>Must Visit Place In Chennai</h5></div>



                <div className='row'>
                    <div className="card col-lg-3 col-6" >
                        <img src={require('../Home/rameshwarem1.jpeg')} class="card-img-top" alt="chennai1"/>
                                <div className="card-body">
                                    <h5 className="card-title">Dhanushkodi Temple</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Button className='btn'>Read More</Button>
                                </div>
                    </div>

                    <div className="card col-lg-3 col-6" >
                        <img src={require('../Home/rameshwarem2.jpeg')} class="card-img-top" alt="chennai1"/>
                                <div className="card-body">
                                    <h5 className="card-title">Lakshmana Temple</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Button className='btn'>Read More</Button>
                                </div>
                    </div>

                    <div className="card col-lg-3 col-6" >
                        <img src={require('../Home/Rameshwaram3..jpeg')} class="card-img-top" alt="chennai1"/>
                                <div className="card-body">
                                    <h5 className="card-title">Rameshwaram Temple</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Button className='btn'>Read More</Button>
                                </div>
                    </div>

                    <div className="card col-lg-3 col-6" >
                        <img src={require('../Home/rameshwarem1 (5).jpeg')} class="card-img-top" alt="chennai1"/>
                                <div className="card-body">
                                    <h5 className="card-title">Viloondi Thirtham</h5>
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

export default Rameshwaram