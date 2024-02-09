import { Carousel } from 'react-carousel-minimal';
import img1 from '../../assets/image/project_1/01.png'
import img2 from '../../assets/image/project_1/02.png'
import img3 from '../../assets/image/project_1/03.png'
import img4 from '../../assets/image/project_1/04.png'
import img5 from '../../assets/image/project_1/05.png'
import img6 from '../../assets/image/project_1/06.png'
import img7 from '../../assets/image/project_1/07.png'
import img8 from '../../assets/image/project_1/08.png'
import img9 from '../../assets/image/project_1/09.png'
import img10 from '../../assets/image/project_1/10.png'
import img11 from '../../assets/image/project_1/11.png'



function Slider() {

    const data = [
        {
            image: img1,
            caption: "Home Page"
        },
        {
            image: img2,
            caption: "LoginPage"
        },
        {
            image: img3,
            caption: "Order Page"
        },
        {
            image: img4,
            caption: "Payment Page"
        },
        {
            image: img5,
            caption: "San Francisco"
        },
        {
            image: img6,
            caption: "San Francisco"
        },
        {
            image: img7,
            caption: "San Francisco"
        },
        {
            image: img8,
            caption: "San Francisco"
        },
        {
            image: img9,
            caption: "San Francisco"
        },
        {
            image: img10,
            caption: "San Francisco"
        },
        {
            image: img11,
            caption: "San Francisco"
        },
        // {
        //     image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
        //     caption: "Scotland"
        // },
        // {
        //     image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
        //     caption: "Darjeeling"
        // },
        // {
        //     image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
        //     caption: "San Francisco"
        // },
        // {
        //     image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
        //     caption: "Scotland"
        // },
        // {
        //     image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
        //     caption: "Darjeeling"
        // }
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    return (
        <div className="App">
            <div className='text-center' >
                <div className='px-[5px] max-h-[850px]'>
                    <Carousel
                        data={data}
                        time={2500}
                        width="100%"
                        height="auto"
                        captionStyle={captionStyle}
                        radius="5px"
                        slidePosition="bottom"
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnails={true}
                        thumbnailWidth="100px"
                        style={{
                            textAlign: "center",
                            maxWidth: "850px",
                            maxHeight: "500px",
                            margin: "10px auto",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Slider