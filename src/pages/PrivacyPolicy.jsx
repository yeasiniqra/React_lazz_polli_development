import React from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import commonBg from '../images/room.webp';

const PrivacyPolicy = () => {
    return (
        <>
        <PageHeader imageURL={commonBg} title={'Privacy Policy'}/>
        <div className="privacy-policy">
            <div className='container'>
                <div className="privacy-main">
                 <h2>Privacy Policy</h2>
                <p>
                    At Lazz Polli Resort, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website and make use of our services.</p>
                    <span><b>Information We Collect</b></span>
                   <p>We may collect various types of information from you when you visit our website or use our services. This includes:
                </p>
                <ul>
                    <li><i class="fa fa-circle" aria-hidden="true"></i>Personal information such as your name, email address, postal address, and phone number</li>
                    <li><i class="fa fa-circle" aria-hidden="true"></i>Payment information such as your credit card details</li>
                    <li><i class="fa fa-circle" aria-hidden="true"></i>Information about your stay at our resort, including your room preferences, dining choices, and any special requests</li>
                    <li><i class="fa fa-circle" aria-hidden="true"></i>Technical information such as your IP address, browser type, and operating system
                      We may collect this information through various means such as website forms, online reservations, and email communications. We may also use cookies and other tracking technologies to collect information about your use of our website and to improve our services.</li>
                </ul>

               <span><b>How We Use Your Information
                We use the information we collect for various purposes such as:</b></span>
                <ul>
                    <li><i class="fa fa-circle" aria-hidden="true"></i>To process your reservations and payments</li>
                    <li><i class="fa fa-circle" aria-hidden="true"></i>To provide you with the services you have requested</li>
                    <li><i class="fa fa-circle" aria-hidden="true"></i>To personalize your experience at our resort</li>
                    <li><i class="fa fa-circle" aria-hidden="true"></i>To communicate with you about your reservations, special offers, and promotions</li>
                    <li><i class="fa fa-circle" aria-hidden="true"></i>To improve our website and services</li>
                    <li><i class="fa fa-circle" aria-hidden="true"></i>To comply with legal obligations
                     We may also use your information for marketing purposes, but only if you have given us your consent to do so. You can opt-out of receiving marketing communications at any time by contacting us using the details provided below.</li>
                </ul>

                <span><b>How We Share Your Information
                We may share your personal information with third parties in the following circumstances:</b></span>
                <ul>
                    <li><i class="fa fa-circle" aria-hidden="true"></i>With our service providers who assist us in providing our services such as payment processors, IT support, and marketing agencies</li>
                    <li><i class="fa fa-circle" aria-hidden="true"></i>With our business partners who offer services at our resort such as restaurants and spas</li>
                    <li><i class="fa fa-circle" aria-hidden="true"></i>With regulatory and law enforcement agencies as required by law</li>
                </ul>

                <p className='pt-15'>We will never sell your personal information to third parties for their own marketing purposes.
                How We Protect Your Information
                We take appropriate measures to protect your personal information from unauthorized access, use, or disclosure. We use industry-standard security measures such as encryption and firewalls to protect your information.
                Your Rights
                You have the right to access and update your personal information, and to request that we delete it. You also have the right to object to the processing of your personal information or to request that we restrict its processing. If you wish to exercise any of these rights, please contact us using the details provided below.</p>

                <p className='pt-15'>
               <span><b>Changes to this Privacy Policy</b></span>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the updated Privacy Policy on our website. Your continued use of our website and services after any such changes will constitute your acceptance of the new Privacy Policy.
                <span><b>Contact Us</b></span>
                If you have any questions or concerns about this Privacy Policy or our use of your personal information, please contact us at Lazz Polli Resort, Hemayetpur Saver.</p>
            </div>
          </div>
        </div>
      </>  
    );
};

export default PrivacyPolicy;