// import Modal from 'react-modal';
import "./BidditModal.css"

export default function BidditModal () {

    return (
        <>

            <div class="container">
              <a class="button" href="#popup">Biddit</a>
              <div class="popup" id="popup">
                <div class="popup-inner">
                  <div class="popup__photo">
                    <img src="https://cdn-icons-png.flaticon.com/512/2393/2393572.png"  alt="Image of a Hand Bidding"/> 
                  </div>
                  <div class="popup__text">
                    <h1>Biddit</h1>
                    <label>Company Name
                      <input type="text" />
                    </label>
                    <br />
                    <label>Timeline for Completion
                      <input type="text" />
                    </label>
                    <br/>
                    <label>Price Breakdown
                      <input type="text" />
                    </label>
                    <br/>
                    <label>Project Details 
                      <input type="text" />
                    </label>
                    <br/>
                    <a class="bidditButton" href="#">Biddit</a>

                    </div>
                    <a class="popup__close" href="#">X</a>
                    </div>
              </div>
            </div>
        </>
    )
}