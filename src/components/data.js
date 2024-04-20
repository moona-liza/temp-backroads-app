import tour1 from '../images/tour-1.jpeg';
import tour2 from '../images/tour-2.jpeg';
import tour3 from '../images/tour-3.jpeg';
import tour4 from '../images/tour-4.jpeg';

export const pagelinks =[
    {id:1, href:'#home' , text:'home'},
    {id:3, href:'#about' , text:'about'},
    {id:2, href:'#services' , text:'services'},
    {id:4, href:'#tour' , text:'tour'}
];

export const sociallinks = [
    {id:1, href:'https://www.facebook.com', icon :'fab fa-facebook'},
    {id:2, href:'https://www.twitter.com', icon :'fab fa-twitter'},
    {id:3, href:'https://www.twitter.com', icon :'fab fa-squarespace'}
]

export const services =[
    {id:1, icon:'fas fa-wallet fa-fw' ,title:'saving money', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'},
    {id:2, icon:'fas fa-tree fa-fw' ,title:'endless hiking', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'},
    {id:3, icon:'fas fa-socks fa-fw' ,title:'amazing comfort', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'}
]

export const tour =[
    {id:1, img:tour1, date:'august 26th, 2020', title:'Tibet Adventure', info:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',location:' China',duration:'6 days',cost:'2100',icon:'fas fa-map'},
    {id:2, img:tour2, date:'October 1th, 2020', title:'Best Of Java', info:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',location:' Indonesia',duration:'11 days',cost:'1400',icon:'fas fa-map'},
    {id:3, img:tour3, date:'September 15th, 2020', title:'Explore Hong Kong', info:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',location:'Hong Kong',duration:'8 days',cost:'5000',icon:'fas fa-map'},
    {id:4, img:tour4, date:'December 5th, 2019', title:'Kenya Highlights', info:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',location:' Kenya',duration:'20 days',cost:'3300',icon:'fas fa-map'},
    
 ]