import "./EventBooking.css";

const EventBooking = ()=>{
    return(
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
    );
}

export default EventBooking;