import {got_img,fm_img,ie_img,mh_img,st_img,st_link,mh_link,ie_link,fm_link,got_link} from './link';


const data = [
    {
        id:1,
        imgsrc:fm_img,
        sname:"The Family Man",
        title:"Amazon Web Series",
        link:fm_link
    },
    {
         id:2,
         imgsrc:got_img,
         sname:"Game of Thrones",
         title:"Hotstar Series",
         link:got_link
    },
    {
         id:3,
         imgsrc:ie_img,
         sname:"Inside Edge",
         title:"Amazon Web Series",
         link:ie_link
    },
    {
         id:4,
         imgsrc:mh_img,
         sname:"Money Heist",
         title:"Netflix Originals Series",
         link:mh_link
    },
    {
        id:5,
        imgsrc:st_img,
        sname:"Strainger Things",
        title:"Netflix Originals Series",
        link:st_link
    }
];

export default data;