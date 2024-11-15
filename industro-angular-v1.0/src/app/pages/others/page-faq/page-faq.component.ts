import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-faq',
  templateUrl: './page-faq.component.html',
  styleUrls: ['./page-faq.component.css']
})
export class PageFaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/8.jpg",
    title: "FAQ'S",
    crumb: "FAQ'S"
  }

  faqs = [
    {
      q: "What is your cancellation policy?",
      a: "<p> Providing outstanding service is the core of our business. Because spa services reserv especially for you, we ask that you notify us 24 hours in advance to change or cancel appointments without penalty. Without 24 hour notice, we will charge a fee of 50% of the price of the cancelled service, and 100% of the service in the event of a “no-show.” We thank you in advance for your cooperation and understanding. Spa packages and groups must give a minimum 48 hour cancellation notice. </p> <p>Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables. Efficiently unleash cross-media information without cross-media value. Quickly maximize maximized timely deliverables for real-time schemas. Dramatically maintain solutions. Dramatically maintain solutions. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely fixed deliverables for real-time functional schemas.</p>"
    },
    {
      q: "What are your hours?",
      a: "Monday – Friday: 9 to 7pm Saturday: 8 to 6pm Sunday: Closed"
    },
    {
      q: "How do I schedule an appointment?",
      a: "You can schedule your appointment by phone, in person or online. Reservations for your appointment are held with a credit card or gift certificate."
    },
    {
      q: "What should I wear for a spa or salon treatment?",
      a: "No special clothing is required; come as you are! If you are enjoying several services, you will be provided with a robe and slippers. Towels for the eucalyptus steam shower are available. Your personal comfort is always most important to us!"
    },
    {
      q: "What if I have lost my gift certificate?",
      a: "Your certificate is considered the same as cash. It is necessary to keep track of this valuable property."
    }
  ]
}
