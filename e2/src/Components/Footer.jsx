

// ---------------------------------------footer-----------
const Links=()=>{
  return(
    <div>
        <ul style={{listStyleType: "none"}}>
            <li ><a href="#">About us</a></li>
            <li ><a href="#">Careers</a></li>
        </ul>
    </div>
  )
}
const Address=()=>{
    return(
        <div>
        <p>Manoj Kadali, Lovely professional university,<br/>
        Phagawara, punjab, <br/>
        +91 7702786281</p>
        </div>
    )
}
const Footer=()=>{
    return(
        <div style={{borderTop:"2px solid Grey"}} >
            <div style={{justifyContent: "space-between",display:"flex"}}>
                <Links/>
                <Address/>
            </div>
            <div style={{alignItems:"center",display:"flex",justifyContent:"center"}}>
            <p> copyright belongs to manoj kadali 2025.</p>
            </div>
        </div>

    )
}

export default Footer;