const About = () => {
    return (
        <div className='lt-content-column' id='about' data-aos="fade-up"data-aos-duration="750"data-aos-easing="custom"data-aos-offset="100">
            <h2><span className="side-header">About</span></h2>
            <div className = 'lt-flex-row' style={{paddingBottom:"7vh"}}>
                <div className = 'lt-flex-50 lt-card lt-shadow' data-aos="fade-up"data-aos-duration="750"data-aos-easing="custom"data-aos-offset="100">
                    <p>Welcome to my little corner of the internet! I’m Austin, a curious engineer interested in medical robotics, ml, and accessible tech — anything that can make technology work better for everyone. Currently, I'm based in Toronto, Canada studying Mechatronics Engineering <a href="https://www.ryerson.ca/programs/undergraduate/mechanical-engineering/">@ryu</a>. I also help build robots for exploring Mars as part of <a href="https://teamr3.ca/">@r3</a>.</p>
                    <br/>
                    <p>In my spare time, you can find me power lifting at the gym, shooting mediocre photos, or at your local beach playing volleyball! Recently, I've started a podcast on which I plan to talk more about some of my thoughts on tech and general musings about the world.</p>
                    <br/>
                    <p>
                        Feel free to download my <a target="_blank" rel="noopener noreferrer" href="./static/Austin_Luu_Resume_2021_C_V1.pdf">resume</a>,
                        poke around <a target="_blank" rel="noopener noreferrer" href="https://github.com/AustinLuu">my GitHub</a>, or
                        contact me for a chat at <a target="_blank" rel="noopener noreferrer"
                            href="mailto:austinowenluu@gmail.com">austinowenluu@gmail.com</a>. I'm always happy to meet new people!
                    </p>
                </div>

                <div className = 'lt-flex-50 img-container'>
                    <img className='me lt-shadow' src='./static/spring-me.jpg' alt='Austin Luu'/>
                    <table className ='highlight lt-shadow'>
                        <tbody>
                        <tr>
                            <td>
                                <pre>
                                    <code className="number-bar">
                                        <span>1</span>
                                        <span>2</span>
                                        <span>3</span>
                                        <span>4</span>
                                        <span>5</span>
                                        <span>6</span>
                                    </code>
                                </pre>
                            </td>
                            <td>
                                <pre>
                                    <code className='language-json' data-lang='json'>
                                        {'{'} <br/>
                                        <span>"bio"</span>: <span>"writes code, builds robots, lifts weights"</span>,<br/>
                                        <span>"currently"</span>: <span>"@ryu, @r3, @celestica"</span>,<br/>
                                        <span>"location"</span>: <span>"Toronto, Canada"</span>,<br/>
                                        <span>"name"</span>: <span>"Austin Luu"</span><br/>
                                        {'}'}
                                    </code>
                                </pre>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default About
