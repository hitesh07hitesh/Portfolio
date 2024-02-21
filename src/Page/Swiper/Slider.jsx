import { Carousel } from 'react-carousel-minimal';

import projectData from '../../data/projectImage.json' 


function Slider(props) {
    const category = projectData.find(item => item.name === props.project);
    const data = category ? category.image.map(image => ({ image, caption: props.project })) : [];
    
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