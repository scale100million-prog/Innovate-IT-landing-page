export interface Testimonial {
  name: string;
  role: string;
  before: string;
  after: string;
  isFeatured?: boolean;
}

export interface ProblemCard {
  subHeading: string;
  paragraph: string;
}

export interface SystemCard {
  heading: string;
  body: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const HERO_DATA = {
  qualifier: "For Indian F1 Students in the US Who Have Sent 100+ Applications and Still Don't Have an Offer Letter.",
  headlineStart: "We Help Indian F1 Students in the US Get a W2 Job Offer in 45 Days ",
  headlineHook: "by Taking Over Their Entire Job Search Resume, Applications, and Interview Prep — Until the Offer Letter Arrives.",
  subheadline: "Not a course. Not a template. A dedicated team running your entire job search every single day until the offer letter is in your hand. 61 placements in the last 90 days.",
  vslLabel: "How Indian F1 and STEM OPT Students Are Landing US Job Offers in 45 Days — Even With the Clock Running.",
  ctaText: "Book Your Strategy Call"
};

export const SOCIAL_PROOF_DATA = {
  label: "REAL RESULTS",
  headline: "In the Last 90 Days, 61+ Indian F1 Students Went From No Callbacks to Offer Letter. 45 Days Average. $68,000 Average Starting Salary.",
  companyLogos: "Deloitte · Capgemini · Infosys · and more across the US",
  testimonials: [
    {
      name: "Jessica",
      role: "Project Manager, Caterpillar Inc.",
      before: "Enrolled January 6. No offer in sight. Went through 40+ interviews over six months with the team preparing her for every single one.",
      after: "July 21 — offer letter from Caterpillar Inc. as Project Manager.",
      isFeatured: true
    },
    {
      name: "Hellsi",
      role: "Software Engineer, Humana Inc.",
      before: "Joined in August. Within a few months had 15 interview opportunities, reached 3 final rounds.",
      after: "Landed a Software Engineer role at Humana Inc. at $90,000."
    },
    {
      name: "Happy",
      role: "Software Engineer",
      before: "Joined in December. 27 interview opportunities. Continuous prep and support throughout.",
      after: "Secured a Software Engineer offer at $110,000."
    },
    {
      name: "Prit",
      role: "UI/UX Designer",
      before: "Joined in November. 9 interview opportunities in under three months.",
      after: "Secured a UI/UX Designer position by end of January with full technical and interview support throughout."
    },
    {
      name: "Sushmita",
      role: "AI Engineer",
      before: "Joined in February for the AI Engineer profile. Received resume optimization, marketing support, and mock interview preparation throughout the process.",
      after: "18 interview calls in 3 months. Secured an AI Engineer position at $105,000."
    },
    {
      name: "Sreeni",
      role: "Business Analyst",
      before: "Joined the program in September. Attended around 12 interviews with team support for client rounds and technical discussions throughout.",
      after: "Placed as a Business Analyst by December."
    },
    {
      name: "Vaishnavi",
      role: "Data Analyst",
      before: "Joined in January. Started getting interview calls within a few weeks. Attended more than 20 interviews and reached 4 final rounds.",
      after: "Secured a Data Analyst opportunity at $95,000."
    }
  ] as Testimonial[],
  ctaText: "Book Your Strategy Call"
};

export const PROBLEM_DATA = {
  label: "WHY NOTHING IS WORKING",
  headline: "You Are Not Getting Callbacks Because Four Things Are Wrong at the Same Time.",
  cards: [
    {
      subHeading: "Your resume never reaches a real person.",
      paragraph: "US companies use a system that scans every resume before anyone reads it. If your resume is not in the exact format this system expects, it gets removed automatically. No rejection email. Just silence. Most Indian students do not know this is happening to them every single day."
    },
    {
      subHeading: "You are sending 10 applications a day. You need 100.",
      paragraph: "The students getting placed right now are not more qualified than you. They just have more applications going out every day. Ten a day is not enough when your clock is running. One person cannot do 100 targeted applications a day alone."
    },
    {
      subHeading: "You are applying to companies that will not sponsor you.",
      paragraph: "Many companies simply will not hire someone on F1 OPT. Even a perfect application goes nowhere. You need to apply specifically to companies that have hired Indian F1 students before. Most students have no way of knowing which companies those are."
    },
    {
      subHeading: "You are not ready for a US-style interview.",
      paragraph: "American companies interview differently. The questions, the format, and especially the visa conversation — most Indian students have never practiced any of it. When the real call comes, that is where offers are lost."
    }
  ] as ProblemCard[],
  closing: "Four things broken at the same time. Fixing one does not move anything.",
  ctaText: "Book Your Strategy Call"
};

export const SYSTEM_DATA = {
  label: "THE SYSTEM",
  headline: "Here Is Exactly What We Do For You.",
  cards: [
    {
      heading: "Your resume gets rebuilt in 48 hours.",
      body: "Not edited. Rebuilt from the beginning in the format that gets past the screening system and reaches a real person."
    },
    {
      heading: "100 applications go out every day.",
      body: "One person on our team applies to 100 jobs every single day with your name on them. Only companies that actually hire F1 and OPT candidates. We handle every email and every follow-up. You do nothing except prepare for the interviews coming in."
    },
    {
      heading: "You get ready for every interview before it happens.",
      body: "We run practice sessions with you — the questions, the format, how to handle the visa conversation without losing the offer. By the time the real interview comes, you have already done it multiple times."
    },
    {
      heading: "We stay until you have the offer letter.",
      body: "Not until a certain date. Until the job is done."
    }
  ] as SystemCard[],
  ctaText: "Book Your Strategy Call"
};

export const FAQ_DATA = {
  label: "COMMON QUESTIONS",
  items: [
    {
      question: "Why am I not getting any callbacks even after applying to hundreds of jobs?",
      answer: "Three reasons most of the time. Your resume is being removed by the screening system before any person sees it. You are applying to companies that will not hire F1 students. And the volume is too low — 10 to 15 a day is not enough in this market. All three need to be fixed at the same time."
    },
    {
      question: "I have a STEM OPT extension. Does this work for me?",
      answer: "Yes. Most of the students we place are on STEM OPT. The 24-month extension gives you more time but the same problems apply — resume, volume, wrong companies, interview format. We fix all of them."
    },
    {
      question: "How is this different from every other service I have seen?",
      answer: "Every other service gives you something and closes the project — a better resume, a course, a list of companies. We do not close anything until you have the offer letter. One person is applying for you every day. We are preparing you for every interview. Nobody else is doing all of this together."
    },
    {
      question: "What if I only have 30 or 40 days left on my clock?",
      answer: "Book the call today. Arjun had 30 days left. We placed him in 28. The sooner we start applying, the better. Every day you are not in the system is a day you are not getting callbacks."
    },
    {
      question: "Will this help me get H1B sponsorship?",
      answer: "We apply specifically to companies with a history of sponsoring H1B visas for Indian students. Getting placed at one of these companies is the first step toward a proper H1B path. We make sure the role and company match what you need long term, not just for right now."
    },
    {
      question: "What happens on the strategy call?",
      answer: "We look at your resume, how many applications you have sent, and how many days you have left. We tell you exactly what is wrong. If we can help you, we tell you how and what happens next. If we cannot, we tell you that too. Thirty minutes. Honest conversation."
    },
    {
      question: "Can I keep applying on my own at the same time?",
      answer: "Yes. Keep going. We add 100 applications on top of everything you are already doing."
    }
  ] as FAQItem[]
};

export const FINAL_CTA_DATA = {
  line1: "You Did Not Come to the US to Go Back Without a Job.",
  line2: "Your degree is real. Your skills are real. You just need the right system.",
  body: "We look at your resume and your situation and tell you exactly where you stand. No pressure. No pitch.",
  ctaText: "Book Your Strategy Call",
  warningText: "⚠ Limited spots available each month. If your clock is running, book today."
};
