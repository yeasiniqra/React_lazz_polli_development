import React from 'react';

const TermsConditions = () => {
    return (
        <div className="privacy-policy">
            <div className='container'>
              <div className="privacy-main">
                <h2> Refund Policy</h2>
                <p>Thank you for choosing our resort for your vacation! We strive to provide our guests with the best possible experience during their stay with us. We understand that sometimes situations arise that require a change in plans, and we want to make sure that our guests are aware of our return policy.
                CANCELLATIONS If you need to cancel your reservation, please contact us as soon as possible. We understand that things can change, and we want to be as flexible as possible.</p> 
                <span>Our cancellation policy is as follows:</span>
                <ul>
                    <li><i class="fa fa-circle" aria-hidden="true"></i>Cancellations made at least 10 days prior to the check-in date will receive a full refund.</li>
                    <li><i class="fa fa-circle" aria-hidden="true"></i>Cancellations made between 5-7 days prior to the check-in date will receive a 50% refund. </li>
                    <li><i class="fa fa-circle" aria-hidden="true"></i>Cancellations made less than 5 days prior to the check-in date will not receive a refund. </li>
                </ul>
                <p className='pt-15'>EARLY DEPARTURES If you need to check out early, please let us know as soon as possible. Unfortunately, we cannot offer refunds for early departures.
                NO-SHOWS If you do not show up for your reservation and do not contact us to cancel, you will be charged the full amount of your reservation.</p>

                <p className='pt-15'>
                ADDITIONAL INFORMATION Please note that all refunds will be issued in the same form as the original payment. Refunds may take 7 to 10 working days to process.
                We also reserve the right to make changes to our return policy at any time without prior notice.
                If you have any questions or concerns about our return policy, please do not hesitate to contact us. We want to make sure that your stay with us is enjoyable and stress-free!
                </p>
              </div>
          </div>
        </div>
    );
};

export default TermsConditions;