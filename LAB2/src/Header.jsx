import PropTypes from "prop-types";
const Header=({title})=>{
    return(
        <header><h1>{title}</h1></header>
        );
}
Header.PropTypes={
    title:PropTypes.string.isRequired,
}
export default Header;