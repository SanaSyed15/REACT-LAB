import PropTypes from "prop-types";
const Footer=({copyright})=>{
    return(
        <footer><p>{copyright}</p></footer>
        );
}
Footer.PropTypes={
    copyright:PropTypes.string.isRequired,
}
export default Footer;