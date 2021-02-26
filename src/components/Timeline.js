import {useState} from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel
  } from '@chakra-ui/react';

const Timeline = () => {

    //timeline events i.e., experiences
    const [events] = useState([
        {
            year: 2021,
            open: true,
            items:[
                {
                    title: 'Software Development Engineer Intern @ AWS1',
                    text: 'Designed scalable and fault-tolerant backend monitoring system using Node.js and TypeScript for Amazon Connect Contact Lens',
                }
            ]
        },
        {
            year: 2020,
            open: true,
            items:[
                {
                    title: 'Software Development Engineer Intern @ AWS1',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore incidunt veritatis quasi molestiae aliquid placeat odit quaerat accusantium voluptatibus ducimus, laborum accusamus hic maiores. Veritatis voluptatum nesciunt ipsam doloribus labore',
                },
                {
                    title: 'Software Development Engineer Intern @ AWS2',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore incidunt veritatis quasi molestiae aliquid placeat odit quaerat accusantium voluptatibus ducimus, laborum accusamus hic maiores. Veritatis voluptatum nesciunt ipsam doloribus labore',
                },
                {
                    title: 'Software Development Engineer Intern @ AWS3',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore incidunt veritatis quasi molestiae aliquid placeat odit quaerat accusantium voluptatibus ducimus, laborum accusamus hic maiores. Veritatis voluptatum nesciunt ipsam doloribus labore',
                }
            ]
        },
        {
            year: 2019,
            open: true,
            items:[
                {
                    title: 'Software Development Engineer Intern @ AWS1',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore incidunt veritatis quasi molestiae aliquid placeat odit quaerat accusantium voluptatibus ducimus, laborum accusamus hic maiores. Veritatis voluptatum nesciunt ipsam doloribus labore',
                },
                {
                    title: 'Software Development Engineer Intern @ AWS2',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore incidunt veritatis quasi molestiae aliquid placeat odit quaerat accusantium voluptatibus ducimus, laborum accusamus hic maiores. Veritatis voluptatum nesciunt ipsam doloribus labore',
                }
            ]
        },
    ])

    return (
        <div className='lt-content-column' id='timeline' data-aos="fade-up"data-aos-duration="750"data-aos-easing="custom"data-aos-offset="100">
            <h2><span className="side-header">Timeline</span></h2>
            <Accordion defaultIndex={[0, 1, 2]} allowMultiple>
            {events.map(({year, items, open})=>
                <AccordionItem>
                <div className = 'event-year' data-aos="fade-up"data-aos-duration="750"data-aos-easing="custom"data-aos-offset="100">
                <AccordionButton ><h2>{year}</h2><AccordionIcon/></AccordionButton>
                <AccordionPanel pb={4}>
                    {items.map(({title, text})=>
                        <div className ='event'>
                            <h3>{title}</h3>
                            <p>{text}</p>
                        </div>
                    )}
                </AccordionPanel>
                </div>
                </AccordionItem>
            )}
            </Accordion>
        </div>
    )
}

export default Timeline