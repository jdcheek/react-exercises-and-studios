export default function BookList() {
  let pageTitle = "List of Books";
  let book1 = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.nnI3HkIMILxsvNqQpC2X1gHaLM%26pid%3DApi&f=1&ipt=60f053c416d7be398cfde3c8891de3332e95f0d8c3fe25d5080ed91404adad18&ipo=images";
  let book2 = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.GvJv3LsVYIHyEZ31NPUEFwAAAA%26pid%3DApi&f=1&ipt=ed02e53889892313cf0fb896e187830bd06cbfeb278e0f8ac0a80772320bf165&ipo=images";
  let book3 = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Uld7qlz9y_BojhXj_Wm_JQHaMH%26pid%3DApi&f=1&ipt=2f1f76d345d5397037d38bfb9a636af19d55e8dbd564f0aa539ed1010ceb4d2c&ipo=images";

  return (
    <div>
      <h3>{pageTitle}</h3>
      <img src={book1} alt="Dune 1" />
      <img src={book2} alt="Dune 2" />
      <img src={book3} alt="Dune 3" />
    </div>
  );
}
