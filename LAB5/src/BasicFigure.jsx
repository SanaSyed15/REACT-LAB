const BasicFigure = ({ src, caption, onRemove }) => (
    <div className="image-card">
      <img src={src} alt="Gallery" />
      <div className="caption">{caption}</div>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
  export default BasicFigure;
  