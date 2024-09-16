export default function Post({ titulo, link, descripcion, clase, parrafo }) {
  return (
    <>
      <h2>{titulo}</h2>
      <img src={link} alt={descripcion} className="fixedSizeImage" />
      <p>{parrafo}</p>
    </>
  );
}
