const AboutItems=(onclick,show,data)=>{
    <li onClick={onclick} 
        className={show ? "AboutItemOn":"AboutItemOff"}
    >
    {data.name}
    <AboutItemDescription 
        description={data.description}/>
</li>     
}

export default AboutItems