import "./EventPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

const EventPage = () => {
    return (
        <div className="event-page-main">

            <div className="event-left-main">
                <div className="event-left-img">
                    <img id="main-img" src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" alt="Event image" />
                    <div className="event-left-img-cover"></div>
                    <div className='event-title'>
                        <h5>Concert</h5>
                        <h2>Tech Inovation 2024</h2>
                    </div>
                </div>
                <div className="left-main-details">
                    <div className="main-detail">
                        <p><FontAwesomeIcon icon={faCalendarDays} />date</p>
                    </div>
                    <div className="main-detail">
                        <p><FontAwesomeIcon icon={faClock} />time</p>
                    </div>
                    <div className="main-detail">
                        <p><FontAwesomeIcon icon={faLocationDot} />location</p>
                    </div>
                </div>
                <div className="event-description">
                    <h3>About Event</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore architecto officia amet officiis impedit distinctio perferendis ex veniam vero at quasi optio explicabo sint, voluptatum vitae. Pariatur unde autem qui!
                        Vero sapiente nisi, id maxime atque blanditiis, consequuntur cupiditate nobis doloremque deleniti quam mollitia laborum nulla voluptates quidem libero sequi itaque facere. Nemo fuga earum voluptates facilis necessitatibus quae aperiam?
                        Facilis, repellat minima magnam est iusto ipsa molestias rem cumque quos voluptatibus excepturi ab commodi. A in autem voluptate. Non vel molestiae quo libero quidem aspernatur quasi quisquam, dolorem ipsum.
                        Tempora ipsum cum nemo nulla qui similique, odit aliquid voluptatibus nisi? Illum eum cum fuga voluptas harum quibusdam nam dolor praesentium unde commodi, dolore porro. Aspernatur blanditiis culpa praesentium repudiandae.
                        Soluta, atque et. Accusantium, quaerat eaque blanditiis nemo laboriosam numquam fugit facere quisquam fugiat praesentium consequuntur omnis nesciunt, eligendi quasi odio sunt tempore adipisci, veniam dolorum illo laudantium recusandae similique!</p>
                </div>
                <div className="about-organiser">
                    <h3>Organiser details</h3>
                    <Link to="/user/userid" className="link">
                        <div className="organiser-image">
                            <FontAwesomeIcon icon={faUser} id="event-user-icon" />
                            <div className="organiser-name">User name</div>
                        </div>
                    </Link>
                </div>
            </div>


            <div className="event-right-main">
                <div className="event-select-tickets">
                    <h3>Get tickets</h3>
                    <h5>Price : &#8377; 1000</h5>
                    <p>Available tickets : <span style={{color:"green"}}>5</span></p>
                    <div className="number-of-ticket-container">
                        <button className="general-btn inc-desc-btn">-</button>
                        <h2>2</h2>
                        <button className="general-btn inc-desc-btn">+</button>
                    </div>
                </div>
                <div className="total-price">
                    <h3>Total</h3>
                    <div className="sub-total">
                        <h6 className="total-text">Subtotal</h6>
                        <h6>&#8377; 2500</h6>
                    </div>
                    <div className="sub-total">
                        <h6 className="total-text">Taxes</h6>
                        <h6>&#8377; 250</h6>
                    </div>
                    <div className="sub-total">
                        <h6 className="total-text">Total</h6>
                        <h6>&#8377; 2750</h6>
                    </div>
                </div>

                <div className="book-btn">
                    <button className="general-btn book-btn-main">Book</button>
                </div>
            </div>

        </div>
    )
}

export default EventPage;