export default function HobbyLinks() {
  const hobbyLinks = ["https://store.steampowered.com/", "https://www.innovadiscs.com/"]
  return (
    <div>
      <a href={hobbyLinks[0]}>Steam Store</a>
      <a href={hobbyLinks[1]}>Innova Discs</a>
    </div>
  );
}
